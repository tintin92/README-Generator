const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "Enter Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description",
        name: "description"

    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install"
        
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "use"

    },
    {

    }, 



])
    .then(function (answers) {
        console.log(answers);
    })