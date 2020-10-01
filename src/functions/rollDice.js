exports.rollDice = (dice, max) => {
	let totalDice = [];
	if (dice > 20) {
		return 'too many dice (more than 20)';
	} else {
		for (let i = 1; i <= dice; i++) {
			const roll = Math.floor(Math.random() * (max - 1 + 1)) + 1;
			totalDice.push(roll);
		}
		return totalDice;
	}
};
