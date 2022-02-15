const { serverError, itemNotFound } = require("../../helpers/helpers");
const Book = require("../../models/Book");
const Borrower = require("../../models/Borrower");
const User = require("../../models/User");
const Author = require("../../models/Author");
const Department = require("../../models/Department");

const store = async (req, res) => {
  try {
    const borrower = await Borrower.create({
      student_id: req.body.student_id,
      borrower_id: req.body.borrower_id,
      book_id: req.body.book_id,
      borrower_date: req.body.borrower_date,
      back_date: req.body.back_date,
    });
    if (borrower) {
      return res.status(201).json({
        status: "success",
        message: "Borrower added successfully",
        data: borrower,
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const getAllBorrowers = async (req, res) => {
  try {
    const borrower = await Borrower.findAll({
      include: [
        {
          model: User,
          as: "student",
          include: [
            {
              model: Department,
            },
          ],
        },
      ],
    });
    return res.status(200).json({
      status: "success",
      data: borrower,
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getSingleBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.findOne({
      where: {
        student_id: req.params.student_id,
      },
    });
    if (borrower) {
      return res.status(200).json({
        status: "success",
        data: borrower,
      });
    } else {
      itemNotFound(res, 404, "Borrower not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const update = async (req, res) => {
  try {
    const borrower = await Borrower.findOne({
      where: {
        student_id: req.params.student_id,
      },
    });

    if (borrower) {
      let borrower_id = req.body.borrower_id || borrower.borrower_id;
      let book_id = req.body.book_id || borrower.book_id;
      let borrower_date = req.body.borrower_date || borrower.borrower_date;
      let back_date = req.body.back_date || borrower.back_date;

      await borrower.update(
        {
          borrower_id,
          book_id,
          borrower_date,
          back_date,
        },
        {
          where: {
            book_id: req.params.book_id,
            borrower_date: req.params.borrower_date,
            back_date: req.params.back_date,
          },
        }
      );

      return res.status(200).json({
        status: "success",
        message: "borrower updated successfully",
        data: borrower,
      });
    } else {
      itemNotFound(res, 404, "Borrower not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroyBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.findOne({
      where: {
        student_id: req.params.student_id,
      },
    });
    if (borrower) {
      await borrower.destroy({
        where: {
          student_id: req.params.student_id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Borrower deleted successfully",
        data: borrower,
      });
    } else {
      itemNotFound(res, 404, "Borrower not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = {
  store,
  getAllBorrowers,
  getSingleBorrower,
  update,
  destroyBorrower,
};
