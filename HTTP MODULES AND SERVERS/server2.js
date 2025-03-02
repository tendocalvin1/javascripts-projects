// HTTP server with different routes
// concept: Handle different URL paths(/,/about,/contact).
// This is a simple example of a server that responds to GET requests on the root URL
// "/about" URL, and the "/contact" URL.
const http = require('http');
const server = http.createServer((req, res) => {
    // Handle the welcome url
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the Home page');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About us page.');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact us page.');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000.');
});