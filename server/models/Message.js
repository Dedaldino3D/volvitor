const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = Schema(
  {
    body: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "chat",
    },
    from: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const groupMessageSchema = Schema(
  {
    body: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "groupchat",
    },
    from: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Group",
    },
  },
  { timestamps: true }
);

mongoose.model("Message", messageSchema);
mongoose.model("GroupMessage", groupMessageSchema);

mongoose.exports = {
  messageSchema,
  groupMessageSchema,
};
