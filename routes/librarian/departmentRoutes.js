const router = require("express").Router();
const {
  index,
  create,
} = require("../../controllers/librarian/departmentController");

router.get("/", index);
router.post("/create", create);

module.exports = router;
