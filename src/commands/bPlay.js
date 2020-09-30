const { getRole } = require('../functions/getRole.js');
const { getMember } = require('../functions/getMember');
const { roleAdd } = require('../functions/roles.js');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'play',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['bounty', 'bhunter', 'bh'],
	usage: '[/play bhunter]',
	execute(message, args) {
		const role = getRole(message.guild.roles.cache, hunterRole);
		const member = getMember(message.guild.members.cache, message.author.id);

		if (member.roles.cache.has(role.id)) return message.reply('You are already in the Bounty Hunter organization.');

		if (this.aliases.includes(args[0])) {
			roleAdd(message, role);
			return message.reply('Congratulations on joining the order of bounty hunters!');
		}
	},
};
