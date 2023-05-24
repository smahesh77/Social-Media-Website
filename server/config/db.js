const mong = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const URI = process.env.MONGO_URL;
const connection = mong
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(5000);
    console.log("Connected");
  })
  .catch((err) => console.log(err));

module.exports = mong;
