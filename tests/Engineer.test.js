const Engineer = require('../lib/Engineer');

describe( "Engineer", () => {
    
    describe( "getGithub", () => {
        
        it( 'Can set Github via constructor arguments', () => {
            const github  = 'sam@github.com';
            const engineer = new Engineer( github );
            expect( engineer.name ).toBe( github ) ;
        })
    
    });

});