const Fs = require('fs'); 
const Path = require('path');  
const Axios = require('axios');
const http = require("http");
var express = require('express');
const { path } = require('express/lib/application');
var app = express();
async function downloadFile () {  
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const path = Path.resolve(__dirname,'axios' , 'code.json')
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'


  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)  
  })

}

downloadFile()  

async function loadCollection(url, callback) {
    fs.readFile('code.json', 'utf8', function(error, data) {
    if (error) {
    console.log(error);
} else {
    return callback(JSON.parse(data));
    }
    });
    }


app.get(/a/, function (req, res) {
    res.send('success');
  });

http.createServer(app).listen(3000);