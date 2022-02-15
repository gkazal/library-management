const { sequelize } = require("../config/db");
const Batch = require("../models/Batch");
const Department = require("../models/Department");
const User = require("../models/User");
const Book = require("../models/Book");
const Author = require("../models/Author");
const Borrower = require("../models/Borrower");

const router = require("express").Router();

// for create table only...
// all table data all drop hoye jabe...

router.get("/db-migrate", async (req, res) => {
  // await User.drop();
  // await Batch.drop();
  // await Department.drop();
  // await Book.drop();
  // await Author.drop();
  await Borrower.drop();

  sequelize.sync();

  console.log("Table migrate to database");
  return res.json({
    status: "success",
    message: "Table migrate to database",
  });
});

module.exports = router;
