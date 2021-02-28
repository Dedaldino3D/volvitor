const mongoose = require("./instance");

const userSchema = mongoose.Schema(
  {
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
  { timestamps: true }
);

mongoose.model("User", userSchema);

// const User = mongoose.model("users");

// new User({
//   ...fields,
// }).save().then().catch();

module.exports = UserSchema;
