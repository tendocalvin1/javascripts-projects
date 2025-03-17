import http from 'http';
const PORT = 5000;
const server = http.createServer((res,req) =>{
    res.write(200, {'content-type':'text/html'});
    res.end('<h2>Hello World! Welcome to my server.</h2>');
});

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});