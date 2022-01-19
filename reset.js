const fs = require('fs');

if(fs.existsSync('./dist/team.html')) {
    fs.unlinkSync('./dist/team.html');
    console.log('Dist directory has been reset')
}