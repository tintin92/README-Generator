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
        message: "Steps required to install your project?",
        name: "install"

    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "use"

    },
    {
        type: "list",
        choices: ["GNU GPLv3", "MIT License", "Apache License 2.0"],
        name: "license"

    },
    {
        type: "input",
        message: "Who contributed to the project?",
        name: "credit"
    },
    {
        type: "input",
        message: "What command do you use to run tests",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }

])
    .then(function (answers) {
        console.log(answers);
    })