const ROOT_URL = "http://localhost:5500/";

export const studentsSummeryUrl = {
  studentsSummery: ROOT_URL + "librarian/students/get-students-summary",
};

export const allStudentsUrl = {
  allStudents: ROOT_URL + "librarian/students/get-students",
  singleStudent: ROOT_URL + "librarian/students/get-students/:studentAccessId",
};

export const fileUrl = {
  imageUpload: ROOT_URL + "site/file-uploader",
};

export const inactiveStudentsUrl = {
  inactiveStudents: ROOT_URL + "librarian/students/get-inactive-students",
};

export const allDepartmentsUrl = {
  allDepartments: ROOT_URL + "settings/departments",
  singleDepartment: ROOT_URL + "settings/departments/:id",
};

export const batchesUrl = {
  allBatches: ROOT_URL + "settings/batches",
  singleBatch: ROOT_URL + "settings/batches/:id",
};

export const booksAvailableUrl = {
  booksAvailable: ROOT_URL + "librarian/books/get-books",
  addBook: ROOT_URL + "librarian/books/add-book",
  singleBook: ROOT_URL + "librarian/books/get-single-book/:id",
  allBooks: ROOT_URL + "librarian/books/get-books-only-names",
};

export const booksBorrowUrl = {
  booksBorrow: ROOT_URL + "librarian/books/get-AllBorrowers",
  addBorrower: ROOT_URL + "librarian/books/add-borrower",
  singleBorrower: ROOT_URL + "librarian/books/get-single-borrower/:id",
};
