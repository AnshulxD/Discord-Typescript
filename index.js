// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials, Collection } = require('discord.js');

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Messages, GuildMember, ThreadMember, Channel} = Partials;

const {loadEvents} = require('./Handlers/eventHandler');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// Log in to Discord with your client's token
client.config = require('./config.json');
client.login(client.config.token).then(() => {
	loadEvents(client);
});