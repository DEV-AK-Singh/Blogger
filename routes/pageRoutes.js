const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController")

router.get("/auth", pageController.getAuthPage);
router.get("/", pageController.getHomePage);
router.get("/about", pageController.getAboutPage);
router.get("/contact", pageController.getContactPage);
router.get("/blogs/create", pageController.getBlogFormPage);
router.get("/blogs/:id/edit", pageController.getBlogUpdateFormPage);
router.get("/blogs", pageController.getAllBlogsPage);
router.get("/blogs/:id", pageController.getBlogPage);

module.exports = router;