// TODO: Include packages needed for this application
let inq = require('inquirer');//8.2.4 Inq
let fs = require('fs');
const gMD = require('./utils/generateMarkdown')



let questions = [
    // WHEN I enter my project title
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "Installation"
    },
    {
        type: "input",
        message: "What are the usage instructions?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Who are some creditors?",
        name: "Credits"
    },
    {
        type: "input",
        message: "Contact Githubname?",
        name: "githubName"
    },
    {
        type: "input",
        message: "Contact Email?",
        name: "Email"
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'License',
        choices: ['MIT', 'GPL-3', 'Creative-Commons',],
      },
];

inq.prompt(questions)
    .then((data) => {

        let result = gMD(data);
        fs.writeFile("README.md", result, (err) => {
            err ? console.log(err) : console.log ("Worked!");
        })

    });
//title, description, table of contents, installation, usage, license, contributing, test and questions.

//When I put in the title, it's displayed as title of the README.

//NOw that I have the data
//I send the data to GenerqateMarkdown --->
//GenerateMarkdown is going to "make" the file for me.
//I then, shove all my information from DATA INTO generateMarkdown.
//Generate markdown is also going to "get" the license sections" for me.
//After that, once my Markdown is done generating, then I send it to
//Fs writeFile
//Once the file is written, then I am done.!
