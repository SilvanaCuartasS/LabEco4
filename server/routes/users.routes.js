const express = require('express');
const { getUser, createUser, loginUser, getPostUser, createPost } = require('../controllers/users.controller');
const router = express.Router();


router.get("/users", getUser);

router.post("/registro", createUser);

router.post("/user-login", loginUser);

router.get("/post", getPostUser);

router.post("/create-post", createPost);

module.exports = router;