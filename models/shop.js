const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	// description: {
	// 	type: String,
	// 	required: true,
	// },
});

const shopSchema = new mongoose.Schema({
	shopName: {
		type: String,
		required: true,
	},

	menu: [menuSchema],
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;