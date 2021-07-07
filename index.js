// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    //ask for project title
    {
        type: 'input',
        name : 'title',
        message: 'What is your project title?'
    }
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
