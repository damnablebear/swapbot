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



        if (interaction.isChatInputCommand()) 
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
        else
        {
            console.log("we're getting in here because this isn't a chat input command");
            return;
        }

    },
};