const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");
const env = require("dotenv").config();

router.get("/", (req, res) => {
  res.send("hey its working owener");
});

if (process.env.NODE_ENV == "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(504).send("You Don't have permission to create owner");
    }

    let { fullname, email, password } = req.body;
    const createOwner = await ownerModel.create({
      fullname: fullname,
      email: email,
      password: password,
    });

    res.send(createOwner);
  });
}

module.exports = router;
