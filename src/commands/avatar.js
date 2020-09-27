const { getMember } = require('../functions/getMember');

module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: `displays the user's avatar`,
	execute(message, args) {
		const member = getMember(message.guild.members.cache, args[0].substring(2, args[0].length - 1));
		message.channel.send(member.user.displayAvatarURL());
	},
};
