const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('editedresptest')
		.setDescription('Does a test of an edited response.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
            await interaction.reply({content: `This command is sending this message as a test. We're going to wait a few seconds and send a different one.`, ephemeral: true});
            await wait(5000);
            await interaction.editReply({content: `Our initial response was outdated so we thought we'd send an updated one.`, ephemeral: true});

        
	},
};
