const {StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
    .setName('pokemoncheck')
		.setDescription('Lets you pick a Pokemon.'),


async execute(interaction) {
    //each select menu needs its own action row btw
    const select = new StringSelectMenuBuilder()
    .setCustomId('starter')
    .setPlaceholder('Make a selection!')
    .addOptions(
        //each option here must at least have a label and a value, but can also have descriptions, defaults (using setDefault(true)), and emoji using .setEmoji('12308957349857349587')
        new StringSelectMenuOptionBuilder()
            .setLabel('Machop')
            .setDescription('A fighting pokemon who gets buff and swole with each successive evolution.')
            .setValue('Machop'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Gloom')
            .setDescription('A beautifully-ugly pokemon who gets stinky and chonk with each successive evolution.')
            .setValue('Gloom'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Combee')
            .setDescription('A buzzy bee pokemon who gets regal and spicy with each successive evolution.')
            .setValue('Combee'),
    );

    const row = new ActionRowBuilder()
    .addComponents(select);

    const response = await interaction.reply({
        content: 'Choose your starter!',
        components: [row],
    });        
    }
}
