const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

//commands need to be placed in module.exports so that it can be exported from here and used in other files, like the command loader and handler
module.exports = {
    data: new SlashCommandBuilder()
        .setName('addtracking')
        .setDescription("Add tracking information to an existing trade!"),

    async execute(interaction, client)
    {
        const modal = new ModalBuilder()
            .setCustomId(`add-your-tracking`)
            .setTitle(`Let's add tracking information to your trade!`);

        const textInput = new TextInputBuilder()
            .setCustomId("trade-id")
            .setLabel(`What trade ID are you adding tracking for?`)
            .setRequired(true)
            //Short is a short answer, and Paragraph allows more text
            .setStyle(TextInputStyle.Short);

        const trackingNum = new TextInputBuilder()
            .setCustomId("tracking-num")
            .setLabel("What's the tracking number?")
            .setStyle(TextInputStyle.Short);


        const courService = new TextInputBuilder()
            .setCustomId('courier-service')
            .setLabel('Please type in the shipping service!')
            .setStyle(TextInputStyle.Short);
            /*.addOptions(
                //each option here must at least have a label and a value, but can also have descriptions, defaults (using setDefault(true)), and emoji using .setEmoji('12308957349857349587')
                new StringSelectMenuOptionBuilder()
                    .setLabel('USPS')
                    .setDescription(`First Class, Priority Mail, or Parcel Post. It's all good.`)
                    .setValue('USPS'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('UPS')
                    .setDescription('What can brown do for you?')
                    .setValue('UPS'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('FedEx')
                    .setDescription(`That shipping company from that Tom Hanks movie where he's on an island.`)
                    .setValue('FedEx'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Other')
                    .setDescription('European shipping I guess?')
                    .setValue('Other'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('None / NA')
                    .setDescription(`Select this if you're sending money or digital goods.`)
                    .setValue('None / NA'),
            );*/

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));
        modal.addComponents(new ActionRowBuilder().addComponents(trackingNum));
        modal.addComponents(new ActionRowBuilder().addComponents(courService));

        await interaction.showModal(modal);
    },
};

/*
/addTracking [tradeId] [trackingNum] [courierService]
This command will let a user add tracking to a given trade ID, and the tracking will tie to that user's end of the trade. If I, as damnablebear, used this command like this:
/addTracking [001149] [940037000292389312] [USPS]
...then the tracking number would get added to the items that I'm sending.
It is intended that there is/will be validation between the courier service noted and the format of the tracking number provided.
Courier can be entered as "N/A", "NA", or "None" and no validation will take place - this is useful if sending money or digital goods.
The other trader will be notified that tracking has been added for their incoming item(s).*/