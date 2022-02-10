const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
