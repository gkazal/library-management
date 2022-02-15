import * as types from "../types";

const initialStates = {
  booksBorrowed: [],
};

const booksBorrowed = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_BORROWED:
      return {
        ...state,
        booksBorrowed: action.payload,
      };

    default:
      return state;
  }
};
export default booksBorrowed;
