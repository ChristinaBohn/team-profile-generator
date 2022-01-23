const Manager = require('../lib/Manager');

describe( "Manager", () => {
    
    describe( "getOfficeNumber", () => {
        
        it( 'Can set office number via constructor arguments', () => {
            const officeNumber  = 101;
            const manager = new Manager( 'Sam', 9, 'sam@mail.com', officeNumber );
            expect( manager.officeNumber ).toBe( officeNumber ) ;
        })
    
    });

});