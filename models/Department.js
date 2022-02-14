const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Batch = require("./Batch");
const User = require("./User");

// create department name in table...
const Department = sequelize.define("departments", {
  name: {
    type: DataTypes.STRING,
  },
});

// Relation With Batch & Department
// departments ar onek batch thakte pare..but batch sudhu departments ar upor depend korbe..
Department.hasMany(Batch, { foreignKey: "department_id" });
Batch.belongsTo(Department, { foreignKey: "department_id" });

// department ar onek user/student thakte pare..
Department.hasMany(User, { foreignKey: "department_id" });
User.belongsTo(Department, { foreignKey: "department_id" });

module.exports = Department;
