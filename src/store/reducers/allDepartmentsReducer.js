import * as types from "../types";

const initialStates = {
  allDepartments: [],
  department: {},
};

const allDepartments = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_ALL_DEPARTMENTS:
      return {
        ...state,
        allDepartments: action.payload,
      };

    case types.FETCH_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };

    default:
      return state;
  }
};

export default allDepartments;
