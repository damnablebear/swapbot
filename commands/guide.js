const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guide')
		.setDescription('Search discordjs.guide!')
		.addStringOption(option =>
			option.setName('query')
				.setDescription('Phrase to search for')
				.setAutocomplete(true)),
	async autocomplete(interaction) {
		// handle the autocompletion response (more on how to do that below)
	},
	async execute(interaction) {
		// respond to the complete slash command
	},
};