const router = require('express').Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

router.post("/login", (req, res) => {
    const {name, email, password} = req.body;
    console.log(name)
    bcrypt.hash(password, 10).then(async(hash) => {
        try {
            const newUser =new userModel({name: name, password: hash, email: email})
            await newUser.save()
            res.json({status:"User created", user:{name: name, email: email}})
        } catch (err) {
            console.log(err)

            res.json("Something went wrong")
        }
    })
})

module.exports = router