const Employee = require('./Employee');

class Intern extends Employee {

    // Intern role will include a school name
    constructor ( name, id, email, school ) {

        super( name, id, email );
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;