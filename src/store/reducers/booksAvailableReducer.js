import * as types from "../types";

const initialStates = {
  booksAvailable: [],
};

const booksAvailable = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_AVAILABLE:
      return {
        ...state,
        booksAvailable: action.payload,
      };

    default:
      return state;
  }
};
export default booksAvailable;
