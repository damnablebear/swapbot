const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('activatetrade')
        .setDescription('Activates a new trade that has been initiated. Requires the trade ID and an item description.')

        //.setDMPermission(false)

        .addStringOption(option =>
            option
                .setName('tradeid')
                .setDescription('Enter your trade ID here. (You can find this by using /newtrade!)')
                .setRequired(true))
        //this SlashCommandBuilder#setDefaultMemberPermissions() method sets the required permission that is needed to run this command. this will require the user to have that permission before they can use this
        .addStringOption(option =>
            option
                .setName('itemdescription')
                .setDescription('A description of the item(s) that you are sending to your trade partner!')
                .setRequired(true)),

    //values can be retrieved asynchronously
    async execute(interaction)
    {
        //you can get values of any type using the corresponding CommandInteractionOptionResolver#get_____() method, as shown on the next line
        const tradeId = interaction.options.getString('tradeid');
        //reason isn't a required option, so the ?? below sets a default value in case the user doesn't supply a reason
        const itemDesc = interaction.options.getString('itemdescription');



        //after changing the content above to utilize the action row, we're instead prompting the user with a confirmation question, and presenting the contents of the row
        const response = await interaction.reply({
            ephemeral: true,
            content: `Successfully started your side of trade #${tradeId}! The item you'll be sending is: ${itemDesc}`,
        });

        
        //if the user is still in the guild where this command is run, you can also use .getMember('target') to get their GuildMember object
    }
};
