require("dotenv").config();
const {REST, Routes, ApplicationCommandOptionType} = require("discord.js");

module.exports = {

    name: 'ban',
    description: 'Select a member and ban them.',
    //.setDMPermission(false)
    //.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)

    options: [{
        name: 'target',
        description: 'The member to ban',
        required: true,
        type: ApplicationCommandOptionType.User
    },
    //this SlashCommandBuilder#setDefaultMemberPermissions() method sets the required permission that is needed to run this command. this will require the user to have that permission before they can use this
    {
        name: 'reason',
        description: 'The reason for banning',
        type: ApplicationCommandOptionType.String
    }]
        //below, we are waiting for a single interaction using the awaitMessageComponent option. it returns a promise that resolves when any interaction passes its filter (if one is provided) or throws if none are received before the timeout
        //if none are received, remove/edit the components and notify the user
        //all interactions require a response within 3 seconds, or else discord will treat them as failed
        //below, we are setting this to wait 60 seconds before editing the message to show that we didn't receive a confirmation
        //the filter: part ensures that we are only looking for a response from the user who initiated it
        
};
