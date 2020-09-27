const { getRole } = require('../functions/getRole.js');
const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'attack',
	description: 'Attack another hunter',
	args: true,
	aliases: ['clap', 'slap'],
	usage: '/attack @user',
	execute(message, args) {
		const attacker = getMember(message.guild.members.cache, message.author.id);
		const defenderId = args[0].substring(2, args[0].length - 1);
		const defender = getMember(message.guild.members.cache, defenderId);
		let attackerRole;
		let defenderRole;
		let replyMessage;

		if (attacker) {
			attackerRole = getRole(attacker.guild.roles.cache, hunterRole).name;
			if (attackerRole !== hunterRole) {
				replyMessage = `you have not joined the organization to play Bounty Hunter. Type '/play bh' to join the organization.`;
				return message.reply(replyMessage);
			}
		} else {
			replyMessage = `cannot find ${attacker}`;
			return message.reply(replyMessage);
		}

		if (defender) {
			defenderRole = getRole(defender.guild.roles.cache, hunterRole).name;
			if (defenderRole !== hunterRole) {
				replyMessage = `${defender} is not playing Bounty Hunter in this server. Tell them to '/play bh' to join the organization.`;
				return message.reply(replyMessage);
			}
		} else {
			replyMessage = `cannot find ${defender}`;
			return message.reply(replyMessage);
		}

		replyMessage = `you are attacking ${defender}`;

		return message.reply(replyMessage);
	},
};
