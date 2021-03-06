import * as types from "../types";
import { allDepartmentsUrl } from "../../constants/apiUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const fetchAllDepartments =
  (pageNum = 1, cb = () => {}) =>
  (dispatch) => {
    fetch(allDepartmentsUrl.allDepartments + "?page=" + pageNum, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_ALL_DEPARTMENTS,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const addDepartment =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch(allDepartmentsUrl.allDepartments, {
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
            type: types.ADD_DEPARTMENT,
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
    fetch(allDepartmentsUrl.singleDepartment.replace(":id", id), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_DEPARTMENT,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };
