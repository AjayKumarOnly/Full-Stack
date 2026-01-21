const fs = require('fs');

fs.readFile('./data.json','utf8',(err,jsonString) => {
    if(err){
        console.log("There is an error while reading the File...",err);
        return;
    }
    try{
        const data = JSON.parse(jsonString);
        console.log(data);
    }catch(err){
        console.log("Error while Parsing of data from JSON...",err);
    }
});

