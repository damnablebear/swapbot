const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('swaphelp')
        .setDescription("Get help using SwapBotz' commands!"),
    

    async execute(interaction)
    {
        const pages = [
            [
                { customId: 'confirm', label: 'Confirmation', style: 'Primary' },
                { customId: '2', label: 'Option 2', style: 'Primary' },
                { customId: '3', label: 'Option 3', style: 'Primary' },
            ],
            [
                { customId: '4', label: 'Option 4', style: 'Primary' },
                { customId: '5', label: 'Option 5', style: 'Primary' },
            ],
        ];

        const paginatedMessage = async (interaction, pages) =>
        {
            const rowLimit = 5;
            const totalRows = Math.ceil(pages.length / rowLimit);

            const initialPage = 0;
            let currentPage = initialPage;

            const updateMessage = async () =>
            {
                const rowStart = currentPage * rowLimit;
                const rowEnd = rowStart + rowLimit;
                const pageButtons = pages.slice(rowStart, rowEnd);

                const rowComponents = pageButtons.map((button) =>
                {
                    const buttonComponent = new ButtonBuilder()
                        .setCustomId(button[0].customId)
                        .setLabel(button[0].label)
                        .setStyle(button[0].style);

                    return buttonComponent;
                });

                const row = new ActionRowBuilder().addComponents(rowComponents);

                await interaction.edit({
                    content: `Page ${currentPage + 1} of ${totalRows}`,
                    components: [row],
                });
            };

            await updateMessage();

            const collectorFilter = (m) => m.author === m.author
            console.log('were here')
            const collector = interaction.channel.createMessageCollector({
                filter: collectorFilter,
                time: 60000,
            });
            //

            collector.on('collect', async (interaction) =>
            {
                const selectedButton = interaction.customId;

                switch (selectedButton)
                {
                    case 'previous':
                        if (currentPage > 0)
                        {
                            currentPage--;
                            await updateMessage();
                        }
                        break;
                    case 'next':
                        if (currentPage < totalRows - 1)
                        {
                            currentPage++;
                            await updateMessage();
                        }
                        break;
                    default:
                        // Handle other button interactions
                        break;
                }

                await interaction.deferUpdate();
            });

            collector.on('end', () =>
            {
                // Handle the collector ending
            });
        };

        const initialMessage = await interaction.reply({
            content: 'Hi there! What do you need help with?',
            ephemeral: true,
        });

        await paginatedMessage(initialMessage, pages);
    },
};



/*
async execute(interaction)
{
const numberOne = new ButtonBuilder()
.setCustomId('confirm')
.setLabel('Confirm Ban')
.setStyle('Secondary');

const numberTwo = new ButtonBuilder()
.setCustomId('cancel')
.setLabel('Cancel')
.setStyle('Secondary');

//link buttons cannot have a customId
const numberThree = new ButtonBuilder()
.setLabel('See why you should ban someone')
.setStyle('Secondary');

const numberFour = new ButtonBuilder()
.setCustomId('disabled')
.setLabel("You can't click me")
.setStyle('Secondary')

//emoji ids can be found by typing \:emoji_name: in discord to get their ID
const moreChoices = new ButtonBuilder()
.setCustomId('emoji')
.setLabel('Emoji')
.setStyle('Secondary')

const row = new ActionRowBuilder()
.addComponents(cancel, confirm, checkLink, disabled, emojiButton);


const response = await interaction.reply({
content: "Hi there! What do you need help with? \n \n Please respond to this message with one of the following number emojis: \n \n 1 - Creating a new trade \n 2 - Activating a trade \n 3 - Adding tracking information \n 4 - Checking incoming / outgoing tracking information \n 5 - Finishing a trade \n 6 - Rankings \n 7 - General information on trade progression",
ephemeral: true,
});



const collectorFilter = i => i.user.id === interaction.user.id;

//below, we are waiting for a single interaction using the awaitMessageComponent option. it returns a promise that resolves when any interaction passes its filter (if one is provided) or throws if none are received before the timeout
//if none are received, remove/edit the components and notify the user
//all interactions require a response within 3 seconds, or else discord will treat them as failed
//below, we are setting this to wait 60 seconds before editing the message to show that we didn't receive a confirmation
//the filter: part ensures that we are only looking for a response from the user who initiated it
try
{
const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

//now we are checking which button is clicked and sending an interaction to discord based on the button
if (confirmation.customId === 'confirm')
{
await interaction.guild.members.ban(target);
await confirmation.update({ content: `${target.username} has been banned for reason: ${reason}`, components: [] });
} else if (confirmation.customId === 'cancel')
{
await confirmation.update({ content: 'Action cancelled', components: [] });
}
}
catch (e)
{
await response.edit({ content: "I didn't get a response from you, but if you still need help, just use /swaphelp again!", components: [] });
}
//if the user is still in the guild where this command is run, you can also use .getMember('target') to get their GuildMember object
}
};
*/