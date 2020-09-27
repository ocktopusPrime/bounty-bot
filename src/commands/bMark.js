const { getMember } = require('../functions/getMember');
const { getRole } = require('../functions/getRole.js');
const { wantedRole } = require('../config.json');

module.exports = {
	name: 'mark',
	description: 'Place a bounty on another member in the server.',
	args: true,
	usage: '/mark @user',
	execute(message, args) {
		const wantedUser = getMember(message.guild.members.cache, args[0].substring(2, args[0].length - 1));
		const wanted = getRole(message.guild.roles.cache, wantedRole).id;

		if (wantedUser) {
			if (!wantedUser.roles.cache.has(wanted.id)) {
				wantedUser.roles
					.add([wanted])
					.then(message.channel.send(`${wantedUser} now has a bounty on their head.`));
			} else {
				message.channel.send(`${wantedUser} already has a bounty on their head.`);
			}
		}
	},
};
