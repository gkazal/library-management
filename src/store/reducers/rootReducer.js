import { combineReducers } from "redux";
import studentsSummeryReducer from "./studentsSummeryReducer";
import allStudentsReduer from "./allStudentsReducer";
import inactiveStudentsReducer from "./inactiveStudentsReducer";
import allDepartmentsReducer from "./allDepartmentsReducer";

const rootReducers = combineReducers({
  studentsSummery: studentsSummeryReducer,
  allStudents: allStudentsReduer,
  inactiveStudents: inactiveStudentsReducer,
  allDepartments: allDepartmentsReducer,
});

export default rootReducers;
