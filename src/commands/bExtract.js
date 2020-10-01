const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');
const { canPlay } = require('../functions/canPlay.js');

module.exports = {
	name: 'extract',
	description: 'Extract leads',
	aliases: ['leads', 'extract leads'],
	usage: '/extract',
	execute(message) {
		const member = getMember(message.guild.members.cache, message.author.id).roles.cache;

		if (canPlay(member, hunterRole)) {
			message.reply('you got some leads');
		}
	},
};
