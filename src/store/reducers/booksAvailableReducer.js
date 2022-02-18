import * as types from "../types";

const initialStates = {
  booksAvailable: [],
  singleBook: {},
  booksOnlyName: [],
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
    case types.FETCH_ALL_BOOKS_ONLY_NAMES:
      return {
        ...state,
        booksOnlyName: action.payload,
      };

    default:
      return state;
  }
};
export default booksAvailable;
