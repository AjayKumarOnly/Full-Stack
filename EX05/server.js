const http = require("http");
const fs = require("fs");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();

function studentsToHTMLTable(students) {
    let table = "<table border='1' cellspacing='0' cellpadding='5'>";
    table += "<tr><th>Name</th><th>Age</th><th>Grade</th></tr>";

    students.forEach(student => {
        table += `<tr>
            <td>${student.name[0]}</td>
            <td>${student.age[0]}</td>
            <td>${student.grade[0]}</td>
        </tr>`;
    });

    table += "</table>";
    return table;
}


const server = http.createServer((req, res) => {
    if (req.url === "/students") {
        fs.readFile("students.xml", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading XML file");
                return;
            }

            parser.parseString(data, (err, result) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error parsing XML");
                    return;
                }

                const students = result.students.student;
                const htmlTable = studentsToHTMLTable(students);

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(`<h1>Student List</h1>${htmlTable}`);
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});


server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/students");
});
