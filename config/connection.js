const Sequelize = require ('sequelize');
let sequelize;

sequelize = new Sequelize(process.env.POSTGRESSURI, {
  dialect: "postgres"
})

  module.exports= sequelize;