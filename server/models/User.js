const mongoose = require("./instance");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastLogin: {
    type: Date,
  },
});

mongoose.model("users", UserSchema);

// const User = mongoose.model("users");

// new User({
//   ...fields,
// }).save().then().catch();

module.exports = UserSchema;
