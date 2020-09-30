const { getRole } = require('../functions/getRole.js');
const { wantedRole } = require('../config.json');

module.exports = {
	name: 'bounty-board',
	description: 'Display all of the bounties in your current server',
	aliases: ['bountyboard', 'bounties', 'bountyb', 'bb'],
	usage: '[/bounty-board]',
	execute(message) {
		const markedBounty = getRole(message.guild.roles.cache, wantedRole).id;
		let bounties = [];

		message.guild.members.cache.forEach((member) => {
			// send an embedded card of the user with their progress, name, avatarurl, and some other stats
			if (member.roles.cache.has(markedBounty)) bounties.push(`${member.user.username} worth 50 pts`);
		});

		if (bounties.length) return message.channel.send(bounties);
		return message.channel.send('No Bounties are currently on the board.');
	},
};
