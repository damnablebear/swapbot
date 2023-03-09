const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtrade')
        .setDescription('Allows you to start a new trade with a user.'),
    async execute(interaction)
    {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        //const fromUser = interaction.user.username;
       //const toUser = interaction.user.username;
       //this is a new comment

        await interaction.reply(`Starting trade... thank you ${interaction.user.username}`);

    },
};
