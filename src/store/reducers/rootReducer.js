import { combineReducers } from "redux";
import studentsSummeryReducer from "./studentsSummeryReducer";
import allStudentsReduer from "./allStudentsReducer";
import inactiveStudentsReducer from "./inactiveStudentsReducer";
import allDepartmentsReducer from "./allDepartmentsReducer";
import booksAvailableReducer from "./booksAvailableReducer";
import booksBorrowedReducer from "./booksBorrowedReducer";

const rootReducers = combineReducers({
  studentsSummery: studentsSummeryReducer,
  allStudents: allStudentsReduer,
  inactiveStudents: inactiveStudentsReducer,
  allDepartments: allDepartmentsReducer,
  booksAvailable: booksAvailableReducer,
  booksBorrowed: booksBorrowedReducer,
});

export default rootReducers;
