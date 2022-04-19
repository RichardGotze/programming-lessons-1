const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/todos/", digit) {
        response.write(kirpich);

    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
};
http.createServer(requestHandler).listen(3000);
let promise = new Promise(function (resolve, reject) {
    function download() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
                response => {
                    const a = response.data;
                    console.log(response);
                    let json = JSON.stringify(a);
                    console.log(typeof json); // мы получили строку!
                    console.log(json);
                    fs.writeFile('todos1.json', json, function (err) {
                        if (err) return console.log(err);
                        console.log('json file has created');
                        resolve('json file has created');

                    });
                }
            )
            .catch(function (error) {
                reject(error);
            })
    }

    download();
})
promise.then(
    result => {
        fs.readFile('todos1.json', 'utf8', function (error, data) {
            if (error) {
                console.error(error)
                console.log("ERROR")
                return
            }
            const todos = JSON.parse(data);
            console.log("upload has done");
            digit=1.
            kirpich = todos[digit];
            console.log(kirpich);
            console.log("данные получены");
        })
    },
    error => {
        console.log(error);
    }
)