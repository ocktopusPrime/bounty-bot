const { getRole } = require('../functions/getRole.js');
const { roleRemove } = require('../functions/roles.js');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'quit',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['bounty', 'bhunter', 'bh'],
	usage: '[/quit bhunter]',
	execute(message, args) {
		const role = getRole(message.guild.roles.cache, hunterRole);
		if (this.aliases.includes(args[0])) roleRemove(message, role);
		message.reply('You are no longer in the bounty hunter organization.');
	},
};
