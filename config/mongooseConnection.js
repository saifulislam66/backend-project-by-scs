const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0./scatch")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
