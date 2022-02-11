import { combineReducers } from "redux";
import studentsSummeryReducer from "./studentsSummeryReducer";
import allStudentsReduer from "./allStudentsReducer";

const rootReducers = combineReducers({
  studentsSummery: studentsSummeryReducer,
  allStudents: allStudentsReduer,
});

export default rootReducers;
