const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'embed message',
	args: true,
	usage: '/embed title',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(args[0])
			.setDescription(args[1] ? args[1] : 'example')
			.setThumbnail('https://cdn.aspentimes.com/wp-content/uploads/sites/5/2016/08/AT_AT201110110719959AR.jpg')
			.setFooter('*flavor text*');

		message.channel.send(exampleEmbed);
	},
};
