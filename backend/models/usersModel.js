const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  bookname: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
});
module.exports = new mongoose.model("users", usersSchema);
