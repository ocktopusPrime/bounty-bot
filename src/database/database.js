const mongoose = require('mongoose');
const Bounty = require('./models/Bounty');

exports.dbConnect = () => {
	mongoose.connect('mongodb://localhost/bhGame', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	});

	const db = mongoose.connection;
	db.on('error', () => console.log('Error while connecting to db'));
	db.once('open', () => console.log('Connected to the db.'));
};

exports.save = () => {
	// data = { name: 'John', cost: '1BW', power: 6, reward: 6 };
	const data = new Bounty({ name: 'John', cost: '1BW', power: 6, reward: 6 });

	data.save(function (err, doc) {
		if (err) return console.error(err);
		console.log('Document inserted succussfully!');
	});
};
