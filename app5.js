const EventEmitter = require('events');

const Logger=require('./logger');
const logger = new Logger();

logger.on('messageLogged',(args)=>{
    console.log('listener called',args);

});
logger.log('message');