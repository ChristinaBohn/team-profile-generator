const Employee = require('./Employee');

class Engineer extends Employee {

    constructor ( name, id, email, github ) {
        
        super( name, id, email );
        this.github = github;
        
    }
    
    // Engineer role will include a Github username
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
        
}

module.exports = Engineer;