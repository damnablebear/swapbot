const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Select a member and ban them.')
        //.setDMPermission(false)
        //.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)

        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to ban')
                .setRequired(true))
        //this SlashCommandBuilder#setDefaultMemberPermissions() method sets the required permission that is needed to run this command. this will require the user to have that permission before they can use this
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('The reason for banning')),

        //you can set permissions while subcommands exist but you cannot set them within each subcommand - you need multiple commands if you want to make different permission levels
        //you ALSO cannot have options AND subcommands - if you have subcommands, you must place your options within them
        
        /*.addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user'))),

        /*.addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server'))
                .addUserOption(option => option.setName('tarserver').setDescription('The server')),*/

    //values can be retrieved asynchronously
    async execute(interaction)
    {
        //you can get values of any type using the corresponding CommandInteractionOptionResolver#get_____() method, as shown on the next line
        const target = interaction.options.getUser('target');
        //reason isn't a required option, so the ?? below sets a default value in case the user doesn't supply a reason
        const reason = interaction.options.getString('reason') ?? 'No reason provided';
        //you can also retrieve subcommands' options. the subcommands in this example don't really make sense, but are here in case we want to know how to compare the subcommands' setup versus their retrieval
        /* if (interaction.options.getSubcommand() === 'user') {
             const user = interaction.options.getUser('target');
 
             if (user) {
                 await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
             } else {
                 await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
             }
         } else if (interaction.options.getSubcommand() === 'server') {
             await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
         }
*/
        await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
        //if the user is still in the guild where this command is run, you can also use .getMember('target') to get their GuildMember object
        await interaction.guild.members.ban(target);
    }
};
