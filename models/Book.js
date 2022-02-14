const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// create book name in table..
const Book = sequelize.define("books", {
  accession_no: {
    type: DataTypes.STRING,
    unique: true,
  },
  cl_accession_no: {
    type: DataTypes.STRING,
  },
  isbn_no: {
    type: DataTypes.STRING,
  },
  author_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  edition: {
    type: DataTypes.STRING,
  },
  self_no: {
    type: DataTypes.INTEGER,
  },
  row_no: {
    type: DataTypes.INTEGER,
  },
  column_no: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Book;
