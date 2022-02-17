import * as types from "../types";

const initialStates = {
  booksBorrowed: [],
  singleBorrower: {},
};

const booksBorrowed = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_BORROWED:
      return {
        ...state,
        booksBorrowed: action.payload,
      };

    case types.FETCH_SINGLE_BORROWER:
      return {
        ...state,
        singleBorrower: action.payload,
      };

    default:
      return state;
  }
};
export default booksBorrowed;
