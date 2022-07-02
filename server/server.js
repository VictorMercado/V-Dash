require('dotenv').config();
const express = require('express');
const fs = require('fs');
let app = express();
const path = require('path');
const BUILD_PATH = '/Users/victormercado/LocalCode/websiteStuff/v-dash/client/build/';
const PORT = process.env.PORT || 3001;

app.get('/', (req, res)=> {
    res.sendFile(BUILD_PATH + 'index.html');
});
app.get('/static/css/:id', (req, res)=> {
    res.sendFile(BUILD_PATH + `/static/css/${req.params.id}`);
});
app.get('/static/js/:id', (req, res)=> {
    res.sendFile(BUILD_PATH + `/static/js/${req.params.id}`);
});
app.get('/:id', (req, res)=> {
    res.sendFile(BUILD_PATH + `${req.params.id}`);
});
app.listen(PORT, ()=> {
    console.log(`App is listening on port: ${PORT}`);
});