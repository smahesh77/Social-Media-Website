const moong = require('mongoose')
const db = require('../config/db')
const {Schema} = moong

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
    }
}))
console.log("done")
module.exports = userModel