import { booksSummeryUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchBooksSummery = () => (dispatch) => {
  fetch(booksSummeryUrl.booksSummery, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_BOOKS_SUMMERY,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
