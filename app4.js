const filesystem = require('fs');

//var files = filesystem.readdirSync('./');
//console.log(files);

filesystem.readdir('./',function(err,files){
    if(err)console.log('error',err);
    else console.log('Result',files);

});