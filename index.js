const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/page-template')

// const DIST_DIR = path.resolve(__dirname, 'dist')
// const distPath = path.join(DIST_DIR, 'team.html')

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
    employees.push( new Manager( answers ));
    console.log(`Manager ${answers.managerName} has been added`)

    // THEN Ask user what they would like to do next
    askForNextAction();

    }


// Ask user for engineer info
async function askForEngineerInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( engineerQuestions )

    // THEN create and store an object for the Engineer
    employees.push( new Engineer( answers ));
    console.log(`Engineer ${answers.engineerName} has been added`)

    // THEN Ask user what they would like to do next
    askForNextAction();

    }

// Ask user for intern info
async function askForInternInfo() {

    // Prompt user for the data
    const answers = await inquirer.prompt( internQuestions )

    // THEN create and store an object for the Intern
    employees.push( new Intern( answers ));
    console.log(`Intern ${answers.internName} has been added`)

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
        const answer =  await inquirer.prompt( nextActionQuestion )
        
        // IF 'Add Engineer' -> Ask user for engineer info
        if ( answer.nextQuestion === 'Engineer' ) {
            askForEngineerInfo();
        }
        
        // IF 'Add Intern' -> Ask user for intern info
        if ( answer.nextQuestion === 'Intern' ) {
            askForInternInfo();
        }
        
        // IF 'Be done' -> Build an HTML page
        if ( answer.nextQuestion === 'I am done adding team members' ) {
            // then call build html function
            writeToFile();
        }
        
    }
    
askForManagerInfo();

// Use all of the collected employee data to build an HTML page, use 'employees[]'
// fs file thing - reference README generator

