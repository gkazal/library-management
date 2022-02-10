const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// create batch  in table...
const Batch = sequelize.define("batches", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Batch;
