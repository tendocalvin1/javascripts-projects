import http from 'http'
const PORT = 3000;

const server = http.createServer((req, res) => {
   // res.setHeader('Content-Type','text/html');
     //res.statusCode = 404;
    // res.write("Hello world!");  // this line of code sends text to the browser.
    res.writeHead(200, {'Content-Type':'text/html'});
    //res.end(JSON.stringify({message:'Server Error'}));
    res.end("<h2>Hello world!</h2>"); // this line of code sends text to the browser as well.
});

server.listen(PORT, () =>{
console.log(`Server is running on port ${PORT}`);
});
