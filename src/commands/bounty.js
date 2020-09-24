module.exports = {
	name: 'bounty',
	description: 'lists bounty hunter game commands',
	aliases: ['bhunter'],
	usage: '/bounty',
	cooldown: 0,
	execute(message) {
		console.log(message.content);
	},
};
