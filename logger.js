const EventEmitter = require('events');

var url ="http://mylogger.io/log";
class Logger extends EventEmitter{
    
    log(message){
        console.log(message)

    this.emit('messageLoaded',{Id:1,url:'http://logger.io/log'});
}
}
module.exports = Logger;