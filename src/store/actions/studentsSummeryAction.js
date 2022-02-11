import { studentsSummeryUrl } from "../../constants/apiUrl";
import * as types from "../types";

export const fetchStudentsSummery = () => (dispatch) => {
  fetch(studentsSummeryUrl.studentsSummery, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch({
          type: types.FETCH_STUDENTS_SUMMERY,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
