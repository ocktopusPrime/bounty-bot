const { getMember } = require('../functions/getMember');

module.getAvatar = (message, user) => {
	const member = getMember(message.guild.members.cache, user);
	message.channel.send(member.user.displayAvatarURL());
};
