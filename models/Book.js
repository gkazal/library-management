const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Borrower = require("./Borrower");

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

Book.hasMany(Borrower, { foreignKey: "book_id" });
Borrower.belongsTo(Book, { foreignKey: "book_id" });

module.exports = Book;
