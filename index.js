// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input


const questions = [
    //ask for project title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (*)',
        validate: (checktitle) => {
            if (checktitle)
                return true;
            else
                {
                    console.log("Project Title is Required!")
                    return false;}
        }

    },
    //ask for project description
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project briefly? (*)',
        validate: (checkDesciption)=>
        {
            if(checkDesciption)
            return true;
            else{
                console.log("Project Description is Required!")
                return false;
            }
        }
    },
    //how to install your project?
    {
        type: 'input',
        name: 'installation',
        message: 'Enter project installation instructions',
        when: ({confirminstall})=>{
            if(confirminstall){
            return true;}
            else{
            return false;}
        }
    },
    //usage
    {
        type: 'input',
        name: 'usage',
        message: 'How can somone use this project?'
    },
    //Contribution
    {
        type: 'input',
        name: 'Contribution',
        message: 'How can be someone contribute to this project?'
    },
    //testing
    {
        type: 'input',
        name: 'test',
        message: 'How can we test this project?'
    },
    //license
    {
        type: 'checkbox',
        name: 'license',
        message: "Select a appropriate license for this project: ",
        choices: ['Apache', 'MIT', 'GNU', 'Academic', 'None']
    }



];
//asks questions to a user
const promptUser = () => {
    return inquirer.prompt(questions)
        .then(userinput => console.log(userinput))
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
