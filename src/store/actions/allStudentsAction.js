import { allStudentsUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchAllStudents = () => (dispatch) => {
  fetch(allStudentsUrl.allStudents, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_ALL_STUDENTS,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
