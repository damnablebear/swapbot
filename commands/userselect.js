const {StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
    .setName('userselect')
		.setDescription('Lets you select multiple users.'),


        async execute(interaction) {
            const userSelect = new UserSelectMenuBuilder()
                .setCustomId('users')
                .setPlaceholder('Select multiple users.')
                .setMinValues(1)
                .setMaxValues(10);
    
            const row1 = new ActionRowBuilder()
                .addComponents(userSelect);
    
            await interaction.reply({
                content: 'Select users:',
                components: [row1],
            });
        },
    };