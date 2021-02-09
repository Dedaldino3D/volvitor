const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("users");
const router = express.Router;

router.get("/", async (req, res) => {
  try {
    const users = User.find().sort({ lastLogin: "desc" });
    res.send(users);
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

async function isUserPresent(email) {
  const user = await User.findOne({ _email: email });
  if (user) return true;
  return false;
}

router.post("/register", async (req, res) => {
  if (await isUserPresent(req.body.email)) {
    res.send({
      error: "An user is already registered with this email address",
    });
    return;
  }

  const user = {
    username: req.body.username,
    email: req.body.email,
    password1: req.body.password1,
    password2: req.body.password2,
  };

  try {
    const rs = await User(user).save();
    console.log(rs);
  } catch (err) {
    console.log("Error saving user");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    user.username = req.body.username;
    user.email = req.body.email;
    await user.save({}, () => {
      console.log("ERROR updating user");
    });
  } catch (err) {
    // TODO: HANDLE USER DOES NOT EXIST
    console.log("ERROR updating user", err);
  }
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id, {}, (err, res) => {
    if (err) {
      res.send({ error: `Can not delete user ${req.params.id}` });
    }
    res.send("user deleted");
  });
});
