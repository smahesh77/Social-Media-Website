const router = require('express').Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel');
const { json } = require('express');
const jwt = require('jsonwebtoken')

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    console.log(name)
    bcrypt.hash(password, 10).then(async (hash) => {
        try {
            const newUser = new userModel({ name: name, password: hash, email: email })
            await newUser.save()
            res.json({ status: "User created", user: { name: name, email: email } })
        } catch (err) {
            console.log(err)

            res.json("Something went wrong")
        }
    })
})

router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const user = await userModel.findOne({ name: name })
    if (!user) {
        res.json("User not found")
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res, json("Wrong password")
            } else {
                const token = jwt.sign({ name: user.name, id: user.id, user: user }, "key")
                res.json({
                    status: "Logged in",
                    token: token,
                    name: user.name,
                    followersIds: user.followers,
                    followerCount: user.followers.length,
                    followingId: user.following,
                    followingCount: user.following.length
                })
            }
        })
    }
})

// to get users
router.get('/getusers', async (req, res) => {
    try {
        const result = await userModel.find({})
        console.log("getting in")
        console.log(result.name)
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err)
    }
})

// link to follow 
router.post('/follow', async (req, res) => {
    const { name1, name2 } = req.body // this will take two emails, one for the user who wants to follow(userEmail) and one for the user who wants to follow(followEmail)
    try {
        const user1 = await userModel.findOne({ name: name1 })
        const user2 = await userModel.findOne({ name: name2 }) //user1 will follow user2
        console.log(user1.name)
        if (!(user1 || user2)) {
            res.json({ error: "Make sure the users exist" })
        } else {
            if (!user2.followers.includes(user1.id)) {
                await user2.updateOne({ $push: { followers: user1.id } });
                await user1.updateOne({ $push: { followings: user2.id } });
                res.status(200).json(`${user1.name} started following ${user2.name}`);
            } else {
                res.status(403).json("you already follow this user");
            }


        }
    } catch (err) {
        res.json(err)
    }

})

router.post("/unfollow", async (req, res) => {
    const { name1, name2 } = req.body
    try {
        console.log("got in")
        const user1 = await userModel.findOne({ name: name1 })
        const user2 = await userModel.findOne({ name: name2 }) //user1 will unfollow user2
        if (user2.followers.includes(user1.id)) {
            await user2.updateOne({ $pull: { followers: user1.id } });
            await user1.updateOne({ $pull: { followings: user1.id} });
            res.status(200).json(`${user1.name} has unfollowed ${user2.name}`);
        } else { 
            res.status(403).json("you dont follow this user");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router