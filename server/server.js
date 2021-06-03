import { v4 as uuidV4 } from "uuid";
/** MongoDB connection setup */
import "./config/mongo";
import { userSchema } from "./models/User";
import { groupSchema, groupInboxSchema } from "./models/Group";
import { messageSchema, groupMessageSchema } from "./models/Message";

const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const session = require("express-session");

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
export const io = socketIo(server);

// app routes imports
const users = require("./routes/users");
const rooms = require("./routes/rooms");

// app models imports
const User = mongoose.model("User", userSchema);
const Group = mongoose.model("Group", groupSchema);
const Message = mongoose.model("Message", messageSchema);
const GroupMessage = mongoose.model("GroupMessage", groupMessageSchema);
const GroupInbox = mongoose.model("GroupInbox", groupInboxSchema);

/* Middlewares */

// configuring session
app.use(
  session({
    secret: "keepitsecret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app routes
app.use("/users", users);
app.use("/rooms", rooms);

// -------------------------------

/** catch 404 and forward to error handler */
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesn't exist",
  });
});

app.get("/join", (req, res) => {
  res.send({ link: uuidV4() });
});

// Run when client connect
io.on("connection", (socket) => {
  console.log("socket established", socket);

  // listening event when user join in a room
  socket.on("group:join", (roomId, userId, data) => {
    // TODO: add user to this room
    // joinedRoomListeningEvents(socket, data)

    // join to specified room
    socket.join(roomId);

    // TODO: check if is a private room
    // add user to members
    Group.findById(roomId, (err, res) => {
      if (err) throw new Error();
      console.log("join group res: ", res);
      res.members.push(userId);
      // sending to all clients in "roomId" room, including sender
      io.in(roomId).emit("group:joined", userId, data);
    });

    // listening to disconnection event
    socket.on("disconnected", () => {
      socket.to(roomId).emit("userDisconected", userId);
    });
  });

  // leaving or muting a room
  socket.on("group:leave", (roomId) => {
    socket.leave(roomId);
  });

  // listing to incoming group messages
  socket.on("group:msg:send", (roomId, message) => {
    // TODO: save message
    message.to = roomId;
    const ms = new GroupMessage();
    ms.save((err, doc) => {
      if (err) throw new Error(err);
      socket.to(roomId).emit("group:msg:sent", roomId, doc);
    });
  });

  socket.on("group:getInbox", () => {
    const inboxes = GroupInbox.find().sort("-lastMessage.createdAt");
    socket.emit("group:inbox", inboxes);
  });

  // TODO: use an endpoint to create room
  socket.on("group:create", (userId, data) => {
    // TODO: get user data from logged user
    try {
      const group = new Group({
        name: data.name,
        owner: userId,
        isPrivate: data.isPrivate,
        description: data.description,
      });

      group.save((err, doc) => {
        if (err) throw new Error(err);
        Group.find({ _id: doc.id })
          .populate("owner")
          .exec((err, doc) => {
            if (err) throw new Error(err);
            console.log("group: ", doc);
            io.emit("group:created", doc._id, doc);
          });
      });
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("chat:send", (userId, data) => {
    // TODO: validate data
    // TODO: get logged user data
    data.to = userId;
    // data.from = logged user
    const ms = new Message(data);
    ms.save((err, doc) => {
      if (err) throw new Error(err);
      // sending to userId (private message)
      io.to(userId).emit("chat:sent", userId, data);
    });
  });

  socket.on("chat:getInbox", () => {
    // TODO: get logged user id
    let userId = 1;
    const inbox = Message.find({ to: userId }).sort("-createdAt");
    socket.emit("chat:inbox", inbox);
  });
});

// Run application
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

// io.on("connection", (socket) => {
//   // sending to the client
//   socket.emit("hello", "can you hear me?", 1, 2, "abc");
//   // sending to all clients except sender
//   socket.broadcast.emit("broadcast", "hello friends!");
//   // sending to all clients in "game" room except sender
//   socket.to("game").emit("nice game", "let's play a game");
//   // sending to all clients in "game1" and/or in "game2" room, except sender
//   socket.to("game1").to("game2").emit("nice game", "let's play a game (too)");
//   // sending to all clients in "game" room, including sender
//   io.in("game").emit("big-announcement", "the game will start soon");
//   // sending to all clients in namespace "myNamespace", including sender
//   io.of("myNamespace").emit(
//     "bigger-announcement",
//     "the tournament will start soon"
//   );
//   // sending to a specific room in a specific namespace, including sender
//   // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
//   // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.
//   io.of("myNamespace").to("room").emit("event", "message");

//   // sending to individual socketid (private message)
//   io.to(socketId).emit("hey", "I just met you");

//   // sending with acknowledgement
//   socket.emit("question", "do you think so?", (answer) => {});
//   // sending without compression
//   socket.compress(false).emit("uncompressed", "that's rough");
//   // sending a message that might be dropped if the client is not ready to receive messages
//   socket.volatile.emit("maybe", "do you really need it?");
//   // sending to all clients on this node (when using multiple nodes)
//   io.local.emit("hi", "my lovely babies");
//   // sending to all connected clients
//   io.emit("an event sent to all connected clients");
// });
