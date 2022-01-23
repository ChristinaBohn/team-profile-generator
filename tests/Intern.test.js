const Intern = require('../lib/Intern');

describe( "Intern", () => {
    
    describe( "getSchool", () => {
        
        it( 'Can set school name via constructor arguments', () => {
            const school  = 'University of Washington';
            const intern = new Intern( school );
            expect( intern.school ).toBe( school ) ;
        })
    
    });

});