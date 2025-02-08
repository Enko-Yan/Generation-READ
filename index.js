import inquirer from "inquirer"
import fs from "fs"

// TODO: Create an array of questions for user input

const questions = ["What is the title of your project?", "What was your motivation for the project?", "What does your project do?",
"What technologies were used?", "How do you install your project?", "How do you use your project?", "Credits?", "Choose a license." 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README', data, err => {
        err ? console.log(err) : console.log('File written successfully!');
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
