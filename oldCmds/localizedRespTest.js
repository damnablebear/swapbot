const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('localizedresptest')
		.setDescription('Does a test of a localized response.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
            const locales = {
                
                en: "Heya",
                es: "Hola",
                fr: "Bonjour",
            };
            await interaction.reply(locales[interaction.locale]);

        
	},
};
