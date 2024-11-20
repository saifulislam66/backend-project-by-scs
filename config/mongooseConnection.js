const mongoose = require("mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URL")}/scatc`)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
