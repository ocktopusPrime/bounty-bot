const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HunterSchema = new Schema(
	{
		username: { type: String, required: true, trim: true },
		userID: { type: String, required: true, trim: true },
		xp: { type: Number, default: 0 },
		leads: { type: [String] },
		avatar: { type: String },
		equipment: { type: [String] },
		injured: { type: Boolean, required: true, default: false },
		action: { type: Boolean, required: true, default: false },
		infamy: { type: Number, required: true, default: 0 },
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model('Hunter', HunterSchema, 'hunter');
