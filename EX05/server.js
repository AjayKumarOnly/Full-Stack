const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World! Welcome to Node.js Web Server By Ajay Kumar [2024503701]");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
