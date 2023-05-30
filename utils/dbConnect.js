const mongoose = require("mongoose");
module.exports = mongoose
  .connect("url")
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));
