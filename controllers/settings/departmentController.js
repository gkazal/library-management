const { serverError, itemNotFound } = require("../../helpers/helpers");
const Batch = require("../../models/Batch");
const Department = require("../../models/Department");

// show department in frontend table..
const index = async (req, res) => {
  try {
    const departments = await Department.findAll({
      // ekane department table a id,name and batch show korbe..
      attributes: ["id", "name"],
      include: [{ model: Batch, attributes: ["name"] }],
    });

    return res.status(200).json({
      status: "success",
      data: departments,
    });
  } catch (e) {
    serverError(res, e);
  }
};

// create department...
const store = async (req, res) => {
  try {
    const department = await Department.create({
      name: req.body.name,
    });

    if (department) {
      return res.status(201).json({
        status: "success",
        message: "Department added successfully",
        data: department,
      });
    }
  } catch (e) {
    serverError(res, e);
  }
};

const show = async (req, res) => {
  try {
    const department = await Department.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "name"],
      include: [{ model: Batch, attributes: ["name"] }],
    });

    if (department) {
      return res.status(200).json({
        status: "success",
        data: department,
      });
    } else {
      itemNotFound(res, 404, "Department not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const update = async (req, res) => {
  try {
    const department = await Department.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (department) {
      let name = req.body.name || department.name;

      await department.update(
        {
          name,
        },
        { where: { id: req.params.id } }
      );

      return res.status(200).json({
        status: "success",
        message: "Department updated successfully",
        data: department,
      });
    } else {
      itemNotFound(res, 404, "Department not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroy = async (req, res) => {
  try {
    await Department.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Department deleted successfully",
    });
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};
