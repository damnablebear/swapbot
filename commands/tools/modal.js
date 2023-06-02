const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

//commands need to be placed in module.exports so that it can be exported from here and used in other files, like the command loader and handler
module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription("Returns a modal!"),

    async execute(interaction, client)
    {
        const modal = new ModalBuilder()
        .setCustomId(`fav-color`)
        .setTitle(`Fav Color?`);

        const textInput = new TextInputBuilder()
        .setCustomId("favColorInput")
        .setLabel(`What is your favorite color?`)
        .setRequired(true)
        //Short is a short answer, and Paragraph allows more text
        .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    },
};