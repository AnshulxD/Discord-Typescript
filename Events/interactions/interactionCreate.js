const {CommandInteraction} = require('discord.js');

module.exports = {
    name: `interactionCreate`,
    
    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            return interaction.reply({content: `There was an error executing that command`, ephemeral: true});
        }

        command.execute(interaction, client);
    },
};
