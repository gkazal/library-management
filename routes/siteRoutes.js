const {
  getAllDepartments,
  getAllBatchesByDepartmentId,
} = require("../controllers/siteController");

const router = require("express").Router();

//get departments by using department id...
router.get("/get-departments", getAllDepartments);
router.post("/get-batches-by-department", getAllBatchesByDepartmentId);

module.exports = router;
