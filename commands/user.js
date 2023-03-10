const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        if (interaction.user.username == "Dusty(BlueBidyaGame)")
        {
            await interaction.reply({content: `The user who ran this command was ${interaction.user.username}. Hello Dusty. I look forward to tracking packages for you.`, ephemeral: true});
        }
        else if (interaction.user.username == "damnablebear")
        {
            await interaction.reply({content: `Hello Ryan. Why are you making me do all this work for free?`, ephemeral: true});
        }
        else{
            await interaction.reply({content: `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`, ephemeral: true});
        }
	},
};
