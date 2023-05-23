const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder } = require('discord.js');

//TO DO: add trade ID / external DB functionality

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtrade')
        .setDescription('Allows you to start a new trade with a user.'),
    async execute(interaction)
    {
        //adding a user select menu
        const userSelect = new UserSelectMenuBuilder()
            .setCustomId('newtrade')
            .setPlaceholder('Select a user to trade with.')
            .setMinValues(1)
            .setMaxValues(1);

        //creating an action row and adding the userselect component to it
        const row1 = new ActionRowBuilder()
            .addComponents(userSelect);

        //pushing this to the response back to the user
        const response = await interaction.reply({
            content: "Select the user you'd like to trade with:",
            components: [row1],
            ephemeral: true,

        });
        //setting up a filter where we're waiting 60 seconds for the same user who initiated the command
        const collectorFilter = i => i.user.id === interaction.user.id;
        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

        try
        {
            //evaluating the confirmation action to get information about the user they selected
            //we can safely use first() because it is a single-entry dropdown, only one choice can be made
            const recipientUser = confirmation.users.first();
            const recipientUserID = confirmation.users.first().id;
            const initiatorUserName = interaction.user.username;

            //if they've selected someone (basically this is just a truthy check), then we're going to DM that user, letting them know that the initiator of the command has... well, initiated a trade
            if (recipientUser)
            {
                recipientUser.send(recipientUserID, `Hey if this works, send a message to ${initiatorUserName}`);
            }
            //then we're just going to output a message to the initiator, letting them know what their trade ID is, and telling them that they've opened a trade
            await confirmation.update({ content: `You have started a trade with ${confirmation.users.first().username}, and your trade ID is: TRADE ID`, components: [] });
        }
        //if there's an error in the catch, then we're debugging it, and we're giving a message back to the user that they didn't respond in 60 seconds' time
        catch (e)
        {
            console.log(e)
            await response.edit({ content: 'User confirmation not received within 60 seconds, cancelling', components: [] });
        }

    },
};