import * as types from "../types";

const initialStates = {
  studentsSummery: [],
};

const studentsSummeryReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_STUDENTS_SUMMERY:
      return {
        ...state,
        studentsSummery: action.payload,
      };

    default:
      return state;
  }
};

export default studentsSummeryReducer;
