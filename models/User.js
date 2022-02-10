const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// create student name in table..
const User = sequelize.define("users", {
  student_access_id: {
    type: DataTypes.INTEGER,
    unique: true,
  },

  name: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
  batch_id: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
