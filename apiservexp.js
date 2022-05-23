const fs = require('fs');
const axios = require('axios');
const Path = require('path');
let b = new Promise(function (resolve, reject) {
    function download() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
                response => {
                    const a = response.data;
                    console.log(response);
                    let json = JSON.stringify(a);
                    console.log(typeof json);
                    console.log(json);
                    fs.writeFile('todos1.json', json, function (err) {
                        if (err) return console.log(err);
                        console.log('json file has created');

                    });
                    resolve(download());
                }
            )
            .catch(function (error) {
                console.log(error);
            })

b.then(
    result => {
        fs.readFile('todos1.json', 'utf8', function(error, data){
            if (error) {
                console.error(error)
                console.log("ERROR")
                return
            }
            const todos = JSON.parse(data);
            console.log("upload has done");
        })
    },
    error => {
        console.log(error);
    }
)