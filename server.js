const express = require("express");
const app = express();
const mongoose = require("mongoose");

//database connection
require("./config");

//Models
require("./models/post.js");

const Post = mongoose.model("Post");

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    res.status(500);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
