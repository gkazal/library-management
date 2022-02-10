const router = require("express").Router();
const {
  index,
  create,
} = require("../../controllers/librarian/studentController");

router.get("/", index);
router.post("/create", create);

module.exports = router;
