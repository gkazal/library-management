const {
  getAllDepartments,
  getAllBatchesByDepartmentId,
} = require("../controllers/siteController");

const { fileUploader, upload } = require("../controllers/helperController");

const router = require("express").Router();

//get departments by using department id...
router.get("/get-departments", getAllDepartments);
router.post("/get-batches-by-department", getAllBatchesByDepartmentId);
router.post("/file-uploader", fileUploader);

module.exports = router;
