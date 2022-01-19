const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/page-template')

const DIST_DIR = path.resolve(__dirname, 'dist')
const distPath = path.join(DIST_DIR, 'team.html')

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

const nextActionQuestion = [
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
    console.log(`The engineer ${answers.engineerName} has been added`)

    // THEN Ask user what they would like to do next
    askForNextAction();

    }

// Ask user for intern info
async function askForInternInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( internQuestions )

    // THEN create and store an object for the Intern
    employee.push( new Intern( /* pass in data from inquirer */ ));

    // THEN Ask user what they would like to do next
    askForNextAction();

    }

function writeToFile() {
    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(distPath, generateTeam(employees), 'utf-8');
}

// Ask user what they would like to do next
async function askForNextAction() {

    // Add Engineer, Add Intern, or Be done
    const answers =  await inquirer.prompt( nextActionQuestion )

        // IF 'Add Engineer' -> Ask user for engineer info
        if ( answers === 'Engineer' ) {
            askForEngineerInfo();
        }

        // IF 'Add Intern' -> Ask user for intern info
        if ( answers === 'Intern' ) {
            askForInternInfo();
        }

        // IF 'Be done' -> Build an HTML page
        if ( answers === 'I am done adding team members' ) {
            // then call build html function
            writeToFile();
        }

}

askForManagerInfo();

// Use all of the collected employee data to build an HTML page, use 'employees[]'
// fs file thing

