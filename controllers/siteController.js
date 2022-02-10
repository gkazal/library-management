const { serverError } = require("../helpers/helpers");
const Batch = require("../models/Batch");
const Department = require("../models/Department");

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({
      attributes: ["id", "name"],
    });

    return res.status(200).json({
      status: "success",
      data: departments,
    });
  } catch (e) {
    serverError(res, e);
  }
};

const getAllBatchesByDepartmentId = async (req, res) => {
  try {
    const batches = await Batch.findAll({
      attributes: ["id", "name"],
      where: {
        department_id: req.body.department_id,
      },
    });

    return res.status(200).json({
      status: "success",
      data: batches,
    });
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = { getAllDepartments, getAllBatchesByDepartmentId };
