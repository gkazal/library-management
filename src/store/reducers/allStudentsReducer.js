import * as types from "../types";

const initialStates = {
  allStudents: [],
  students: {},
};

const allStudents = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_ALL_STUDENTS:
      return {
        ...state,
        allStudents: action.payload,
      };
    case types.FETCH_SINGLE_STUDENT:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
};

export default allStudents;
