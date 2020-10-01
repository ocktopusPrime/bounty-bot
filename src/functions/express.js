const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
exports.express = () => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors());

	// Specify the Port where the backend server can be accessed and start listening on that port
	const port = process.env.PORT || 5000;
	app.listen(port, () => console.log(`Server up and running on port ${port}.`));
};
