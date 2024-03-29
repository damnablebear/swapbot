const { readdirSync } = require('node:fs');


module.exports = (client) =>
{
    client.handleComponents = async () =>
    {
        const componentFolders = readdirSync(`./components`);
        for (const folder of componentFolders)
        {
            const componentFiles = readdirSync(`./components/${folder}`).filter(file => file.endsWith(".js")
            );

            const { buttons, selectMenus, modals } = client;
            switch (folder)
            {
                case "buttons":
                    for (const file of componentFiles)
                    {
                        const button = require(`../../components/${folder}/${file}`);
                        buttons.set(button.data.name, button);
                    }
                    break;

                    case "selectMenus":
                    for (const file of componentFiles)
                    {
                        const menu = require(`../../components/${folder}/${file}`);
                        selectMenus.set(menu.data.name, menu);
                    }
                    break;

                    case "modals":
                    for (const file of componentFiles)
                    {
                        const modal = require(`../../components/${folder}/${file}`);
                        if (modal.data.name === undefined)
                        {
                            console.log("Make sure your modals all have a 'name' value!");
                        }
                        modals.set(modal.data.name, modal);
                        
                    }
                    break;
                default:
                    break;
            }
        }
    }
}