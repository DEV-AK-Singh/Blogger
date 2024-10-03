const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

function generateAccessToken(user) {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  const secret = process.env.JWT_SECRET_KEY;
  const options = { expiresIn: "3h" };
  return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token) {
  const secret = process.env.JWT_SECRET_KEY;
  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  const result = verifyAccessToken(token);
  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }
  req.user = result.data;
  next();
}

module.exports = {
  generateAccessToken,
  authenticateToken,
};