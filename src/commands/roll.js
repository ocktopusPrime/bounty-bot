const { rollDice } = require('../functions/rollDice.js');
module.exports = {
	name: 'roll',
	description: 'roll dice',
	args: true,
	usage: '/roll 1d6',
	execute(message, args) {
		const dieRoll = args[0].split('d')[0];
		const dice = args[0].split('d')[1];
		const results = rollDice(dieRoll, dice);
		message.reply(`${results}`);
	},
};
