const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Book-Store")
  .then(() => console.log("connected"));

// module.exports = mongoose;
