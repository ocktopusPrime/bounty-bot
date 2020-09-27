const { getRole } = require('../functions/getRole.js');
const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'extract',
	description: 'Extract leads',
	aliases: ['leads', 'extract leads'],
	usage: '/extract',
	execute(message) {
		const member = getMember(message.guild.members.cache, message.author.id);
		const role = getRole(member.guild.roles.cache, hunterRole).name;

		if (role === hunterRole) {
			message.reply('you got some leads');
		}
	},
};
