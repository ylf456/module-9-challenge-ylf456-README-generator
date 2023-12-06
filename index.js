// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const MarkdownFunc = require("./assets/js/generateMarkdown")
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
        },
        {
            type: 'input',
            name: 'description',
            message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
      - What was your motivation?
      - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      - What problem does it solve?
      - What did you learn?`
        },
        {
            type: 'input',
            name: 'installation',
            message: '(optional)What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: `(optional)Provide instructions and examples for use. Include screenshots as needed.
      To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
      ![alt text](assets/images/screenshot.png)`
        },
        {
            type: 'input',
            name: 'credits',
            message: `(optional)List your collaborators, if any, with links to their GitHub profiles.
      If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
      If you followed tutorials, include links to those here as well.`,
        },
        {
            type: 'lists',
            name: 'licenseChoice',
            message: `License section. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
      ---
      🏆   After choose a license option other than none, a section containing license badge, a link to the license and test descrition of the license will be generated.`,
            options: ["none","MIT","Apache License 2.0","GNU GPL","ISC License"]
    },

        {
            type: 'input',
            name: 'features',
            message: '(optional)If your project has a lot of features, list them here.',
        },

        {
            type: 'input',
            name: 'howToContribute',
            message: `(optional)If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. 
            The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`,
        },

        {
            type: 'input',
            name: 'tests',
            message: '(optional)Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        },

        {
            type: 'input',
            name: 'github',
            message: '(optional)What is your github user name? This will generate a section and a link to your github profile.',
        },

    ])
    .then((answers) => {
        questions.push(answers);
        writeToFile("README.md", questions)
        //use data to call the function  
    })



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    const README = MarkdownFunc(data);
    fs.writeFile(fileName, README,(err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'));

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
