const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    urle1=request.url;
    urle2=urle1.split('/').reverse()[0];
    console.log(urle2);
    if (request.url === "/todos/"+urle2) {
        response.write(kirpich);

    } else {
        response.write("<h2>Not found</h2>");
    }
    return [urle2];
    //response.end();
};
http.createServer(requestHandler).listen(3000);
console.log(urle2);
let promise = new Promise(function (resolve, reject) {
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
            kirpich = todos[0];
            console.log(kirpich);
            console.log("данные получены!");
        })
    },
    error => {
        console.log(error);
    }
)