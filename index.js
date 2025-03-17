import  http from 'http';
const port = 8000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-type','text/html');
    res.writeHead(500,{'Content-type':'application/json'});
    res.end(JSON.stringify({"message":"Server Error"}));
    res.write('<h2>hello world<h2>');
    res.end();
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});