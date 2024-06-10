const Sequelize = require ('sequelize');
let sequelize;
if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
  } else {
    sequelize = new Sequelize(
      "users",
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
      },
    );
  }

  module.exports= sequelize;