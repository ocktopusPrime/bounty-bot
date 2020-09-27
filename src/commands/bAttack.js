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
		const member = getMember(message.guild.members.cache, message.author.id);
		const role = getRole(member.guild.roles.cache, hunterRole).name;

		const defenderId = args[0].substring(2, args[0].length - 1);
		const defender = getMember(message.guild.members.cache, defenderId);

		if (role === hunterRole) {
			// check to see if they are online first for attacking, so that hey can respond with using equipment
			message.reply(`you are attacking ${defender}`);
		}
	},
};
