const express = require("express");
const Router = express.Router();
const postController = require("../controllers/postController");

Router.get("/post", postController.getAllPosts);
Router.get("/post/:id", postController.getPostByID);
Router.post("/post", postController.createPost);
Router.put("/post/:id", postController.updatePost);
Router.delete("/post/:id", postController.deletePost);

module.exports = Router;
