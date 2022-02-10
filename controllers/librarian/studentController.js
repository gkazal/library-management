const { serverError, itemNotFound } = require("../../helpers/helpers");
const Batch = require("../../models/Batch");
const Department = require("../../models/Department");
const User = require("../../models/User");

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
      status: "active",
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
        id: req.params.id,
      },
      include: [
        { model: Department, attributes: ["name"] },
        { model: Batch, attributes: ["name"] },
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

const studentStatusChange = async (req, res) => {
  try {
    const student = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (student) {
      let status = req.body.status;

      student.update(
        { status },
        {
          where: {
            id: req.params.id,
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

module.exports = {
  studentSummary,
  getAllStudents,
  getActiveStudents,
  getInActiveStudents,
  getPendingStudents,
  store,
  getStudent,
  studentStatusChange,
};
