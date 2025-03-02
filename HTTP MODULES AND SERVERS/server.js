// create a simple HTTP server that responds with "Hello world"
// import the http module. //
// create the server using the http.createserver().//
// respond with "Hello world for every request."

const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World');
});
server.listen(8000, () => {
    console.log('Server running on port 8000');
});
