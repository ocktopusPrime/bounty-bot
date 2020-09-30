const { getRole } = require('../functions/getRole.js');
const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');

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
		const playRole = getRole(message.guild.roles.cache, hunterRole).id;

		if (attacker === defender) return message.reply('You cannot attack yourself!');

		if (!attacker.roles.cache.has(playRole)) {
			return message.reply(
				`you have not joined the Bounty Hunter organization to play. Type '/play bh' to join the organization.`
			);
		}

		if (defender) {
			if (!defender.roles.cache.has(playRole)) {
				return message.reply(
					`${defender} is not in the Bounty Hunter organization in this server. Tell them to type '/play bh' to join.`
				);
			}
		} else {
			return message.reply(`cannot find ${defender}`);
		}

		// add infamy to the attacker so that they can be wanted
		return message.reply(`you are attacking ${defender}`);
	},
};
