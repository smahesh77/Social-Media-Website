const router = require("express").Router();
const userModel = require("../models/userModel");
const {json} = require("express");
const postModel = require("../models/postModel");

router.post("/create", async (req, res) => {
  const {title, desc, imageUrl, tag, userId} = req.body;

  const post = new postModel(req.body);

  try {
    let name;
    if (userId) {
      const user = await userModel.findById(userId);
      user.posts.push(post.id);
      name = user.name;
      await user.save();
    }
    await post.save();
    console.log(` saved to ${name}`);
    res.json({msg: "post created", user: name});
  } catch (err) {
    res.json(err);
  }
});
//get all posts
router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({});
    const user = await userModel.findById(result.id);
    res.status(200).json({posts: result, user: user});
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
