const Blog = require("../models/Blog");

const getAuthPage = (req, res) => {
  res.render("auth");
};

const getHomePage = (req, res) => {
  res.render("index");
};

const getAboutPage = (req, res) => {
  res.render("about");
};

const getContactPage = (req, res) => {
  res.render("contact");
};

const getBlogFormPage = (req, res) => {
  res.render("blogForm", { blog: null });
};

const getAllBlogsPage = async (req, res) => {
  const blogs = await Blog.find()
    .populate("author", "name")
    .sort({ createdAt: -1 });
  res.render("blogs", { blogs });
};

const getBlogPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "name");
  res.render("blog", { blog });
};

const getBlogUpdateFormPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "name");
  res.render("blogForm", { blog });
};

module.exports = {
  getAuthPage,
  getHomePage,
  getAboutPage,
  getContactPage,
  getBlogFormPage,
  getAllBlogsPage,
  getBlogPage,
  getBlogUpdateFormPage,
};
