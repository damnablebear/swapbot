module.exports = {
    name: 'interactionCreate',

    async execute(interaction)
    {
        if (interaction.isAutocomplete())
        {
            console.log("we're in the autocomplete block");
            console.log("interaction is: " + interaction);
            console.log("interaction client is: " + interaction.client);
            console.log("interaction client commands is " + interaction.client.commands);
            console.log("interaction commandname is: " + interaction.commandName);
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command)
            {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try
            {
                console.log("we're awaiting the command execution");
                await command.autocomplete(interaction);
            } catch (error)
            {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }
        }
        else if (interaction.isChatInputCommand()) 
        {
            console.log("interaction is: " + interaction);
            console.log("interaction client is: " + interaction.client);
            console.log("interaction client commands is " + interaction.client.commands);
            console.log("interaction commandname is: " + interaction.commandName);
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command)
            {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try
            {
                console.log("we're awaiting the command execution");
                await command.execute(interaction, interaction.client);
            } catch (error)
            {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }
        }
        else if (interaction.isButton())
        {
            //
        }
        else if (interaction.isStringSelectMenu())
        {
            console.log("we're in a user select menu interaction");
            console.log("interaction is: " + interaction);
            console.log("interaction selected value is: " + interaction.values[0]);

            // check if the interaction is a userSelectMenu
            const selectedValue = interaction.values[0]; // get the selected value
            //interaction.reply('this is a string select menu. the selected value is ' + selectedValue); // send an error message

            if (interaction.customId === 'starter')
            {
                const selection = interaction.values[0];
                const user = interaction.user;
                interaction.reply(`${user} has selected ${selection}!`);
            }

        }
        else if (interaction.isUserSelectMenu())
        {
            console.log("we're in a user select menu interaction");
            console.log("interaction selected value is: " + interaction.values[0]);
            //console.log(interaction.client.users.fetch(interaction.values[0]))
            //console.log(interaction.guild.members.cache.get(interaction.values[0]));
            if (interaction.customId === 'newtrade')
            {
                const selectedMember = interaction.values[0]; // get the selected value
                //member username is coming from the guild's members cache, and pulling the user's displayname/nickname
                const guildUserName = await interaction.guild.members.cache.get(interaction.values[0]);
                const memberUserName = await interaction.client.users.fetch(interaction.values[0]);
                //checking to see if the guild's members cache matches the person's discord-level username. if not, it prioritizes nickname
                if (memberUserName.username != guildUserName.nickname)
                {
                    interaction.reply('Starting trade with ' + guildUserName.nickname + '. Your trade ID is: EMPTY'); 
                }
                else
                {
                    //if the nickname and the username are the same, just use that
                    interaction.reply('Starting trade with ' + memberUserName.username + '. Your trade ID is: EMPTY');
                }
            }
            // check if the interaction is a userSelectMenu
            else
            {
                const selectedValue = interaction.values[0]; // get the selected value
                interaction.reply('this is a user select menu. the selected value is ' + selectedValue); // send an error message
            }
        }
        //catching Modals
        else if (interaction.isModalSubmit())
        {
            /* maybe garbage idk
            if (interaction.commandName === 'addTracking')
            {
                const trackModal = new ModalBuilder()
                    //this custom id is one that we can use to define all incoming interactions
                    .setCustomId('trackingModal')
                    .setTitle('Tracking Modal');

                    // Show the modal to the user
            await interaction.showModal(trackModal);
            }

            console.log("we're in a modal menu interaction");
            console.log("interaction is: " + interaction);
            console.log("modal customid value is: " + interaction.customId());
            const modalId = interaction.customId();


            if (modalId === 'trackingModal')
            {
                console.log("success you did it gj gj gj");

            }

            */
        }
        else
        {
            console.log("we're getting in here because this isn't a chat input command");
            return;
        }

    },
};