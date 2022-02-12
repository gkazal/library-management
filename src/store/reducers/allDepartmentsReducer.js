import * as types from "../types";

const initialStates = {
  allDepartments: [],
};

const allDepartments = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_ALL_DEPARTMENTS:
      return {
        ...state,
        allDepartments: action.payload,
      };

    default:
      return state;
  }
};

export default allDepartments;
