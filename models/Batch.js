const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./User");

// create batch  in table...
const Batch = sequelize.define("batches", {
  name: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
});

Batch.hasMany(User, { foreignKey: "batch_id" });
User.belongsTo(Batch, { foreignKey: "batch_id" });

module.exports = Batch;
