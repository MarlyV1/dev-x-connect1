require("dotenv").config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require ('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));


sequelize.sync()
 .then (() => {app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})});