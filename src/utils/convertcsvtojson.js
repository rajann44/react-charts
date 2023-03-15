const csvToJson = require('csvtojson');
const fs = require('fs')
 
csvToJson().fromFile('test_data_5.csv').then(jsonObj => {
    
    console.log(jsonObj);
 
    fs.writeFileSync("result.json",JSON.stringify(jsonObj))
});