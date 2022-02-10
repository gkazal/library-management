const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// create student name in table..
const Student = sequelize.define("students", {
  student_access_id: {
    type: DataTypes.INTEGER,
    unique: true,
  },

  name: DataTypes.STRING,
  department_id: DataTypes.INTEGER,
  batch: DataTypes.STRING,
});

module.exports = Student;
