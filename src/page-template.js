
const generateTeam = team => {
    const generateManager = manager => {
        // card html template here
        return `
    
        ${manager.getName()}${manager.getId()}${manager.getEmail()}${manager.getOfficeNumber()}
        `    
    }
    const generateEngineer = engineer => {
        // card html template here
        return `
    
        ${engineer.getName()}${engineer.getId()}${engineer.getEmail()}${engineer.getGithub()}
        `    
    }
    const generateIntern = intern => {
        // card html template here
        return `
    
        ${intern.getName()}${intern.getId()}${intern.getEmail()}${intern.getSchool()}
        `    
    }


    const html  = [];

    html.push( team.filter( employee => getRole() === 'Manager')
        .map( manager=> generateManager( manager )));
    
    html.push( team.filter( employee => getRole() === 'Engineer')
        .map( engineer=> generateEngineer( engineer )).join(''));

    html.push( team.filter( employee => getRole() === 'Intern')
        .map( intern=> generateIntern( intern )).join(''));

    return html.join('')
}


module.exports = team => {
    // full page of HTML template goes here
    return `

        ${generateTeam(team)}
    `
};