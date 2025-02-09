import inquirer from "inquirer"
import fs from "fs"
import { renderLicenseBadge } from "./generateMarkdown.js";

const questions = [
    { type: 'input', name: 'title', message: "What is the title of your project?" }, 
    { type: 'input', name: 'motivation', message: "What was your motivation for the project?" }, 
    { type: 'input', name: 'description', message: "What does your project do?" },
    { type: 'input', name: 'technologies', message: "What technologies were used?" }, 
    { type: 'input', name: 'installation', message: "How do you install your project?" }, 
    { type: 'input', name: 'usage', message: "How do you use your project?" }, 
    { type: 'input', name: 'credits', message: "Credits?" }, 
    { type: 'list', name: 'license', message: "Choose a license.", choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']},  
];

function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        err ? console.log(err) : console.log('README.md complete!');
    })
};

function init() {
    inquirer.prompt(questions).then(answers => {
        const licenseBadge = renderLicenseBadge(answers.license);
        const readmeContent = `
# ${answers.title}
        
## Description
${answers.description}
        
## Motivation
${answers.motivation}
        
## Technologies used
${answers.technologies}
        
## Installation
${answers.installation}
        
## How to
${answers.usage}
        
## Credits
${answers.credits}
        
## License
${licenseBadge}`;

            writeToFile('README.md', readmeContent);
    });
}

init();
