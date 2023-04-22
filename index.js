// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter README title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter README description",
  },
  {
    type: "list",
    name: "badge",
    message: "Please select option below",
    choices: ["MIT", "Apache", "Mozilla", "IBM", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkDown(answers));
  });
}

// Function call to initialize app
init();
