const express = require("express");
const Router = express.Router();
const secureMiddleware = require("../middleware/authMiddleware");
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");

// POST
Router.get("/post", postController.getAllPosts);
Router.get("/post/:id", postController.getPostByID);
Router.post("/post", secureMiddleware, postController.createPost);
Router.put("/post/:id", secureMiddleware, postController.updatePost);
Router.delete("/post/:id", secureMiddleware, postController.deletePost);

// USER
Router.post("/user", userController.signUp);
Router.post("/login", userController.login);

module.exports = Router;
