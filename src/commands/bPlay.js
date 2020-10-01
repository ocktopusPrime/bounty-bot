const { getRole } = require('../functions/getRole.js');
const { getMember } = require('../functions/getMember');
const { roleAdd } = require('../functions/roles.js');
const { hunterRole } = require('../config.json');
const { canPlay } = require('../functions/canPlay.js');

module.exports = {
	name: 'play',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['bounty', 'bhunter', 'bh'],
	args: true,
	usage: '[/play bhunter]',
	execute(message, args) {
		const role = getRole(message.guild.roles.cache, hunterRole);
		const member = getMember(message.guild.members.cache, message.author.id).roles.cache;

		if (canPlay(member, hunterRole)) return message.reply('You are already in the Bounty Hunter organization.');

		if (this.aliases.includes(args[0])) {
			roleAdd(message, role);
			// upon joining, just fire off the help command to DM them.
			return message.reply(
				`Welcome to the Bounty Hunter organization! Type /kit to be DM'd all of the available commands.`
			);
		}
	},
};
