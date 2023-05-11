const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fetchresptest')
		.setDescription('Does a test of an fetched response.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
            await interaction.reply({content: `Hi, how are you???????`, ephemeral: true});
            const message = await interaction.fetchReply();
            console.log(message);

        
	},
};
