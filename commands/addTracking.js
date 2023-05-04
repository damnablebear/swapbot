const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');


const trackModal = new ModalBuilder()
    //this custom id is one that we can use to define all incoming interactions
    .setCustomId('trackingModal')
    .setTitle('Tracking Modal');

// Create the text input components
const trackingProvInput = new TextInputBuilder()
    .setCustomId('trackingProvInput')
    // The label is the prompt the user sees for this input
    .setLabel("What tracking provider are you sending with?")
    // Short means only a single line of text
    // Paragraph means multiple lines of text.
    .setStyle(TextInputStyle.Short);

const trackingNumInput = new TextInputBuilder()
    .setCustomId('trackingNumInput')
    .setLabel("What's the tracking number?")
    .setStyle(TextInputStyle.Short);

// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(trackingProvInput);
const secondActionRow = new ActionRowBuilder().addComponents(trackingNumInput);

// Add inputs to the modal
modal.addComponents(firstActionRow, secondActionRow);

// Show the modal to the user
await interaction.showModal(trackModal);
