
const generateTeam = team => {
    const generateManager = manager => {
        
        // Manager info card
        return `
        <div class="card border-info shadow" style="width: 18rem;">
            <div class="card-header text-center fw-bold">
              Manager
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${manager.getName()}</li>
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: ${manager.getEmail()}</li>
              <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>`
  
    }
    const generateEngineer = engineer => {
        
        // Engineer info card
        return `
        <div class="card border-info shadow" style="width: 18rem;">
            <div class="card-header text-center">
              Engineer
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${engineer.getName()}</li>
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: ${engineer.getEmail()}</li>
              <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
          </div>`

    }
    const generateIntern = intern => {
        
        // Intern info card
        return `
        <div class="card border-info shadow" style="width: 18rem;">
            <div class="card-header text-center">
              Intern
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${intern.getName()}</li>
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: ${intern.getEmail()}</li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`    
    }


    const html  = [];

    html.push( team.filter( employee => employee.getRole() === 'Manager')
        .map( manager => generateManager( manager )));
    
    html.push( team.filter( employee => employee.getRole() === 'Engineer')
        .map( engineer => generateEngineer( engineer )).join(''));

    html.push( team.filter( employee => employee.getRole() === 'Intern')
        .map( intern => generateIntern( intern )).join(''));

    return html.join('')
}


module.exports = team => {

    //HTML template for web page
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    
        <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4 text-center">Team Profile</h1>
            <hr class="my-4">
            <p class="lead text-center">Meet our software engineering team</p>
        </div>
        
            ${generateTeam(team)}

    </body>
    </html>
    `
};