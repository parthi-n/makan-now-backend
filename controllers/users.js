const User = require("../models/user");

const index = async (req, res) => {
	try {
		const users = await User.find({}, "username");

		res.json(users);
	} catch (err) {
		res.status(500).json({ err: err.message });
	}
};

const get = async (req, res) => {
	try {
		if (req.user._id !== req.params.userId) {
			return res.status(403).json({ err: "Unauthorized" });
		}

		const user = await User.findById(req.params.userId);

		if (!user) {
			return res.status(404).json({ err: "User not found." });
		}

		res.json({ user });
	} catch (err) {
		res.status(500).json({ err: err.message });
	}
};

const addFoodOrders = async (req, res) => {
	try {
		if (req.user._id !== req.params.userId) {
			return res.status(403).json({ err: "Unauthorized" });
		}
		const user = await User.findById(req.params.userId);
		if (!user) {
			return res.status(404).json({ err: "User not found." });
		}

		user.orders.push(...req.body);
		await user.save();

		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ err: err.message });
	}
};

module.exports = { index, get, addFoodOrders };
