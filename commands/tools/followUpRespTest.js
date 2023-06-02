const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('followupresptest')
		.setDescription('Does a test of an followup response.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
            await interaction.reply({content: `Old McDonald had a farm....`, ephemeral: true});
            await interaction.followUp({content: `......and Bingo was its name-o.`, ephemeral: true});
    
	},
};
