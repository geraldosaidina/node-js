const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    // res.write('<p>hello, niggas!</p>')

    let path = './weather-app/';

    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            res.statusCode = 404;
            path += 'error.html';
            res.end();
            break;

    }

    fs.readFile('./weather-app/index.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    fs.readFile('./weather-app/about.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    fs.readFile('./weather-app/error.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    // res.end();
});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests');
});