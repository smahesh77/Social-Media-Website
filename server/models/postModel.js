const db = require("../config/db");

const postModel = db.model(
  "post",
  new db.Schema({
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      //required: true,
    },
    userId: {
      type: db.Schema.Types.ObjectId,
      ref: "user",
      //required:true
    },
  })
);

module.exports = postModel;
