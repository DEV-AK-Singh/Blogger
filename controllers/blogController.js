const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};      

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  
