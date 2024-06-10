require("dotenv").config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require ('./routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Fallback route for when a user attempts to visit a nonexistent route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
sequelize.sync()
 .then (() => {app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})});