const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('kick')
	.setDescription('Select a member and kick them.')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to kick')
			.setRequired(true))
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    //by default, globally-deployed commands are available for use in DMs, but the next line can be used to disable this. commands that are only in specific guilds cannot be used in DMs
    .setDMPermission(false);

/* You can require the user to have all of multiple permissions by merging them with the | bitwise OR operator (for example PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers). 
You cannot require a subset of multiple permissions. Discord evaluates against the combined permission bitfield! */