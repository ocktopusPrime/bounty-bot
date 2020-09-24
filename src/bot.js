'use strict';
require('dotenv').config();

const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { reactAdd, reactRemove } = require('./events/reactions/reactions.js');
const { prefix } = require('./config.json');

const client = new Client({
	partials: ['MESSAGE', 'REACTION'],
});

//retrieve commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in.`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/\s+/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any argments, ${message.author}`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute the command.');
	}
});

client.on('messageReactionAdd', (reaction, user) => {
	reactAdd(reaction, user);
});

client.on('messageReactionRemove', (reaction, user) => {
	reactRemove(reaction, user);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
