const router = require("express").Router();
const {
  index,
  create,
} = require("../../controllers/librarian/batchController");

router.get("/", index);
router.post("/create", create);

module.exports = router;
