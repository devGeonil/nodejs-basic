const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("welcome you")
});

server.listen(8000, ()=>{
    console.log('server start at 8080')
})
