import UserModel from "../models/User";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      return res.status(200).json({ success: true, users });
    } catch (err) {
      return res.status(500).json({ success: false, error: err });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await UserModel.findOne({ _id: req.params.id });
      if (!user) throw Error({ error: "No user with this id found" });
      return res.status(200).json({ success: true, user });
    } catch (err) {
      return res.status(500).json({ success: false, error: err });
    }
  },
  createUser: async (req, res) => {},
  deleteUserById: async (req, res) => {
    try {
      const result = await UserModel.remove({ _id: req.params.id });
      return res
        .status(204)
        .json({
          success: true,
          message: `Deleted a count of ${result.deletedCount} user`,
        });
    } catch (err) {
      res.status(204).json({ success: false, error: err });
    }
  },
};
