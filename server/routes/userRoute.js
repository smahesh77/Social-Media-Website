const router = require('express').Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel');
const { json } = require('express');
const jwt = require('jsonwebtoken')

router.post("/register", (req, res) => {
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

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email: email})
    if(!user){
        res.json("User not found")
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match){
                res,json("Wrong password")
            }else {
                const token = jwt.sign({ email:user.email, name: user.name, id: user.id}, "key")
                res.json({status:"Logged in", token : token, name: user.name})
            }
        })
    }


})

module.exports = router