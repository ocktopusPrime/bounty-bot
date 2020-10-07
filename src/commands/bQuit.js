const { getRole } = require('../functions/getRole.js');
const { roleRemove } = require('../functions/roles.js');
const { hunterRole } = require('../config.json');

module.exports = {
	name: 'quit',
	description: 'Leave the Bounty Hunter game.',
	aliases: ['bounty', 'bhunter', 'bh'],
	usage: '[/quit bhunter]',
	execute(message, args) {
		const role = getRole(message.guild.roles.cache, hunterRole);

		if (this.aliases.includes(args[0])) {
			roleRemove(message, role);
			return message.reply('You have left the Bounty Hunter organization.');
		}
	},
};
