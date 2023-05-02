/* const { SlashCommandBuilder } = require('discord.js');

module.exports = {

data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    //options are like arguments to a function
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            //within an option, you can use .setRequired(true) to require an entry for that option
            .setRequired(true)
            .setMaxLength(2000))
    //this lets you set a channel option
    .addChannelOption(option =>
        option.setName('channel')
            .setDescription('The channel to echo into'))
            //.addChannelTypes(ChannelType.GuildText))
    //this lets you set a boolean option based on the option you pass in
    .addBooleanOption(option =>
        option.setName('ephemeral')
            .setDescription('Whether or not the echo should be ephemeral')),
    

            //more information about potential options is available in the SlashCommandBuilder documentation
            //string, integer, number, and boolean are all accepted as types

        //String:
            // setMaxLength() and setMinLength() can enforce limitations on length

        //Integer:
            // only accepts whole numbers
            //setMaxValue() and setMinValue() enforce range limitations 

        //Number:
            //accepts whole and decimals
            //setMaxValue() and setMinValue() enforce range limitations 


        //Channel
            //addChannelTypes() can restrict selection to specific channel types - e.g. ChannelType.GuildText for text channels only

        //User, Channel, Role, and Mentionable options will show a selection list in the discord interface for their appropriate type, or will accept a snowflake (#) id as input
        //attachment options prompt the user to make an upload along with the command's use

        //Choices can be used with the String, Number, or Integer types, which can force the user to select a predetermined value rather than entering free text
            //a 'name' value is required', and a 'value' is what the bot will receive when that name value is selected 
            //choices can be used like this:
                /*
                const data = new SlashCommandBuilder()
                .setName('gif')
                .setDescription('Sends a random gif!')
                .addStringOption(option =>
                option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Funny', value: 'gif_funny' },
                    { name: 'Meme', value: 'gif_meme' },
                    { name: 'Movie', value: 'gif_movie' },
                ));
                
                you can also return options with getString(), and this still works if you've set up options as opposed to free-entry
                
                async execute(interaction) {
		        const category = interaction.options.getString('category')
                }
            };
                

        //Subcommand and Subcommandgroup options let you have branching paths of subsequent options for commands
                    //Subcommands are available with .addSubcommand()

                    /* Example:
                    const data = new SlashCommandBuilder()
                    .setName('info')
                    .setDescription('Get info about a user or a server!')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('user')
                            .setDescription('Info about a user')
                            .addUserOption(option => option.setName('target').setDescription('The user')))
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('server')
                            .setDescription('Info about the server'));
            */

        //Localizations are available to use, and will localize names and descriptions to the user's selected language
            //Localizations can be set with setNameLocalizations() and setDescriptionLocalizations(), like so:

            /*
            const data = new SlashCommandBuilder()
                .setName('dog')
                .setNameLocalizations({
                    pl: 'pies',
                    de: 'hund',
                })
                .setDescription('Get a cute picture of a dog!')
                .setDescriptionLocalizations({
                    pl: 'Słodkie zdjęcie pieska!',
                    de: 'Poste ein niedliches Hundebild!',
                })
                .addStringOption(option =>
                    option
                        .setName('breed')
                        .setDescription('Breed of dog')
                        .setNameLocalizations({
                            pl: 'rasa',
                            de: 'rasse',
                        })
                        .setDescriptionLocalizations({
                            pl: 'Rasa psa',
                            de: 'Hunderasse',
                        }),
                );
    */
