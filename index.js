// Require the necessary discord.js classes
//const Sequelize = require('sequelize');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
//the term 'Guilds' is used by the discord api to refer to a discord server
//Intents define events that Discord should send to the bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.buttons = new Collection();
client.commands = new Collection();
client.commandArray = [];
client.functions = new Collection();
client.modals = new Collection();

//the 'Client' class in discord.js extends the EventEmitter class, so the client object exposes the '.on()' and '.once()' methods that we are using below. 
//the '.on()' and '.once()' methods take two arguments - the event name and a callback function

/*const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    //SQLite only
    storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});

Tags.sync();
*/
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles)
{
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);

    //the callback function that is passed, takes arguments returned by its respective event, collects them in an 'args' array using the '...' rest parameter syntax, and calls event.execute() while passing in the args array using the '...' spread syntax
    //these args arrays are used here because different events in discord.js have different numbers of arguments.
    //the rest parameter collects the changing number of arguments into a single array and then the spread syntax takes these elements and sends them to the 'execute' function

    if (event.once)
    {
        client.once(event.name, (...args) => event.execute(...args));
    } else
    {
        client.on(event.name, (...args) => event.execute(...args));
    }

    //console.log("filepath is: " + filePath);
}

const functionfolders = fs.readdirSync(`./functions`);
for (const folder of functionfolders){
    const functionFiles = fs
    .readdirSync(`./functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

/*
const functionsPath = path.join(__dirname, 'functions');
const functionFiles = fs.readdirSync(functionsPath).filter(file => file.endsWith('.js'));

for (const file of functionFiles)
{
    const filePath = path.join(functionsPath, file);
    const func = require(filePath);

    //the callback function that is passed, takes arguments returned by its respective event, collects them in an 'args' array using the '...' rest parameter syntax, and calls event.execute() while passing in the args array using the '...' spread syntax
    //these args arrays are used here because different events in discord.js have different numbers of arguments.
    //the rest parameter collects the changing number of arguments into a single array and then the spread syntax takes these elements and sends them to the 'execute' function

    if (func.once)
    {
        client.once(func.name, (...args) => func.execute(...args));
    } else
    {
        client.on(func.name, (...args) => func.execute(...args));
    }

    //console.log("filepath is: " + filePath);
}
*/



//setting a commands path with a dirname (which pulls from the currently-executing script) and joining the commands string/folder to the end
const commandsPath = path.join(__dirname, 'commands');
//reads and syncs the filesystem noted in commandspath, and filters out all JS files, leaving only those 
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


//for each file left (all JS files in the commands folder at this point), we're joining the commands path to the file name to make a full filepath variable (filePath)
//then we're stating that a 'command' variable requires a filepath (which makes sense, where else would it pull from)
//then we're looking to see if "data" and "execute" are present in a given command, and pulling the command's name from the data section, and setting that as the command
for (const file of commandFiles)
{
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    //Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command)
    {
        client.commands.set(command.data.name, command);
    }
    else
    {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.handleEvents();
client.handleCommands();
client.handleComponents();

// Log in to Discord with your client's token
client.login(token);



