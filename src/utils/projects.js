const fs = require('fs');
const path = require('path');

const utilsRoot = path.join(__dirname, '../utils');
const projectJsonFile = utilsRoot + '/projects.json';

const getProjects = ()=>{
    let dataBuffer = fs.readFileSync(projectJsonFile);
    let jsonString = dataBuffer.toString();

    return JSON.parse(jsonString);
}


module.exports = {
    getProjects
}