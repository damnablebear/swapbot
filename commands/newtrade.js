const {SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder} = require('discord.js');

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
       const userSelect = new UserSelectMenuBuilder()
       .setCustomId('newtrade')
       .setPlaceholder('Select a user to trade with.')
       .setMinValues(1)
       .setMaxValues(1);

   const row1 = new ActionRowBuilder()
       .addComponents(userSelect);

   await interaction.reply({
       content: "Select the user you'd like to trade with:",
       components: [row1],
   });

    },
};
