const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello, welcome to the page!')
});

server.listen(3000, () =>{
    console.log('server is running on port 3000')
});
