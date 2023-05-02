module.exports = {
    name: 'interactionCreate',
    async execute(interaction)
    {
        if (!interaction.isChatInputCommand()) 
        {
            return;
        }
        else if (interaction.isAutocomplete())
        {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command)
            {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try
            {
                await command.autocomplete(interaction);
            } catch (error)
            {
                console.error(error);
            }
        }
        else
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
                await command.execute(interaction, interaction.client);
            } catch (error)
            {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }
        }
    },
};