const Batch = require("../../models/Batch");

// show department in frontend table..
const index = async (req, res) => {
  try {
    const batches = await Batch.findAll();

    return res.status(200).json({
      status: "success",
      data: batches,
    });
  } catch (e) {
    return res.status(500).json({
      status: "server_error",
      data: e,
    });
  }
};

// create batch from frontend...

const create = async (req, res) => {
  try {
    const batch = await Batch.create({
      name: req.body.name,
    });

    console.log(batch);

    if (batch) {
      return res.status(200).json({
        status: "success",
        message: "batch added successfully",
        data: batch,
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
