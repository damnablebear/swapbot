module.exports = {
    name: 'interactionCreate',
    async execute(interaction)
    {
        /* if (!interaction.isChatInputCommand()) 
         {
             console.log("we're getting in here because this isn't a chat input command");
             return;
         }
 
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
         }*/



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
        else if (interaction.isUserSelectMenu())
        {
            console.log("we're in a user select menu interaction");
            console.log("interaction is: " + interaction);
            console.log("interaction selected value is: " + interaction.values[0]);

            // check if the interaction is a userSelectMenu
            const selectedValue = interaction.values[0]; // get the selected value
            if (selectedValue === 'option1')
            {
                interaction.reply('You selected option 1'); // send a reply message
            } else if (selectedValue === 'option2')
            {
                interaction.reply('You selected option 2'); // send a reply message
            } else
            {
                interaction.reply('Invalid option selected'); // send an error message
            }
        }
        else
        {
            console.log("we're getting in here because this isn't a chat input command");
            return;
        }

    },
};