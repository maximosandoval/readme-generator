////////ASSIGNMENT OVERVIEW/////////////
// A command-line application that accepts user input
// CREATE prompts/questions for information about my project
// THEN a README.md is generated with the following:
// - Project Title
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License
// - Contributing
// - Tests
// - Questions
// - Github username & email (place under questions)
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// Anchor link the Table of Contents to the README file
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
// Create a video which shows the functionality

/////////CODING STEPS///////////////////
// Create an array of questions for user input. Follow the guide above.
//Go thru the readme file to get all of the questions
//1 Question needs to have selection of app used to create project - Apache, GNU, etc.
//Get badge links, etc here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//Put TOC in generate markdown

/////////////START OF CODE//////////////////
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);
//Project Name
const questions = [
  // Project Name
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You MUST to enter a title.");
        return false;
      }
    },
  },
  // Description of project
  {
    type: "input",
    name: "description",
    message: "Project Description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You MUST provide a project description.");
        return false;
      }
    },
  },
  // Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "Please write brief installation instructions.",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You MUST provide installation instructions.");
        return false;
      }
    },
  },
  // Usage Information
  {
    type: "input",
    name: "usage",
    message: "Briefly write usage instructions.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You MUST provide usage instructions.");
        return false;
      }
    },
  },
  // Contribution Guidlines
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project?",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("You MUST provide contribution information.");
        return false;
      }
    },
  },
  // Test Instructions
  {
    type: "input",
    name: "testing",
    message: "Briefly explain how you test the project.",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("You MUST explain how you test the project.");
        return false;
      }
    },
  },
  // License Options
  {
    type: "list",
    name: "license",
    message: "Select license(s) for your project.",
    choices: [
      "None",
      "Apache 2.0",
      "Boost Software License 1.0",
      "GNU-General-Public GPL v3",
      "MIT",
      "Mozilla-Public 2.0",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Select a license to continue.");
        return false;
      }
    },
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username.",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter your GitHub username to continue.");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Include your email (Not Required).",
  },
];

//END OF ARRAY
//MARKDOWN PROMPT
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  let information = generateMarkdown(answers);
  fs.writeFile("README.md", information, (err) => {
    if (err) throw err;
  });
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.error(err) : console.log("File written.")
  );
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
