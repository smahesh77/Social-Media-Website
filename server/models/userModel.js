const mong = require('mongoose')
const db = require('../config/db')
const {Schema} = mong

const userModel = db.model('user', new Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
    },
    following: [{ type: mong.Schema.Types.ObjectId, ref: 'userModel' }],
    followers: [{ type: mong.Schema.Types.ObjectId, ref: 'userModel' }]
}))
console.log("done");
module.exports = userModel;