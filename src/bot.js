'use strict';
require('dotenv').config();

const { Client } = require('discord.js');
const { reactAdd, reactRemove } = require('./events/reactions/reactions.js');
const { commands } = require('./functions/commands.js');
const { messageEvent: messages } = require('./functions/messageEvent.js');
const { verifyServerRoles } = require('./functions/verifyServerRoles.js');
const { dbConnect } = require('./database/database.js');
// const { bountySystem } = require('./bounty-game/bountySystem.js');

const client = new Client({
	partials: ['MESSAGE', 'REACTION'],
});

//retrieve commands
commands(client);

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in.`);
	dbConnect();
	client.guilds.cache.each((guild) => verifyServerRoles(guild));
});

client.on('message', (message) => {
	messages(client, message);
});

client.on('messageReactionAdd', (reaction, user) => {
	reactAdd(reaction, user);
});

client.on('messageReactionRemove', (reaction, user) => {
	reactRemove(reaction, user);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
