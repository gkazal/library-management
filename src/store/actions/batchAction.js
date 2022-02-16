import * as types from "../types";
import { batchesUrl } from "../../constants/apiUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const fetchAllBatches =
  (pageNum = 1, cb = () => {}) =>
  (dispatch) => {
    fetch(batchesUrl.allBatches + "?page=" + pageNum, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_ALL_BATCHES,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const addBatch =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch(batchesUrl.allBatches, {
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
            type: types.ADD_BATCH,
            payload: res.data,
          });

          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const fetchDepartment =
  (id, cb = () => {}) =>
  (dispatch) => {
    fetch(batchesUrl.singleBatch.replace(":id", id), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_BATCH,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };
