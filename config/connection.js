require('dotenv').config();
const Sequelize = require ('sequelize');
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL)
}else {
  sequelize = new Sequelize(process.env.POSTGRESSURI, {
  dialect: "postgres",
  port: 5432
})
}


  module.exports= sequelize;