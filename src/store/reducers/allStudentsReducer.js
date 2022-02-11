import * as types from "../types";

const initialStates = {
  allStudents: [],
};

const allStudents = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_ALL_STUDENTS:
      return {
        ...state,
        allStudents: action.payload,
      };

    default:
      return state;
  }
};

export default allStudents;
