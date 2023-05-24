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

// userSchema.path('followers').validate(async function (value) {
//   const userId = this._id;
//   const duplicateFollowers = await mongoose.models.user.countDocuments({
//     _id: { $ne: userId },
//     followers: { $in: value }
//   });

//   return duplicateFollowers === 0;
// }, 'Duplicate followers are not allowed.');

const userModel = db.model('user', userSchema);
console.log("done");
module.exports = userModel;