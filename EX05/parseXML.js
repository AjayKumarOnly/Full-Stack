const fs = require("fs");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();


fs.readFile("students.xml", (err, data) => {
    if (err) throw err;

    parser.parseString(data, (err, result) => {
        if (err) throw err;

        console.log(result.students.student);
    });
});
