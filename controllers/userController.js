const bcryptjs = require("bcryptjs");
const authHandler = require("../middlewares/authHandler");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    try {
        const isAlreadyRegistered = await User.findOne({ email });
        if (isAlreadyRegistered) {
            return res.status(409).json({ error: "User already registered" });
        }
        const user = await User.create({ name, email, password: hashedPassword });
        const token = authHandler.generateAccessToken(user);
        const { password, ...others } = user._doc;
        res.status(201).json({ token, user: others });
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = authHandler.generateAccessToken(user);
        const { password: _password, ...others } = user._doc;
        res.status(200).json({ token, user: others });
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};