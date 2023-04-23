// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter Project description",
  },
  {
    type: "input",
    name: "installation",
    message: "How would someone install this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please Provide what this application will be used for:",
  },
  {
    type: "input",
    name: "Contributing",
    message: "How Can Others Contribute to this repo?",
  },
  {
    type: "input",
    name: "testing",
    message: "Insert testing instructions here:",
  },
  {
    type: "list",
    name: "badge",
    message: "Please select option below",
    choices: ["MIT", "Apache", "Mozilla", "IBM", "None"],
  },
  {
    type: "input",
    name: "Github Username",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "Email Address",
    message: "Please enter your email address:",
  },
  {
    type: "input",
    name: "Development",
    message: "What are your plans for Future Development?",
  },
  {
    type: "input",
    name: "Credits",
    message: "List all collaborators, tutorials, and or third-party assets",
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
