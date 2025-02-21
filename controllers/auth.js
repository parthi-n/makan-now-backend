const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userServices = require("../services/userServices");
const saltRounds = 12;

const signUp = async (req, res) => {
	try {
		const userInDatabase = await User.findOne({ username: req.body.username });

		if (userInDatabase) {
			return res.status(409).json({ err: "Username already taken." });
		}

		const user = await userServices.createUser(req.body);

		console.log(user);
		const payload = { username: user.username, _id: user._id };

		const token = jwt.sign({ payload }, process.env.JWT_SECRET);

		res.status(201).json({ token });
	} catch (err) {
		res.status(500).json({ err: err.message });
	}
};

const signIn = async (req, res) => {
	console.log("Request body:", req.body); // Log the request body
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(401).json({ err: "Invalid credentials." });
		}

		// Check if the password or the hashed password is not undefined
		if (!req.body.password || !user.password) {
			return res.status(400).json({ err: "Missing password or hashed password." });
		}

		const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
		if (!isPasswordCorrect) {
			return res.status(401).json({ err: "Invalid credentials." });
		}

		const payload = { username: user.username, _id: user._id };
		const token = jwt.sign({ payload }, process.env.JWT_SECRET);

		res.status(200).json({ token });
	} catch (err) {
		res.status(500).json({ err: err.message });
	}
};


module.exports = { signUp, signIn };
