
const http = require('http');
const server = http.createServer((req,res)=>{
    /*if(req.url === '/api/courses'){
        res.write('Hello World');
        res.end();
    }*/
    if(req.url === '/api/courses'){
        res.write(JSON.stringify(["Node","Angular","MongoDB","Express"]));
        res.end();
    }
});


/*server.on('connection',(Socket) =>{
    console.log('New connection...');

});*/
server.listen(3000);
console.log('Listening on port 3000...');
