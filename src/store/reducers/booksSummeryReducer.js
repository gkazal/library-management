import * as types from "../types";

const initialStates = {
  booksSummery: [],
};

const booksSummery = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_SUMMERY:
      return {
        ...state,
        booksSummery: action.payload,
      };

    default:
      return state;
  }
};
export default booksSummery;
