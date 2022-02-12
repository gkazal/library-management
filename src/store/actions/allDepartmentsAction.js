import * as types from "../types";
import { allDepartmentsUrl } from "../../constants/apiUrl";

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
