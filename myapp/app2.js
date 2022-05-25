const Path = require('path');
const express = require('express');
const {
    resolve
} = require('path');
const app = express()
const port = 3000
const axios = require('axios').default;
const fs = require('fs');
for (let i = 0; i < 605; i++) {
    axios({
            method: 'get',
            url: 'https://http.cat/' + i + '.jpg',
            responseType: 'stream'
        }).then(function (response) {
            if (i < 199) {
                response.data.pipe(fs.createWriteStream('1/' + i + '.jpg'));
            } else if (i < 299) {
                response.data.pipe(fs.createWriteStream('2/' + i + '.jpg'));
            } else if (i < 399) {
                response.data.pipe(fs.createWriteStream('3/' + i + '.jpg'));
            } else if (i < 499) {
                response.data.pipe(fs.createWriteStream('4/' + i + '.jpg'));
            } else if (i< 599) {
                response.data.pipe(fs.createWriteStream('5/' + i + '.jpg'));
            }
            i++;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    
}

app.get('/', (req, res) => {

    fs.readFile(i + '.jpg', function (error, data) {
        if (error) {
            console.error(error)
            console.log("ERRORrr")
            return
        }
        res.send();

    })
})