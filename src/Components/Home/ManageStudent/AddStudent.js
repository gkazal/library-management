import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadButton from "../../../Shared/UploadButton/UploadButton";
import {
  addStudent,
  uploadStudentImage,
} from "../../../store/actions/allStudentsAction";
import { AddButton } from "../../../Styles/globalStyled";

const AddStudent = () => {
  const [input, setInput] = useState({
    student_access_id: "",
    name: "",
    department_id: "",
    batch_id: "",
    email: "",
    phone: "",
    password: "",
    avatar: "",
  });
  console.log(input);

  const fieldChangeHandler = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const allDepartments = useSelector(
    (state) => state.allDepartments.allDepartments
  );

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(
    //   addStudent(input, () => {
    //     console.log("Name", input);
    //   })
    // );
    console.log(input);
  };

  const imageChangeHandler = (file) => {
    dispatch(
      uploadStudentImage(file, (url) =>
        setInput((prevState) => ({
          ...prevState,
          avatar: url,
        }))
      )
    );
    // }
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ background: "#009A6B" }}
        >
          <Typography>Add Student</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Student ID
            </Typography>
            <TextField
              // className={classes.textField}
              placeholder="011133097"
              variant="outlined"
              fullWidth
              value={input.student_access_id}
              onChange={(e) =>
                fieldChangeHandler("student_access_id", e.target.value)
              }
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Student Name
            </Typography>
            <TextField
              // className={classes.textField}
              placeholder="Your Name"
              variant="outlined"
              fullWidth
              value={input.name}
              onChange={(e) => fieldChangeHandler("name", e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl fullWidth>
              <Typography mb={1} mt={2}>
                Select Department
              </Typography>
              <Select
                value={input.department_id}
                onChange={(e) =>
                  fieldChangeHandler("department_id", e.target.value)
                }
              >
                {allDepartments?.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Batch
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.batch_id}
              onChange={(e) => fieldChangeHandler("batch_id", e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Email
            </Typography>
            <TextField
              // className={classes.textField}
              variant="outlined"
              fullWidth
              value={input.email}
              onChange={(e) => fieldChangeHandler("email", e.target.value)}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Contact
            </Typography>
            <TextField
              // className={classes.textField}
              variant="outlined"
              fullWidth
              value={input.phone}
              onChange={(e) => fieldChangeHandler("phone", e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Initail Password
            </Typography>
            <TextField
              // className={classes.textField}
              variant="outlined"
              fullWidth
              value={input.password}
              onChange={(e) => fieldChangeHandler("password", e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Typography mb={1} mt={2}>
              Upload Image
            </Typography>
            <Box>
              <UploadButton
                label="Upload Image"
                value={input.avatar}
                onChange={imageChangeHandler}
              />
            </Box>
            <AddButton onClick={handleSubmit}>Add Student</AddButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddStudent;
