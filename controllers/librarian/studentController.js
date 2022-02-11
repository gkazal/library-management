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
        // student access id dia single student show hobe...
        student_access_id: req.params.studentAccessId,
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

// ekane student ar info gula sob updata kora jabe...
const studentStatusChange = async (req, res) => {
  try {
    const student = await User.findOne({
      where: {
        // student student id dia data show hobe..and change hobe..
        student_access_id: req.params.studentAccessId,
      },
    });

    if (student) {
      let status = req.body.status || student.status;
      // let email = req.body.email || student.email;
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
    const student = await User.findOne({
      where: {
        // sudent access id dia id delete hobe..
        student_access_id: req.params.studentAccessId,
      },
    });

    if (student) {
      let status = req.body.status;

      student.destroy(
        { status },
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
