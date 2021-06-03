import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const readByRecipientSchema = Schema(
  {
    _id: false,
    readByUserId: String,
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: false }
);

// const messageSchema = Schema(
//   {
//     _id: {
//       type: String,
//       default: () => uuidv4.replace(/-/g, ""),
//     },
//     body: {
//       type: String,
//       required: true,
//     },
//     type: {
//       type: String,
//       default: "chat",
//     },
//     from: {
//       type: Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     to: {
//       type: Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//   },
//   { timestamps: true }
// );

const groupMessageSchema = Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4.replace(/-/g, ""),
    },
    body: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "groupchat",
    },
    roomId: String,
    from: String,
    readByRecipients: [readByRecipientSchema],
  },
  { timestamps: true, collection: "groupmessages" }
);

groupMessageSchema.statucs.createPostInChatRoom = async function (
  roomId,
  body,
  from
) {
  try {
    const post = await this.create({
      roomId,
      body,
      from,
      readByRecipients: { readByUserId: from },
    });

    const aggregate = await this.aggregate([
      // get post where _id = post._id
      { $match: { _id: post._id } },
      // do a join on another table called users, and get me a user whose _id = from
      {
        $lookups: {
          from: "users",
          localField: "from",
          foreignField: "_id",
          as: "from",
        },
      },
      { $unwind: "$from" },
      // do a join on another table called groups, and get me a group whose _id = roomId
      {
        $lookup: {
          from: "groups",
          localField: "roomId",
          foreignField: "_id",
          as: "groupRoomInfo",
        },
      },
      { $unwind: "$groupRoomInfo" },
      { $unwind: "$groupRoomInfo.membersIds" },
      // do a join on another table called users, and
      // get me a user whose _id = membersIds
      {
        $lookup: {
          from: "users",
          localField: "groupRoomInfo.membersIds",
          foreignField: "_id",
          as: "groupRoomInfo.userProfile",
        },
      },
      { $unwind: "$groupRoomInfo.userProfile" },
      // group data
      {
        $group: {
          _id: "$groupRoomInfo._id",
          postId: { $last: "$_id" },
          roomId: { $last: "$groupRoomInfo._id" },
          body: { $last: "$body" },
          from: { $last: "$from" },
          readByRecipients: { $last: "$readByRecipients" },
          groupRoomInfo: { $addToSet: "$groupRoomInfo.userProfile" },
          createdAt: { $last: "$createdAt" },
          updatedAt: { $last: "$updatedAt" },
        },
      },
    ]);
    return aggregate[0];
  } catch (err) {
    console.log();
  }
};

// mongoose.model("Message", messageSchema);
export default mongoose.model("GroupMessage", groupMessageSchema);

// mongoose.exports = {
//   messageSchema,
//   groupMessageSchema,
// };
