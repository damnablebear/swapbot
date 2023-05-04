//modal notes
//allows you to create popup forms that allow users to provide you with formatted inputs
//you can have a max of five ActionRowBuilders per modal
//you can have a max of one textinputbuilder per actionrowbuilder
//currently stringselectmenubuilder and buttonbuilder cannot be used in modal action row builders

const {ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

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
});