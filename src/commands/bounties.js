module.exports = {
	name: 'bounties',
	description: 'Display all of the bounties in your current server',
	aliases: ['bountyboard', 'bounty-board', 'bountyb'],
	usage: '[/bounties]',
	execute(message) {
		const markedBounty = message.guild.roles.cache.find(role => role.name === 'Marked For Bounty');
		message.guild.members.cache.find(member => {
			// send an embedded card of the user with their progress, name, avatarurl, and some other stats
			if (member.roles.cache.has(markedBounty.id)) return message.channel.send(member.user.username);
		});
		message.channel.send('No Bounties are currently on the board.');
	},
};
