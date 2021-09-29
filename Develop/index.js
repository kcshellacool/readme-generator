// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "Username",
    },
    {
        type: "input",
        message:"What is your email address?",
        name: "Email",
    },

    {
        type:"input",
        message: "What is the title for your project?",
        name:"Title",
    },

    {
        type:"type",
        message: "Please give description of your project.",
        name: "Description",
    },

    {
        type: "input",
        meessage: "What necessary dependencies must be installed to run this app?",
        name: "Installation",
    },

    {
        type: "input",
        message: "What is this app used for?",
        name: "Usage",   
    },

    {
        type: "input",
        message: "What license was used for this README?",
        name: "License",
    },

    {
        type: "input",
        message: "Please add contributors",
        name: "Contributor",
    },

    {
        type: "input",
        message: "What command do you use to test this App?",
        name: "Test",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./demo/"+fileName, data, function(err) {
       if (err) {
           return console.log(err);
       }
       console.log ("Successfully wrote: " + fileName);
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md",generatorMarkdown(data))
    })

}

// Function call to initialize app
init();
