const path = require('node:path');
const getAllFiles = require("./getAllFiles")

module.exports = (client) =>
{
    //first argument here joins the directory name, then goes up a level from this file - hence the '..', and targets the events folder
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    for (const eventFolder of eventFolders)
    {
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a, b) => a > b);

        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop()

        client.on(eventName, async (arg) =>
        {
            for (const eventFile of eventFiles)
            {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        })
    }
}
