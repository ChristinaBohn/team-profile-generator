const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Manager');
const Intern = require('./lib/Manager');

const employees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s id?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager\'s email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s id?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the URL for the engineer\'s GitHub?'
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s id?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Which school does the intern attend?'
    }
];

const nextQuestion = [
    {
        type: 'list',
        name: 'nextQuestion',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    }
];


// Ask user for manager info
async function askForManagerInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( managerQuestions )

    // THEN create and store an object for the Manager
    employee.push( new Manager( /* pass in data from inquirer */ ));

    // THEN Ask user what they would like to do next
    askForNextAction();

    }


// Ask user for engineer info
async function askForEngineerInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( engineerQuestions )

    // THEN create and store an object for the Engineer
    employee.push( new Engineer( /* pass in data from inquirer */ ));

    // THEN Ask user what they would like to do next
    askForNextAction();

    }

// Ask user for intern info
async function askForInternInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( internQuestions )

    // THEN create and store an object for the Intern
    employee.push( new Manager( /* pass in data from inquirer */ ));

    // THEN Ask user what they would like to do next
    askForNextAction();

    }

// Ask user what they would like to do next
function askForNextAction() {

    // Add Engineer, Add Intern, or Be done

        // IF 'Add Engineer' -> Ask user for engineer info

        // IF 'Add Intern' -> Ask user for intern info

        // IF 'Be done' -> Build an HTML page

}

// Use all of the collected employee data to build an HTML page, use 'employees[]'
