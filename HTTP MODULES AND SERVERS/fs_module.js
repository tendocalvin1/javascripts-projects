// concept: serve HTML files instead of plain text responses.
// steps:
// 1. Use the fs module to read and serve HTML files.
// 2. Serve different pages based on the URL.
// 3. Use the http module to create an HTTP server.
// 4. Use the http.createServer() method to create a server.
// 5. Use the server.on() method to handle requests.
// 6. Use the server.listen() method to start the server.
// 7. Use the server.on() method to handle requests and serve HTML files.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    let filepath = 'index.html';
    if (req.url === '/about'){
        filepath = 'about.html';
    } else if (req.url === '/contact'){
        filepath = 'contact.html';
    }
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h2>Not Found</h2>');
        }
        else{
        res.writeHead(200, {'Content-Type':'text.html'});
        res.end(data);
        }
});
});

server.listen(3000, () =>{
    console.log('Server is running on port 3000.')
});