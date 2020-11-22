const mongoose = require('mongoose');
const Hunter = require('./models/Hunter');

const dbPath = 'mongodb://localhost/bhGame';
// process.env.NODE_ENV === 'production'
// 	? `mongodb+srv://@hunter1-grtwo.mongodb.net/bounty-hunter?retryWrites=true&w=majority`
// 	: 'mongodb://localhost/bhGame';

exports.dbConnect = () => {
	mongoose.connect(dbPath, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	});

	const db = mongoose.connection;
	db.on('error', () => console.log('Error while connecting to db'));
	db.once('open', () => console.log('Connected to the db.'));
};

exports.saveUser = async (data) => {
	try {
		await Hunter.findOne({ userID: { $eq: data.userID } }, (err, doc) => {
			if (doc) {
				console.log('This user already exists');
				return null;
			}
			console.log('saving');
			data.save();
		});
	} catch (error) {
		console.log(error);
		return null;
	}
};

exports.getUser = (data) => {
	try {
		return Hunter.findOne({ userID: { $eq: data.userID } });
	} catch (error) {
		console.log(error);
		return null;
	}
};
