const mongoose = require('mongoose');

exports.dbConnect = () => {
	mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => console.log('Connected to the db.'));
};
