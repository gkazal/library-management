const router = require("express").Router();
const {
  studentSummary,
  getAllStudents,
  getActiveStudents,
  getInActiveStudents,
  getPendingStudents,
  store,
  getStudent,
  studentStatusChange,
  destroyStudent,
} = require("../../controllers/librarian/studentController");

router.get("/get-students-summary", studentSummary);
router.get("/get-students", getAllStudents);
router.get("/get-active-students", getActiveStudents);
router.get("/get-inactive-students", getInActiveStudents);
router.get("/get-pending-students", getPendingStudents);
router.post("/add-student", store);
router.get("/get-students/:studentAccessId", getStudent);
router.patch("/update-students/:studentAccessId", studentStatusChange);
router.delete("/delete-student/:studentAccessId", destroyStudent);

module.exports = router;
