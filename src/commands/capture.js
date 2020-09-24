module.exports = {
	name: 'capture',
	description: 'Capture a bounty placed on another character in the server.',
	args: true,
	usage: '/capture @user',
	execute(message, args) {
		// check that they have the role to participate
		const member = message.guild.members.cache.get(args[0].substring(2, args[0].length - 1));

		if (member) {
			if (member.roles.cache.has('757602109746053271')) {
				member.roles
					.remove(['757602109746053271'])
					.then(
						message.channel.send(
							`The bounty on ${member}'s head has been claimed by ${message.author} for XX points.`
						)
					);
			} else {
				message.channel.send(`${member} does not have a bounty on their head.`);
			}
		}
	},
};
