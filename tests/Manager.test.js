const Manager = require('../lib/Manager');

describe( "Manager", () => {
    
    describe( "getOfficeNumber", () => {
        
        it( 'Can set office number via constructor arguments', () => {
            const officeNumber  = 101;
            const manager = new Manager( officeNumber );
            expect( manager.officeNumber ).toBe( officeNumber ) ;
        })
    
    });

});