require("dotenv").config();
const sequelize = require('../config/connection');
const { Profile, Post } = require('../models');

const profileData = require("./profileData.json");
const postData = require('./postData.json');

//syncs with database and drops if exists
const database = async () => {
    await sequelize.sync({ force: true})

    //creates multiple instances of a Profile and saves in db
    const profile = await Profile.bulkCreate(profileData, {
        individualHooks: true,
        returning: true,
    });
    
}

database();