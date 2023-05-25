const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }]
});



const userModel = db.model('user', userSchema);
console.log("done");
module.exports = userModel;