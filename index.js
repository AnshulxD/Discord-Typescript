// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials, Collection } = require('discord.js');

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Messages, GuildMember, ThreadMember, Channel} = Partials;

const {loadEvents} = require('./Handlers/eventHandler');
const {loadCommands} = require('./Handlers/commandHandler');

// Create a new client instance
//const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const client = new Client({ intents: [Guilds, GuildMembers, GuildMessages],
							partials: [User, Messages, GuildMember, ThreadMember] 
						});


// Log in to Discord with your client's token
client.commands = new Collection();
client.config = require('./config.json');
client.login(client.config.token).then(() => {
	loadEvents(client);
	loadCommands(client);
});