const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
    },
    description: {
      type: String,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const groupInboxSchema = Schema({
  unreadMessages: {
    type: Number,
  },
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: "GroupMessage",
  },
});

mongoose.model("Group", groupSchema);
mongoose.model("GroupInbox", groupInboxSchema);

module.exports = {
  groupSchema,
  groupInboxSchema,
};
