const os = require('os');
var freememory=os.freemem();
var totalmemory=os.totalmem();
console.log(`Total memory : ${totalmemory}`);
console.log(`free memory : ${freememory}`);