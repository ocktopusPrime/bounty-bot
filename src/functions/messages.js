const { prefix } = require('../config.json');

exports.messages = (client, message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/\s+/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.args && !args.length) {
		let reply = `You did not provide any arguments, ${message.author}`;

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
};
