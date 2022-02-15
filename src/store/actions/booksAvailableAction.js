import { booksAvailableUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchBooksAvailable = () => (dispatch) => {
  fetch(booksAvailableUrl.booksAvailable, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_BOOKS_AVAILABLE,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
