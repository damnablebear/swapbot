const path = require('path');
const getAllFiles = require("../utils/getAllFiles")

module.exports = (client) => {
    //first argument here joins the directory name, then goes up a level from this file - hence the '..', and targets the events folder
const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
}