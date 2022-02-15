import { booksBorrowUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchBooksBorrowed = () => (dispatch) => {
  fetch(booksBorrowUrl.booksBorrow, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_BOOKS_BORROWED,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
