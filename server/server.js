const express = require('express');
const fs = require('fs');
let app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res)=> {
    res.send("Hello my dude");
});

app.listen(PORT, ()=> {
    console.log(`App is listening on port: ${PORT}`);
});