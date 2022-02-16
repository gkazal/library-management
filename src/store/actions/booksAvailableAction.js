import { booksAvailableUrl } from "../../constants/apiUrl";
import * as types from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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

export const addBook =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch(booksAvailableUrl.booksAvailable, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "success") {
          toast.success(res.message);

          dispatch({
            type: types.ADD_BOOK,
            payload: res.data,
          });

          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const fetchBook =
  (id, cb = () => {}) =>
  (dispatch) => {
    fetch(booksAvailableUrl.singleBook.replace(":id", id), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_BOOK,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };
