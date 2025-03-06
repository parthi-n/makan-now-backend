const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userServices = require("../services/userServices");



const signUp = async (req, res) => {
  try {
    // Check if username already exists
    const userInDatabase = await User.findOne({ username: req.body.username });

    if (userInDatabase) {
      return res.status(409).json({ error: "Username already taken." });
    }

    // Create the user
    const user = await userServices.createUser(req.body);

    // Create JWT token payload
    const payload = { username: user.username, _id: user._id };

    // Sign the JWT token
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    // Send response with token
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message }); // Use "error" instead of "err"
  }
};

const signIn = async (req, res) => {
  console.log("Request body:", req.body); // Log the request body for debugging
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Check if the password exists and compare it
    if (!req.body.password || !user.password) {
      return res.status(400).json({ error: "Missing password or hashed password." });
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const payload = { username: user.username, _id: user._id };
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message }); // Use "error" instead of "err"
  }
};

module.exports = { signUp, signIn };
