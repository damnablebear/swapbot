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
            await interaction.reply(`The user who ran this command was ${interaction.user.username}. Hello Dusty. I look forward to tracking packages for you.`);
        }
        else if (interaction.user.username == "damnablebear")
        {
            await interaction.reply(`Hello Ryan. Why are you making me do all this work for free?`);
        }
        else{
            await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        }
	},
};
