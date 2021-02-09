import { v4 as uuidV4 } from "uuid";

const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const session = require("express-session");

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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
app.use(express.urlencoded({ extended: true }));
// start database connection
mongoose
  .connect("mongodb://localhost/volvitor", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error when connecting to database, error: ", err);
  });

app.get("/join", (req, res) => {
  res.send({ link: uuidV4() });
});

// Run when client connect
io.on("connection", (socket) => {
  console.log("socket established");

  // listening event when user join in a room
  socket.on("joinRoom", (data) => {
    // get info from data
    const { roomID, userID } = data;

    // join to specified room
    socket.join(roomID);
    socket.to(roomID).broadcast.emit("joinedUser", data);

    // listening to disconnection event
    socket.on("disconnected", () => {
      socket.to(roomID).broadcast.emit("userDisconected", userID);
    });

    // listing to incoming group messages
    socket.on("sendGroupchat", (message) => {
      socket.to(roomID).broadcast.emit("groupchat", { ...message, data });
    });
  });
});

// Run application
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
