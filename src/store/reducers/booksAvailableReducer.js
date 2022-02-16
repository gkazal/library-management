import * as types from "../types";

const initialStates = {
  booksAvailable: [],
  singleBook: {},
};

const booksAvailable = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_AVAILABLE:
      return {
        ...state,
        booksAvailable: action.payload,
      };
    case types.FETCH_BOOK:
      return {
        ...state,
        singleBook: action.payload,
      };

    default:
      return state;
  }
};
export default booksAvailable;
