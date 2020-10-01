const { getMember } = require('../functions/getMember');
const { getRole } = require('../functions/getRole.js');
const { hunterRole, wantedRole } = require('../config.json');
const { canPlay } = require('../functions/canPlay');

module.exports = {
	name: 'capture',
	description: 'Capture a bounty placed on another character in the server.',
	args: true,
	usage: '/capture @user',
	execute(message, args) {
		const player = getMember(message.guild.members.cache, message.author.id);

		const mark = getMember(message.guild.members.cache, args[0].substring(2, args[0].length - 1));
		const wanted = getRole(message.guild.roles.cache, wantedRole).id;

		if (player === mark) return message.reply('You cannot capture yourself!');

		if (!canPlay(player.roles.cache, hunterRole)) {
			return message.reply(`You haven't joined the Bounty Hunter organization. Type /play bhunter to join up!`);
		}

		if (mark) {
			if (mark.roles.cache.has(wanted)) {
				mark.roles
					.remove([wanted])
					.then(
						message.channel.send(
							`The bounty on ${mark}'s head has been claimed by ${message.author} for XX points.`
						)
					);
			} else {
				message.channel.send(`${mark} does not have a bounty on their head.`);
			}
		}
	},
};
