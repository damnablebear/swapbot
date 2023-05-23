const { SlashCommandBuilder } = require('discord.js');

//TO DO: FIND ALL TRADES WHERE CURRENT USER IS INVOLVED, BREAK ENTRIES INTO NEW LINES, SHOWING TRADE ID, PARTNER, ITEMS SENT AND ITEMS RECEIVED

module.exports = {
    data: new SlashCommandBuilder()
        .setName('activetradelist')
        .setDescription('Displays all active trades that you have.'),

    //values can be retrieved asynchronously
    async execute(interaction)
    {
        const initiatorUserName = interaction.user.username;
        await interaction.reply({ content: `The active trades for ${initiatorUserName} are listed below: \n`, ephemeral: true });

    }

};

