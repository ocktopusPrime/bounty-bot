const { getRole } = require('../functions/getRole.js');
const { roleRemove } = require('../functions/roles.js');
// const { getMember } = require('../functions/getMember');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'quit',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['bounty', 'bhunter', 'bh'],
	usage: '[/quit bhunter]',
	execute(message, args) {
		const role = getRole(message.guild.roles.cache, hunterRole);
		// const member = getMember(message.guild.members.cache, message.author.id);

		// if (!member.roles.cache.has(role.id)) return message.reply('You are not in the Bounty Hunter organization.');

		if (this.aliases.includes(args[0])) {
			roleRemove(message, role);
			return message.reply('You have left the Bounty Hunter organization.');
		}
	},
};
