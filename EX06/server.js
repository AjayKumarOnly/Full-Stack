const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./data.json', 'utf8', (err, jsonString) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Error reading data.json file...");
            return;
        }
        try {
            const data = JSON.parse(jsonString);
           
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data, null, 2));
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Error parsing JSON data.");
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});