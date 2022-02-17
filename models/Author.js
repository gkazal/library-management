const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Book = require("./Book");

const Author = sequelize.define("authors", {
  name: {
    type: DataTypes.STRING,
  },
});

// Author.hasMany(Book, { foreignKey: "author_name" });
// Book.belongsTo(Author, { foreignKey: "author_name" });

module.exports = Author;
