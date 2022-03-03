const fs = require("fs");
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Home</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
    } else if (request.url == "/images/1") {
        let content = fs.readFileSync("1.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);


    } else if (request.url == "/images/2") {
        let content = fs.readFileSync("2.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);


    } else if (request.url == "/images/3") {
        let content = fs.readFileSync("3.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);


    } else if (request.url == "/images/4") {
        let content = fs.readFileSync("4.jpeg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);


    } else if (request.url == "/images/5") {
        let content = fs.readFileSync("5.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);

    } else if (request.url == "/images/6") {
        let content = fs.readFileSync("6.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);

    } else if (request.url == "/images/7") {
        let content = fs.readFileSync("7.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);

    } else {
        response.write("<h2>Not found</h2>");
    }
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log(request.headers);
    let user = JSON.stringify(request.headers);

    fs.appendFileSync("log.txt", request.url);
    fs.appendFileSync("log.txt", request.method);
    fs.appendFileSync("log.txt", user);
};
http.createServer(requestHandler).listen(3000);