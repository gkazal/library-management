const { serverError, itemNotFound } = require("../../helpers/helpers");
const Author = require("../../models/Author");
const Book = require("../../models/Book");

const store = async (req, res) => {
  try {
    const book = await Book.create({
      accession_no: req.body.accession_no,
      cl_accession_no: req.body.cl_accession_no,
      isbn_no: req.body.isbn_no,
      author_name: req.body.author_name,
      name: req.body.name,
      edition: req.body.edition,
      self_no: req.body.self_no,
      row_no: req.body.row_no,
      column_no: req.body.column_no,
    });

    if (book) {
      return res.status(201).json({
        status: "success",
        message: "Book added successfully",
        data: book,
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      // book ar modde all book info and author ar name show hobe..
      // include: [{ model: Author, attributes: ["name"] }],
    });
    return res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getAllBooksOnlyNames = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes: ["id", "name"],
    });
    return res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        accession_no: req.params.accession_no,
      },
    });
    if (book) {
      return res.status(200).json({
        status: "success",
        data: book,
      });
    } else {
      itemNotFound(res, 404, "Book not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const bookStatusChange = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        accession_no: req.params.accession_no,
      },
    });
    if (book) {
      let self_no = req.body.self_no || book.self_no;
      let row_no = req.body.row_no || book.row_no;
      let column_no = req.body.column_no || book.column_no;

      await book.update(
        { self_no, row_no, column_no },
        {
          where: {
            accession_no: req.params.accession_no,
          },
        }
      );
      return res.status(200).json({
        status: "success",
        data: book,
      });
    } else {
      itemNotFound(res, 404, "Book not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroyBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        accession_no: req.params.accession_no,
      },
    });
    if (book) {
      await book.destroy({
        where: {
          accession_no: req.params.accession_no,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Book deleted successfully",
        data: book,
      });
    } else {
      itemNotFound(res, 404, "Book not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = {
  store,
  getAllBooks,
  getSingleBook,
  destroyBook,
  bookStatusChange,
  getAllBooksOnlyNames,
};
