const { SlashCommandBuilder } = require("discord.js");

//commands need to be placed in module.exports so that it can be exported from here and used in other files, like the command loader and handler
module.exports = {
    name: 'ping',
    description: 'pong',


    callback: (client, interaction) =>
    {
        interaction.reply({ content: "Pong!", ephemeral: true });
    }
};