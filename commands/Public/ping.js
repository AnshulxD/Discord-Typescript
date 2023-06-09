const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // only allow admin to run the command
	execute(interaction) {
		interaction.reply({content: 'Pong!', ephermal: true});
	},
};