const Post = require("../models/postModel");

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      msg: post,
      results: post.length,
      code: 200,
    });
  } catch (error) {
    res.status(400).json({
      msg: "fail request",
      error,
    });
  }
};

exports.getPostByID = async (req, res) => {
  let id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json({
      msg: post,
      code: 200,
    });
  } catch (error) {
    res.status(400).json({
      msg: "id is required",
      error,
    });
  }
};

exports.createPost = async (req, res) => {
  let body = req.body;
  try {
    const post = await Post.create(body);
    res.status(200).json({
      msg: post,
      code: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "fail request",
      error,
    });
  }
};

exports.updatePost = async (req, res) => {
  let body = req.body;
  let id = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      msg: post,
      code: 200,
    });
  } catch (error) {
    res.status(400).json({
      msg: "fail request",
      error,
    });
  }
};

exports.deletePost = async (req, res) => {
  let id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json({
      msg: post,
      code: 200,
    });
  } catch (error) {
    res.status(400).json({
      msg: "id is required",
    });
  }
};
