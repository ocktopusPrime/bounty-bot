module.exports = {
	name: 'roll',
	description: 'roll dice',
	args: true,
	usage: '/roll 1d6',
	execute(message, args) {
		const dieRoll = args[0].split('d')[0];
		const dice = args[0].split('d')[1];
		roll(message, dieRoll, dice);
	},
};

function roll(message, dice, max) {
	let totalDice = '';
	if (dice > 20) {
		message.reply('too many dice (more than 20)');
	} else {
		for (let i = 1; i <= dice; i++) {
			totalDice += `(${Math.floor(Math.random() * (max - 1 + 1)) + 1})  `;
		}
	}
	message.reply(totalDice);
}
