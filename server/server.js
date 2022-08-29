require('dotenv').config();
const express = require('express');
const fs = require('fs');
let cors = require("cors");
let app = express();
const bodyParser = require('body-parser')
const path = require('path');
const BUILD_PATH = '/Users/victormercado/LocalCode/websiteStuff/v-dash/client/build/';
const PORT = process.env.PORT || 3001;
const db = require('./queries');

let json = 
[
    {
        name: "Khaleesi",
        miles: 54000,
        lastChangedOil: 50000,
        oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
        oilType: "5W-30",
        oilFilter: "Farm FL-400s",
        oilAmount: "6 quarts",
        distanceUnits: "miles",
        licensePlate: "8AGW004",
        vin: "1FADP3L9XHL314568",
        changedTires: "45000"
    },
    {
        name: "bill",
        miles: 54000,
        lastChangedOil: 50000,
        oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
        oilType: "5W-30",
        oilFilter: "Farm FL-400s",
        oilAmount: "6 quarts",
        distanceUnits: "miles",
        licensePlate: "8AGW004",
        vin: "1FADP3L9XHL314568",
        changedTires: "45000"
    },
    {
        name: "Khjilleesi",
        miles: 54000,
        lastChangedOil: 50000,
        oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
        oilType: "5W-30",
        oilFilter: "Farm FL-400s",
        oilAmount: "6 quarts",
        distanceUnits: "miles",
        licensePlate: "8AGW004",
        vin: "1FADP3L9XHL314568",
        changedTires: "45000"
    },
    {
        name: "Dude",
        miles: 54000,
        lastChangedOil: 50000,
        oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
        oilType: "5W-30",
        oilFilter: "Farm FL-400s",
        oilAmount: "6 quarts",
        distanceUnits: "miles",
        licensePlate: "8AGW004",
        vin: "1FADP3L9XHL314568",
        changedTires: "45000"
    },
    {
        name: "Ganon",
        miles: 54000,
        lastChangedOil: 50000,
        oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
        oilType: "5W-30",
        oilFilter: "Farm FL-400s",
        oilAmount: "6 quarts",
        distanceUnits: "miles",
        licensePlate: "8AGW004",
        vin: "1FADP3L9XHL314568",
        changedTires: "45000"
    }
]
let arr = [1,2,3,4,5,6,7,8,9];
function getTimeNow() {
    let date = new Date().toLocaleString();
    return date;
}
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (req, res)=> {
    res.sendFile(BUILD_PATH + 'index.html');
});
app.get('/api', (req, res) => {
    let date = getTimeNow();
    
    console.log("API GET request - " + date);
    console.log(Date.now());
    
    setTimeout(() => {
        res.send(JSON.stringify(json));    
    }, 5000);
});
app.get('/users', db.getUsers);

app.post('/users', db.createUser);

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
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
