module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: `displays the user's avatar`,
	execute(message, args) {
		const member = message.guild.members.cache.get(args[0].substring(2, args[0].length - 1));
		message.channel.send(member.user.displayAvatarURL());
	},
};
