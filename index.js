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
        message: "How to install application?",
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
    .then(answers => {
        let badgeURL;
        if (answers.license === "GNU GPLv3") {
            badgeURL = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        }
        if (answers.license === "MIT License") {
            badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        if (answers.license === "Apache License 2.0") {
            badgeURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        // generating readme
        const markdownFile = generateMarkdown(answers, badgeURL);
        // creating readme.md file with the generated readme
        fs.writeFile("README.md", markdownFile, function (err) {
            if (err) throw err;


        })


    })
