module.exports = {
	name: 'mark',
	description: 'Place a bounty on another member in the server.',
	args: true,
	usage: '/mark @user',
	execute(message, args) {
		// check that they have the role to participate
		const member = message.guild.members.cache.get(args[0].substring(2, args[0].length - 1));

		if (member) {
			if (!member.roles.cache.has('757602109746053271')) {
				member.roles
					.add(['757602109746053271'])
					.then(message.channel.send(`${member} now has a bounty on their head.`));
			} else {
				message.channel.send(`${member} already has a bounty on their head.`);
			}
		}
	},
};
