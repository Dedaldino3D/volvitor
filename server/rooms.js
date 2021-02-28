const mongoose = require("mongoose");

const User = mongoose.model("User");
const Group = mongoose.model("Group");
const Message = mongoose.model("Message");
const GroupMessage = mongoose.model("GroupMessage");

export const joinedRom = (socket, data) => {
  // get info from data
  const { roomID, userID } = data;

  // join to specified room
  socket.join(roomID);
  socket.to(roomID).emit("joinedUser", data);
  // sending to all clients in "game" room, including sender
  // io.in(roomID).emit('joined:user', data);
  // listening to disconnection event
  socket.on("disconnected", () => {
    socket.to(roomID).emit("userDisconected", userID);
  });

  // listing to incoming group messages
  socket.on("sendGroupchat", (message) => {
    socket.to(roomID).emit("groupchat", { ...message, data });
  });
};

export function validateUsers(userIds) {
  if (!Array.isArray(userIds)) throw new Error("users attribute is not valid");
  if (userIds.length === 0) return;
  const users = User.where("_id").in(userIds);
  return users;
}
