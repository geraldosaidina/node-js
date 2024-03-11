const express = require('express');

// express app
const app = express();

//listening for requests
app.listen(3000);

app.get('/', (req, res) => {

    res.sendFile('./html-pages/index.html', {root: __dirname});
    

});

app.get('/about', (req, res) => {

    res.sendFile('./html-pages/about.html', {root: __dirname});
    console.log(res.statusCode);    

});


app.use((req, res) => {
    res.sendFile('./html-pages/error.html', {root: __dirname});
});