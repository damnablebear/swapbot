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
            .setValue('machop'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Gloom')
            .setDescription('A beautifully-ugly pokemon who gets stinky and chonk with each successive evolution.')
            .setValue('gloom'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Combee')
            .setDescription('A buzzy bee pokemon who gets regal and spicy with each successive evolution.')
            .setValue('combee'),
    );

    const row = new ActionRowBuilder()
    .addComponents(select);

    const response = await interaction.reply({
        content: 'Choose your starter!',
        components: [row],
    });
    
    const collector = response.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });
    
    collector.on('collect', async i => {
        const selection = i.values[0];
        await i.reply(`${i.user} has selected ${selection}!`);
    });
    
    }
}
