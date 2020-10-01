const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');
const { canPlay } = require('../functions/canPlay.js');
const { rollDice } = require('../functions/rollDice');

module.exports = {
	name: 'attack',
	description: 'Attack another hunter',
	aliases: ['clap', 'slap'],
	args: true,
	usage: '/attack @user',
	execute(message, args) {
		const attacker = getMember(message.guild.members.cache, message.author.id);
		const defenderId = args[0].substring(2, args[0].length - 1);
		const defender = getMember(message.guild.members.cache, defenderId);

		if (attacker === defender) return message.reply('You cannot attack yourself!');

		if (!canPlay(attacker.roles.cache, hunterRole)) {
			return message.reply(
				`you have not joined the Bounty Hunter organization to play. Type '/play bh' to join the organization.`
			);
		}

		if (defender) {
			if (!canPlay(defender.roles.cache, hunterRole)) {
				return message.reply(
					`${defender} is not in the Bounty Hunter organization in this server. Tell them to type '/play bh' to join.`
				);
			}
		} else {
			return message.reply(`cannot find ${defender}`);
		}

		// add infamy to the attacker so that they can be wanted
		attack(message, attacker, defender);
	},
};

const attack = async (message, attacker, defender) => {
	let attck = await Math.max(...rollDice(2, 6));
	let dfnd = await Math.max(...rollDice(1, 6));

	if (attck > dfnd) {
		return message.reply(`(${attck}) \`\`\`ARM\ninjured\`\`\` ${defender} (${dfnd}) and took *1* resource`);
	} else if (attck < dfnd) {
		return message.channel.send(
			`${defender} (${dfnd}) \`\`\`ARM\ninjured\`\`\` ${attacker} (${attck}) and took *1* resource `
		);
	} else if (attck === dfnd) {
		message.reply(`PARRY`);
		attack(message, attacker, defender);
	}
};
