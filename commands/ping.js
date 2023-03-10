const { SlashCommandBuilder } = require("discord.js");

//commands need to be placed in module.exports so that it can be exported from here and used in other files, like the command loader and handler
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Replies with Pong!"),

    async execute(interaction)
    {
        await interaction.reply({content: "Pong!", ephemeral: true});
    }
};