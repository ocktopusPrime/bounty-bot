const Discord = require('discord.js');
const prefix = require('../config.json');

// replace args with an object of the wanted person
exports.embed = (args) => {
	const data = args.slice(prefix.length).trim().split(/\s+/);
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(data[0])
		.setDescription(data[1] ? data[1] : 'example')
		.setThumbnail('https://cdn.aspentimes.com/wp-content/uploads/sites/5/2016/08/AT_AT201110110719959AR.jpg')
		.setFooter('*flavor text*');

	return exampleEmbed;
};
