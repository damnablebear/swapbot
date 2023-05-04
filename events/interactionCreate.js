const {ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');


module.exports = {
    name: 'interactionCreate',
    async execute(interaction)
    {
        if (interaction.isChatInputCommand() || interaction.isAutocomplete()) 
        {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command)
            {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
            try
            {
                await command.autocomplete(interaction);
            } catch (error)
            {
                console.error(error);
            }
        }
        else if (interaction.isButton())
        {
//respond to button
        }
        else if (interaction.isStringSelectMenu())
        {
//respond to string select menu
        }
        else
        {
            return
        }

        if (interaction.commandName === 'ping') {
            const modal = new ModalBuilder()
            //this custom id is one that we can use to define all incoming interactions
            .setCustomId('myModal')
            .setTitle('My Modal');
        }
    
        //to do - add components to modal with
    
        // Create the text input components
            const favoriteColorInput = new TextInputBuilder()
            .setCustomId('favoriteColorInput')
            // The label is the prompt the user sees for this input
            .setLabel("What's your favorite color?")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);
    
        const hobbiesInput = new TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            // Paragraph means multiple lines of text.
            .setStyle(TextInputStyle.Paragraph);
    
        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
        const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
    
        // Add inputs to the modal
        modal.addComponents(firstActionRow, secondActionRow);
    
        // Show the modal to the user
        await interaction.showModal(modal);
    },
};