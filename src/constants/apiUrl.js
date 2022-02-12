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
};
