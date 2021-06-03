import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const groupSchema = Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/-/g, ""),
    },
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
    owner: String,
    membersIds: Array,
  },
  { timestamps: true, collection: "group" }
);

groupSchema.statics.initiateChat = async function (membersIds, owner) {
  try {
    const availableRoom = await this.findOne({
      membersIds: {
        $size: membersIds.length,
        $all: [...membersIds],
      },
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: "retrieving an old group chat",
        roomId: availableRoom._doc._id,
      };
    }

    const newRoom = await this.create({ membersIds, owner });
    return {
      isNew: true,
      message: "creating a new group",
      roomId: newRoom._doc._id,
    };
  } catch (err) {
    console.log("error on start chat method", err);
    throw err;
  }
};

// const groupInboxSchema = Schema({
//   unreadMessages: {
//     type: Number,
//   },
//   lastMessage: {
//     type: Schema.Types.ObjectId,
//     ref: "GroupMessage",
//   },
// });

export default mongoose.model("Group", groupSchema);
// mongoose.model("GroupInbox", groupInboxSchema);

// module.exports = {
//   groupSchema,
//   groupInboxSchema,
// };
