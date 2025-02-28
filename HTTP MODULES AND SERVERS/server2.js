// HTTP server with different routes
// concept: Handle different URL paths(/,/about,/contact).
// This is a simple example of a server that responds to GET requests on the root URL
// "/about" URL, and the "/contact" URL.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(202,{'Content-Type':'text/html'})
});
// Handle the welcome url
if (req.url === '/'){
    res.end('Welcome to the Home page')
} else if (req.url === '/about'){
    res.end('About us page.')
} else if (req.url === '/contact'){
    res.end('Contact us page.')
}else {
    res.writeHead(404);
    res.end('404 Not found');
};

server.listen(8000, () =>{
   console.log('server is running on port 8000.') 
})
