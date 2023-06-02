const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

//commands need to be placed in module.exports so that it can be exported from here and used in other files, like the command loader and handler
module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription("Return a button!"),

    async execute(interaction, client)
    {
        const button = new ButtonBuilder()
            .setCustomId('sub-yt')
            .setLabel(`Click me for help!`)
            .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
};