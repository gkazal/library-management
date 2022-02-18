const { serverError, itemNotFound } = require("../../helpers/helpers");
const Batch = require("../../models/Batch");
const Borrower = require("../../models/Borrower");
const Department = require("../../models/Department");
const User = require("../../models/User");
const Book = require("../../models/Book");
const Author = require("../../models/Author");

const studentSummary = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const activeUsers = await User.count({
      where: {
        status: "active",
      },
    });
    const inActiveUsers = await User.count({
      where: {
        status: "inactive",
      },
    });
    const pendingUsers = await User.count({
      where: {
        status: "pending",
      },
    });

    return res.status(200).json({
      status: "success",
      data: [
        { title: "Total Student", count: totalUsers },
        { title: "Active Student", count: activeUsers },
        { title: "Inactive Student", count: inActiveUsers },
        { title: "Activation Request", count: pendingUsers },
      ],
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await User.findAll({
      where: {
        role: "student",
      },
      // ekane student kon department and batch ar seta relation korar jonno..
      // relation a data show koranor dorkar hole..include use korbo..
      // student ar modde department and batch show korano hobe..
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
        { model: Borrower, attributes: [] },
      ],
    });

    return res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getActiveStudents = async (req, res) => {
  try {
    const students = await User.findAll({
      where: {
        role: "student",
        status: "active",
      },
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
      ],
    });

    return res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const getInActiveStudents = async (req, res) => {
  try {
    const students = await User.findAll({
      where: {
        role: "student",
        status: "inactive",
      },
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
      ],
    });

    return res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const getPendingStudents = async (req, res) => {
  try {
    const students = await User.findAll({
      where: {
        role: "student",
        status: "pending",
      },
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
      ],
    });

    return res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const store = async (req, res) => {
  try {
    const student = await User.create({
      student_access_id: req.body.student_access_id,
      name: req.body.name,
      department_id: req.body.department_id,
      batch_id: req.body.batch_id,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      avatar: req.body.avatar,
      role: req.body.role || "student",
      status: "inctive",
    });

    if (student) {
      return res.status(201).json({
        status: "success",
        message: "Student added successfully",
        data: student,
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await User.findOne({
      where: {
        // student access id dia single student show hobe...
        student_access_id: req.params.studentAccessId,
      },
      // ekane student kon department and batch and book borrowe ace kina seta table a show korbe..
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
        {
          // student detials a borrow history te borrow info and book info and book info ar modde author name dekhano lagbe..
          model: Borrower,
          include: {
            model: Book,
            // include: {
            //   model: Author,
            // },
          },
        },
      ],
    });

    if (student) {
      return res.status(200).json({
        status: "success",
        data: student,
      });
    } else {
      itemNotFound(res, 404, "Student not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

//  student info update  ...
const studentStatusChange = async (req, res) => {
  try {
    const student = await User.findOne({
      where: {
        // student student id dia data show hobe..and change hobe..
        student_access_id: req.params.studentAccessId,
      },
    });

    if (student) {
      // j item gula change hobe seigla ekne boshbe..
      //update korar somoi text khali thakleo problem hobe na..
      let status = req.body.status || student.status;
      let phone = req.body.phone || student.phone;
      let password = req.body.password || student.password;

      student.update(
        { status, phone, password },
        {
          where: {
            student_access_id: req.params.student_access_id,
          },
        }
      );

      return res.status(200).json({
        status: "success",
        data: student,
      });
    } else {
      itemNotFound(res, 404, "Student not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroyStudent = async (req, res) => {
  try {
    // student ace kina id dia check korlam..
    const student = await User.findOne({
      where: {
        student_access_id: req.params.studentAccessId,
      },
    });

    if (student) {
      // ekane student delete korar age status active ace kina check korbo..
      let status = req.body.status;

      // jodi status pai then sudent access id dia id delete hobe..
      await student.destroy(
        // { status },
        {
          where: {
            student_access_id: req.params.studentAccessId,
          },
        }
      );

      return res.status(200).json({
        status: "success",
        message: "Department deleted successfully",
        data: student,
      });
    } else {
      itemNotFound(res, 404, "Student not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = {
  studentSummary,
  getAllStudents,
  getActiveStudents,
  getInActiveStudents,
  getPendingStudents,
  store,
  getStudent,
  studentStatusChange,
  destroyStudent,
};
