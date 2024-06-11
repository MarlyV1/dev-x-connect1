const Sequelize = require ('sequelize');
let sequelize;

sequelize = new Sequelize(process.env.POSTGRESSURI);

  module.exports= sequelize;