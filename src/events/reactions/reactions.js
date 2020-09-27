const { getMember } = require('../../functions/getMember.js');
exports.reactAdd = (reaction, user) => {
	const { name } = reaction.emoji;
	const member = getMember(reaction.message.guild.members.cache, user.id);

	if (reaction.message.id === '752265470396072037') {
		switch (name) {
			case '🩳':
				member.roles.add('752265099586175089');
				break;
			case '💎':
				member.roles.add('752265159669579909');
				break;
		}
	}
};

exports.reactRemove = (reaction, user) => {
	const { name } = reaction.emoji;
	const member = getMember(reaction.message.guild.members.cache, user.id);

	if (reaction.message.id === '752265470396072037') {
		switch (name) {
			case '🩳':
				member.roles.remove('752265099586175089');
				break;
			case '💎':
				member.roles.remove('752265159669579909');
				break;
		}
	}
};
