const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/page-template');

const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

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

async function askForManagerInfo() {

    const answers = await inquirer.prompt( managerQuestions )

    employees.push( new Manager( answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber ));
    console.log(`Manager ${answers.managerName} has been added to your team.`)

    askForNextAction();

}


async function askForEngineerInfo() {

    const answers = await inquirer.prompt( engineerQuestions )

    employees.push( new Engineer( answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github ));
    console.log(`Engineer ${answers.engineerName} has been added to your team.`)

    askForNextAction();

}

async function askForInternInfo() {

    const answers = await inquirer.prompt( internQuestions )

    employees.push( new Intern(answers.internName, answers.internId, answers.internEmail, answers.school ));
    console.log(`Intern ${answers.internName} has been added to your team.`)

    askForNextAction();

}

function writeToFile() {
    if(!fs.existsSync( DIST_DIR )) {
        fs.mkdirSync( DIST_DIR )
    }
    fs.writeFileSync( distPath, generateTeam( employees ), 'utf-8');
}

async function askForNextAction() {
    
    const answer =  await inquirer.prompt( nextActionQuestion )
    
    if ( answer.nextQuestion === 'Engineer' ) {
        askForEngineerInfo();
    }
    
    if ( answer.nextQuestion === 'Intern' ) {
        askForInternInfo();
    }
    
    if ( answer.nextQuestion === 'I am done adding team members' ) {

        // then build Team Profile html
        writeToFile( 'team.html', employees );
        console.log( employees );
    }
    
}
    
askForManagerInfo();

