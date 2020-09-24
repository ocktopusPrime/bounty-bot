exports.rollDice = (message, dice, max) => {
	let totalDice = '';
	if (dice > 20) {
		message.reply('too many dice (more than 20)');
	} else {
		for (let i = 1; i <= dice; i++) {
			totalDice += `(${Math.floor(Math.random() * (max - 1 + 1)) + 1})  `;
		}
	}
	message.reply(totalDice);
};
