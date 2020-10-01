const mongoose = require('mongoose');

const HunterSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	userId: { type: String, required: true },
	resources: { type: String, required: true },
	points: { type: Number, required: true },
	power: { type: Number, required: true },
	actionUsed: { type: Boolean, require: true },
});

const HunterModel = (module.exports = mongoose.model('hunter', HunterSchema));
