const {
  store,
  getAllBorrowers,
  getSingleBorrower,
  update,
  destroyBorrower,
} = require("../../controllers/librarian/BorrowerController");

const router = require("express").Router();

router.post("/add-borrower", store);
router.get("/get-allBorrowers", getAllBorrowers);
router.get("/get-single-borrower/:student_id", getSingleBorrower);
router.patch("/update-borrower/:student_id", update);
router.delete("/delete-borrower/:student_id", destroyBorrower);

module.exports = router;
