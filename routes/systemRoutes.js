const { sequelize } = require("../config/db");
const Batch = require("../models/Batch");
const Department = require("../models/Department");
const User = require("../models/User");

const router = require("express").Router();

// for create table only...
router.get("/db-migrate", async (req, res) => {
  // user bathc and department table data all drop hoye jabe...
  await User.drop();
  await Batch.drop();
  await Department.drop();
  sequelize.sync();

  console.log("Table migrate to database");
  return res.json({
    status: "success",
    message: "Table migrate to database",
  });
});

module.exports = router;
