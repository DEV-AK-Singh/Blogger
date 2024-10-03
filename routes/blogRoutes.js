const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const authHandler = require("../middlewares/authHandler");

router.post("/create", authHandler.authenticateToken, blogController.createBlog);
router.get("/all", authHandler.authenticateToken, blogController.getAllBlogs);
router.get("/:id", authHandler.authenticateToken, blogController.getBlog);
router.put("/:id", authHandler.authenticateToken, blogController.updateBlog);
router.delete("/:id", authHandler.authenticateToken, blogController.deleteBlog);

module.exports = router;