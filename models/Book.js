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
  author_name: {
    type: DataTypes.STRING,
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
  total_book: {
    type: DataTypes.INTEGER,
  },

  availability: {
    type: DataTypes.VIRTUAL,
    // get() {
    //   let totalBorrowCount = this.Borrower.count();

    //   return this.total_book - totalBorrowCount >= 1
    //     ? "Available"
    //     : "Not Available";
    // },
  },
});

Book.hasMany(Borrower, { foreignKey: "book_id" });
Borrower.belongsTo(Book, { foreignKey: "book_id" });

module.exports = Book;
