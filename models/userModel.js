const mongoose = require("mongoose");

// mongoose.connect("mongodb://0.0.0./scatch").then(() => {
//   console.log("db connected");
// });

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  oders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);
