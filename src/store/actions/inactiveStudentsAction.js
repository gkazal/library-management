import { inactiveStudentsUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchInactiveStudents = () => (dispatch) => {
  fetch(inactiveStudentsUrl.inactiveStudents, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_INACTIVE_STUDENTS,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
