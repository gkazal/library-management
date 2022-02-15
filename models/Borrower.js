const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Borrower = sequelize.define("borrower", {
  student_id: {
    type: DataTypes.INTEGER,
  },
  borrower_id: {
    type: DataTypes.INTEGER,
  },
  book_id: {
    type: DataTypes.INTEGER,
  },
  borrower_date: {
    type: DataTypes.DATE,
  },
  back_date: {
    type: DataTypes.DATE,
  },
});

module.exports = Borrower;
