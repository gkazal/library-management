const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// create department name in table...
const Department = sequelize.define("departments", {
  name: DataTypes.STRING,
});

module.exports = Department;
