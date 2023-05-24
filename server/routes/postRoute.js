const router = require('express').Router()
const userModel = require('../models/userModel');
const { json } = require('express');
const postModel = require('../models/postModel')


router.post('/create', async (req, res) => {
    const {title, desc, imageUrl, userId} = req.body;

    const post = new postModel(req.body)

    try {
        let name
        if(userId){
            const user = await userModel.findById(userId)
            user.posts.push(post.id)
            name = user.name
            await user.save()
        }
        await post.save()
        console.log(` saved to ${name}`)
        res.json({msg: "post created", user : name})
    } catch (err) {
        res.json(err);
    }

})
router.get('/', async (req, res) => {
    try {
        const result = await postModel.find({});
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json(err);
      }
})


module.exports = router