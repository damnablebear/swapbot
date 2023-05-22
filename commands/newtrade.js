const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtrade')
        .setDescription('Allows you to start a new trade with a user.'),
    async execute(interaction)
    {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        //const fromUser = interaction.user.username;
        //const toUser = interaction.user.username;
        //this is a new comment
        const userSelect = new UserSelectMenuBuilder()
            .setCustomId('newtrade')
            .setPlaceholder('Select a user to trade with.')
            .setMinValues(1)
            .setMaxValues(1);

        const row1 = new ActionRowBuilder()
            .addComponents(userSelect);

        const response = await interaction.reply({
            content: "Select the user you'd like to trade with:",
            components: [row1],
            ephemeral: true,

        });
        const collectorFilter = i => i.user.id === interaction.user.id;
        const confirmation = await response.awaitMessageComponent({filter: collectorFilter, time: 60000});


        try{

            //now we are checking which button is clicked and sending an interaction to discord based on the button
            await confirmation.update({ content: `You have started a trade with ${confirmation.users.first().username}, and your trade ID is: TRADE ID`, components: [] });
        }
        catch (e) {
            console.log(e)
            await response.edit({ content: 'User confirmation not received within 60 seconds, cancelling', components: []});
        }

    },
};


//user sends command
//async fires with prompt
//user enters/answers prompt
//send response