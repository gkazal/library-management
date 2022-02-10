const Department = require("../../models/Department");

// show department in frontend table..
const index = async (req, res) => {
  try {
    const departments = await Department.findAll();

    return res.status(200).json({
      status: "success",
      data: departments,
    });
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

// create department from frontend...
const create = async (req, res) => {
  try {
    const department = await Department.create({
      name: req.body.name,
    });

    console.log(department);

    if (department) {
      return res.status(200).json({
        status: "success",
        message: "Department added successfully",
        data: department,
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
