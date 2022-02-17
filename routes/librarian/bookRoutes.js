const {
  getAllBooks,
  store,
  getSingleBook,
  destroyBook,
  bookStatusChange,
  getAllBooksOnlyNames,
} = require("../../controllers/librarian/bookController");

const router = require("express").Router();

router.post("/add-book", store);
router.get("/get-books", getAllBooks);
router.get("/get-books-only-names", getAllBooksOnlyNames);
router.get("/get-single-book/:accession_no", getSingleBook);
router.delete("/delete-book/:accession_no", destroyBook);
router.patch("/update-book/:accession_no", bookStatusChange);

module.exports = router;
