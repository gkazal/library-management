import { booksBorrowUrl } from "../../constants/apiUrl";
import * as types from "../types";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const fetchBooksBorrowed =
  (page = 0, size = 4) =>
  (dispatch) => {
    fetch(booksBorrowUrl.booksBorrow + `?page=${page}&size=${size}`, {
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

export const addBorrower =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch(booksBorrowUrl.addBorrower, {
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
            type: types.ADD_BORROWER,
            payload: res.data,
          });

          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const fetchBorrower =
  (id, cb = () => {}) =>
  (dispatch) => {
    fetch(booksBorrowUrl.singleBorrower.replace(":id", id), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_SINGLE_BORROWER,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };
