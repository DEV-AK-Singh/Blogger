const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authHandler = require("../middlewares/authHandler");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/all", authHandler.authenticateToken, userController.getAllUsers);
router.get("/:id", authHandler.authenticateToken, userController.getUser);
router.put("/:id", authHandler.authenticateToken, userController.updateUser);
router.delete("/:id", authHandler.authenticateToken, userController.deleteUser);

module.exports = router;