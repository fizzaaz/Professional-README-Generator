// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input


const questions = [
    //ask for project title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (*)',
        //check if user enters something
        validate: (checktitle) => {
            if (checktitle)
                return true;
            else {
                console.log("Project Title is Required!")
                return false;
            }
        }

    },
    //ask for project description
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project briefly? (*)',
        //check if user enters something
        validate: (checkDesciption) => {
            if (checkDesciption)
                return true;
            else {
                console.log("Project Description is Required!")
                return false;
            }
        }
    },
    //how to install your project?
    {
        //ask if user wants to add installation details or not
        type: "confirm",
        name: "confirmInstall",
        message:
            "Would you like to enter some information about how install your project?",
        default: false,
    },
    {
        type: "input",
        name: "install",
        message: "How can someone install this project? (*)",
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        },
        // validate if they want to enter so they must write something
        validate: checkInstall => {
            if (checkInstall)
                return true;
            else {
                console.log('Please enter installation details')
                return false;
            }
        }
    },

    //usage
    {
        type: 'input',
        name: 'usage',
        message: 'How can somone use this project? (*)',
        validate: checkUsuage => {
            if (checkUsuage)
                return true;
            else {
                console.log('Please enter usage details');
                return false;
            }
        }
    },
    //Contribution
    {
        type: "confirm",
        name: "confirmContribute",
        message: "Would you like to add any contributors? ",
        default: false,
    }, {

        type: 'input',
        name: 'Contribution',
        message: 'How can be someone contribute to this project? (*)',
        when: ({ confirmContribute }) => {
            if (confirmContribute)
                return true;
            else return false;
        },
        validate: checkContribute => {
            if (checkContribute)
                return true;
            else {
                console.log('Please enter contribution details')
                return false;
            }
        }
    },
    //testing
    {
        type: 'input',
        name: 'test',
        message: 'How can we test this project? (*)',
        validate: checkTest => {
            if (checkTest)
                return true;
            else {
                console.log('Please enter testing details')
                return false;
            }


        }
    },
    //license
    {
        type: 'checkbox',
        name: 'license',
        message: "Select a appropriate license for this project: (*)",
        choices: ['Apache', 'MIT', 'GNU', 'Academic','None']
  
    },
    //ask for github
    {
        type:"input",
        name:"github",
        message:"Enter your Github Username (*)",
        validate: checkGithub=>{
            if(checkGithub)
            return true;
            else{
                console.log("Github user name is Required!");
                return false;
            }
        }
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address (*)",
        validate: checkEmail=>{
            if(checkEmail)
            return true;
            else{
                console.log("Email is Required!");
                return false;
            }
        }

    }




];
//asks questions to a user



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data,error=>{
        if(error)
        throw "Opps! Unable to generate read me due to "+error;
        else
        console.log("Read me is Successfully created!")
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userinput => 
        writeToFile("Readme.md",generateMarkdown(userinput))
    )}

// Function call to initialize app
init();
