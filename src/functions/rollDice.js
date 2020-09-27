exports.rollDice = (message, dice, max) => {
	let totalDice = '';
	let total = 0;
	if (dice > 20) {
		message.reply('too many dice (more than 20)');
	} else {
		for (let i = 1; i <= dice; i++) {
			const roll = Math.floor(Math.random() * (max - 1 + 1)) + 1;
			totalDice += `(${roll}) `;
			total += roll;
		}
		message.reply(`${totalDice} = ${total}`);
	}
};
