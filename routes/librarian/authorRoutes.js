const {
  store,
  getAllAuthors,
  getSingleAuthor,
  update,
  destroyAuthor,
} = require("../../controllers/librarian/authorController");

const router = require("express").Router();

router.route("/get-authors").get(getAllAuthors);
router.route("/add-author").post(store);
router.get("/get-single-author/:id", getSingleAuthor);
router.patch("/update-author/:id", update);
router.delete("/delete-author/:id", destroyAuthor);

module.exports = router;
