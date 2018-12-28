const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')
const path = require('path')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
      
    fs.writeFileSync(path.join(__dirname, 'json', 'customer.json'), JSON.stringify(jsonObj))  

})
 
// Async / await usage
const jsonArray=csv().fromFile(csvFilePath);

