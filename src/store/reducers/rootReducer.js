import { combineReducers } from "redux";
import studentsSummeryReducer from "./studentsSummeryReducer";
import allStudentsReduer from "./allStudentsReducer";
import inactiveStudentsReducer from "./inactiveStudentsReducer";
import allDepartmentsReducer from "./allDepartmentsReducer";
import booksAvailableReducer from "./booksAvailableReducer";
import booksBorrowedReducer from "./booksBorrowedReducer";
import batchReducer from "./batchReducer";
import booksSummeryReducer from "./booksSummeryReducer";

const rootReducers = combineReducers({
  studentsSummery: studentsSummeryReducer,
  booksSummery: booksSummeryReducer,

  allStudents: allStudentsReduer,
  inactiveStudents: inactiveStudentsReducer,
  allDepartments: allDepartmentsReducer,
  allBatches: batchReducer,
  booksAvailable: booksAvailableReducer,
  booksBorrowed: booksBorrowedReducer,
});

export default rootReducers;
