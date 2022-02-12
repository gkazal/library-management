import * as types from "../types";

const initialStates = {
  inactiveStudents: [],
};

const inactiveStudents = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_INACTIVE_STUDENTS:
      return {
        ...state,
        inactiveStudents: action.payload,
      };

    default:
      return state;
  }
};

export default inactiveStudents;
