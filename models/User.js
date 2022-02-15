const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Borrower = require("./Borrower");

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

User.hasMany(Borrower, { foreignKey: "student_id" });
Borrower.belongsTo(User, { foreignKey: "student_id", as: "student" });

module.exports = User;
