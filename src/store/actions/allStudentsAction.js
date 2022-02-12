import { allStudentsUrl, fileUrl } from "../../constants/apiUrl";
import * as types from "../types";
import { toast } from "react-toastify";

export const fetchAllStudents =
  (pageNum = 1, cb = () => {}) =>
  (dispatch) => {
    fetch(allStudentsUrl.allStudents + "?page=" + pageNum, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_ALL_STUDENTS,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const addStudent =
  (data, cb = () => {}) =>
  (dispatch) => {
    fetch(allStudentsUrl.allStudents, {
      method: "POST",

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "success") {
          toast.success(res.message);

          dispatch({
            type: types.ADD_STUDENT,
            payload: res.data,
          });
          cb();
        }
      })
      .catch((err) => console.log(err));
  };

export const uploadStudentImage =
  (data, cb = () => {}) =>
  (dispatch) => {
    let formData = new FormData();
    formData.append("file", data);

    fetch(fileUrl.imageUpload, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "success") {
          toast.success(res.message);
          dispatch({
            type: types.UPLOAD_STUDENT_IMAGE,
            payload: res.data,
          });

          cb(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

export const fetchSingleStudent =
  (studentAccessId, cb = () => {}) =>
  (dispatch) => {
    fetch(
      allStudentsUrl.singleStudent.replace(":studentAccessId", studentAccessId),
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          dispatch({
            type: types.FETCH_SINGLE_STUDENT,
            payload: res.data,
          });

          cb();
        }
      })
      .catch((err) => console.log(err));
  };
