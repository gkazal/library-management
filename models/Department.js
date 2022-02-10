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
Department.hasMany(Batch, { foreignKey: "department_id" });
Batch.belongsTo(Department, { foreignKey: "department_id" });

Department.hasMany(User, { foreignKey: "department_id" });
User.belongsTo(Department, { foreignKey: "department_id" });

module.exports = Department;
