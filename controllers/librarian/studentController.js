const Student = require("../../models/Student");

const index = async (req, res) => {
  try {
    const students = await Student.findAll();

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

const create = async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name,
      student_access_id: req.body.student_access_id,
      department_id: req.body.department_id,
      batch: req.body.batch,
    });

    console.log(student);

    if (student) {
      return res.status(200).json({
        status: "success",
        message: "Department added successfully",
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
module.exports = {
  index,
  create,
};
