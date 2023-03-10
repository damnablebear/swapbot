const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deferredresptest')
		.setDescription('Does a test of a deferred response.'),
	async execute(interaction) {

        
            await interaction.deferReply({ephemeral: true});
            await wait(5000);
            await interaction.editReply({content: `We needed to defer a response so here's your response, finally.`, ephemeral: true});

        
	},
};
