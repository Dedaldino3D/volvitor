import mongoose from "./instance";
import { v4 as uuidv4 } from "uuid";

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/-/g, ""),
    },
    username: {
      type: String,
      minLenght: 2,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      minLenght: 8,
      require: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true, collection: "users" }
);

export default mongoose.model("User", userSchema);
