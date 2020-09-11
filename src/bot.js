require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client({
	partials: ['MESSAGE', 'REACTION'],
});
const PREFIX = '/';

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
	if (!message.author.bot) {
		if (message.content.startsWith(PREFIX)) {
			const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
			const member = message.guild.members.cache.get(args[0]);
		}

		if (message.content.includes('scotty') || message.content.includes('Scotty')) {
			if (message.content.includes('goodnight')) return message.channel.send(`┳━┳ ヽ(ಠل͜ಠ)ﾉ`);
			return message.channel.send(`(ノಠ益ಠ)ノ彡┻━┻`);
		}
		if (message.content.includes('@')) return message.channel.send('Who?');
		if (message.content.endsWith('?')) return message.channel.send('What?');
	}
});

client.on('messageReactionAdd', (reaction, user) => {
	const { name } = reaction.emoji;
	const member = reaction.message.guild.members.cache.get(user.id);

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
});

client.on('messageReactionRemove', (reaction, user) => {
	const { name } = reaction.emoji;
	const member = reaction.message.guild.members.cache.get(user.id);

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
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
