const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HunterSchema = new Schema(
	{
		username: { type: String, required: true },
		userID: { type: String, required: true },
		injured: { type: Boolean, default: false },
		action: { type: Boolean, default: false },
		infamy: { type: Number, default: 0 },
		avatar: { type: String },
		leads: { type: [String], default: [] },
		equipment: { type: [String], default: [] },
		xp: { type: Number, default: 0 },
	},
	{
		versionKey: false,
	}
);

module.exports = mongoose.model('Hunter', HunterSchema, 'hunter');
