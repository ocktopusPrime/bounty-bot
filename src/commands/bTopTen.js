const { hunterRole } = require('../config.json');
const { canPlay } = require('../functions/canPlay.js');

module.exports = {
	name: 'topten',
	description: 'display the top 10 bounty hunters on the server',
	usage: '/topten',
	execute(message) {
		let members = [];
		message.guild.members.cache.forEach((member) => {
			if (canPlay(member.roles.cache, hunterRole)) members.push(member);
		});

		// const membersCount = members.memberCount;
		// let loop = membersCount < 10 ? membersCount : 10;
		// let topTen = [];

		// for (let x = 0; x < loop; x++) {
		// topTen.push(members.cache.find((member) => member.user.note));
		// }

		return message.channel.send(`${members}`);
	},
};
