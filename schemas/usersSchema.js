import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let UserSchema = new Schema({
	email    : { type: String, unique: true },
	password : { type: String },
	name     : { type: String },
	lastname : { type: String },
	points   : { type: Number }
});

module.exports = mongoose.model('UserSchema', UserSchema);
