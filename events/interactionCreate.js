module.exports = {
    name: 'interactionCreate',
    async execute(interaction)
    {
        if (interaction.isChatInputCommand() || interaction.isAutocomplete()) 
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
        else if (interaction.isButton())
        {
//respond to button
        }
        else if (interaction.isStringSelectMenu())
        {
//respond to string select menu
        }
        else
        {
            return
        }
    },
};