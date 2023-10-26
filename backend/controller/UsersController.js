const usersModel = require("../models/usersModel");

module.exports.register = async (req, res) => {
  try {
    const data = req.body;
    const newUser = new usersModel(data);
    await newUser.save().then(() => {
      res.status(200).json({ message: "user registered successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getUsersById = async (req, res) => {
  let user;
  const id = req.params.id;
  try {
    user = await usersModel.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getUsers = async (req, res) => {
  let users;
  try {
    users = await usersModel.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};
