const Employee = require('../lib/Employee');

describe( "Employee", () => {
    
    describe( "getName", () => {
        
        it( 'Can set name via constructor arguments', () => {
            const name  = 'Sam';
            const employee = new Employee( name, 9, 'sam@mail.com' );
            expect( employee.name ).toBe( name ) ;
        })
    
    });

    describe( "getId", () => {

        it( 'Can set ID via constructor arguments', () => {
            const id  = '9';
            const employee = new Employee( 'Sam', id, 'sam@mail.com' );
            expect( employee.id ).toBe( id );
        })
        
    });

    describe( "getEmail", () => {

        it( 'Can set email via constructor arguments', () => {
            const email  = 'sam@mail.com';
            const employee = new Employee( 'Sam', 9, email );
            expect( employee.email ).toBe( email );
        })

    });

});