const Event = require('events');
const myEvent = new Event();



myEvent.addListener('request', ()=>{
    console.log('request from other side');
    //res.sendFile(html);
})
myEvent.on('end',()=>{
    console.log('end')
});
myEvent.on('end',()=>{
    console.log('end2')
})
myEvent.once('special', ()=>{
    console.log('special');
});


myEvent.emit('request');
myEvent.emit('end');
myEvent.emit('end');
myEvent.removeAllListeners('end')
myEvent.emit('end');
myEvent.emit('end');
myEvent.emit('end');
myEvent.emit('special');
myEvent.emit('special');
myEvent.emit('special');


