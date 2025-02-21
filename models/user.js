const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	// name: {
	// 	type: String,
	// 	required: true,
	// },
	// email: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

module.exports = mongoose.model('User', userSchema);
