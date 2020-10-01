const mongoose = require('mongoose');
const MarkSchema = new mongoose.Schema({
	name: { type: String, required: true },
	cost: { type: Number, required: true },
	points: { type: Number, required: true },
	power: { type: Number, required: true },
});

const MarkModel = (module.exports = mongoose.model('mark', MarkSchema));
