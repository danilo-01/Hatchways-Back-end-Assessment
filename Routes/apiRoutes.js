// All routes prefixed with  /api
const express = require("express");
const router = express.Router();

// Controller
const {getPing, getPosts} = require("../Controllers/apiController");

// Routes
/* 
/api/ping

Route for users to check if they can connect with the api
*/
router.get("/ping", getPing)

/* 
/api/posts?tags=(required)&sortBy=(optional)&direction=(optional)

Route for users to get posts by tags and sort 
through them (id, reads, likes, popularity) and choose which order (desc, asc)
*/
router.get("/posts", getPosts);

// Export Router
module.exports = router;