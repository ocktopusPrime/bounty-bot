const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BountySchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		cost: { type: String, required: true },
		avatar: { type: String, required: false },
		power: { type: Number, required: true },
		reward: { type: Number, required: true },
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model('Bounty', BountySchema, 'bounty');
