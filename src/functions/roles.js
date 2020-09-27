const { getMember } = require('../functions/getMember.js');
exports.roleAdd = (message, role) => {
	const member = getMember(message.guild.members.cache, message.author.id);

	if (!member.roles.cache.has(role.id)) {
		member.roles.add(role.id);
	}
};

exports.roleRemove = (message, role) => {
	const member = getMember(message.guild.members.cache, message.author.id);

	if (member.roles.cache.has(role.id)) {
		member.roles.remove(role.id);
	}
};
