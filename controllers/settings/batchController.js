const { serverError, itemNotFound } = require("../../helpers/helpers");
const Batch = require("../../models/Batch");
const Department = require("../../models/Department");

// show Batch in frontend table..
const index = async (req, res) => {
  try {
    const Batches = await Batch.findAll({
      attributes: ["id", "name"],
      // fetch Department Relation Data
      include: [{ model: Department, attributes: ["name"] }],
    });

    return res.status(200).json({
      status: "success",
      data: Batches,
    });
  } catch (e) {
    serverError(res, e);
  }
};

// create Batch from frontend...
const store = async (req, res) => {
  try {
    const batch = await Batch.create({
      name: req.body.name,
      department_id: req.body.department_id,
    });

    if (batch) {
      return res.status(201).json({
        status: "success",
        message: "Batch added successfully",
        data: batch,
      });
    }
  } catch (e) {
    serverError(res, e);
  }
};

const show = async (req, res) => {
  try {
    const batch = await Batch.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "name"],
      // fetch Department Relation Data
      include: [{ model: Department, attributes: ["name"] }],
    });

    if (batch) {
      return res.status(200).json({
        status: "success",
        data: batch,
      });
    } else {
      itemNotFound(res, 404, "Batch not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const update = async (req, res) => {
  try {
    const batch = await Batch.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (batch) {
      let name = req.body.name || batch.name;
      let department_id = req.body.department_id || batch.department_id;

      batch.update(
        {
          name,
          department_id,
        },
        { where: { id: req.params.id } }
      );

      return res.status(200).json({
        status: "success",
        message: "Batch updated successfully",
        data: batch,
      });
    } else {
      itemNotFound(res, 404, "Batch not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroy = async (req, res) => {
  try {
    await Batch.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Batch deleted successfully",
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
