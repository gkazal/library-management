import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Autocomplete,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent } from "../../../store/actions/allStudentsAction";
import { fetchBooksAvailable } from "../../../store/actions/booksAvailableAction";
import {
  addBorrower,
  fetchBooksBorrowed,
} from "../../../store/actions/booksBorrowedAction";
import { FETCH_SINGLE_BORROWER } from "../../../store/types";
import { AddButton } from "../../../Styles/globalStyled";

const useStyles = makeStyles({
  search: {
    background: "#009A6B !important",
    borderRadius: "8px",
    color: "white !important",
    textTransform: "none !important",
    padding: "10px !important",
    width: "95px",
  },
  shadowText: {
    color: "#8D8D8D",
  },
});

const AddBorrower = ({ close }) => {
  const classes = useStyles();
  // const { students } = useSelector((state) => state.allStudents);
  const { booksAvailable } = useSelector((state) => state.booksAvailable);
  const { allStudents } = useSelector((state) => state.allStudents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAvailable());
  }, [dispatch]);

  const [input, setInput] = useState({
    student_id: null,
    book_id: null,
    borrower_date: null,
    back_date: null,
  });

  const fieldChangeHandler = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClose = () => {
    dispatch({
      type: FETCH_SINGLE_BORROWER,
      payload: {},
    });
    setInput((prevState) => ({
      student_id: null,
      book_id: null,
      borrower_date: null,
      back_date: null,
    }));
    close();
  };

  // student id dia search dile then student id ar data gulo nice show hobe...
  // students ar modde faka na thakle and students ar modde value 0 ar besi hoile search button a kaj korbe..
  // useEffect(() => {
  //   if (students && Object.keys(students).length > 0) {
  //     setInput((prevState) => ({
  //       prevState,
  //       student_id: students.id,
  //     }));
  //   }
  // }, [students]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = { ...input };

    if (input.book_id.hasOwnProperty("id")) {
      formData["book_id"] = input.book_id.id;
    }

    //autocomplete ar somoi option theke all object value cole ase tai..specific id dhore nite hobe. jemon student_id.id
    //
    if (input.student_id.hasOwnProperty("id")) {
      formData["student_id"] = input.student_id.id;
    }
    console.log(formData);

    dispatch(
      addBorrower(formData, () => {
        // console.log("Name", input);
        dispatch(fetchBooksBorrowed());
        handleClose();
      })
    );
  };

  // const [studentAccessId, setStudentAccessId] = useState(null);
  // console.log(studentAccessId);

  // console.log(input);

  return (
    <>
      <Box p={2} sx={{ background: "#009A6B" }}>
        <Typography color="white" variant="h6">
          Add Borrower
        </Typography>
      </Box>
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={8} sm={8} xs={12}>
              <Typography mb={1} mt={2}>
                Student ID
              </Typography>
              <Box display="flex" gap={3}>
                <Autocomplete
                  options={allStudents}
                  getOptionLabel={(option) =>
                    option.name + "(" + option.student_access_id + ")"
                  }
                  variant="outlined"
                  fullWidth
                  value={input.student_id}
                  // onChange={(e, data) => {
                  //   setStudentAccessId(e.target.value);
                  // }}
                  onChange={(e, data) => fieldChangeHandler("student_id", data)}
                  renderInput={(params) => <TextField {...params} />}
                />
                {/* <TextField
                variant="outlined"
                fullWidth
                value={studentAccessId}
                onChange={(e) => {
                  setStudentAccessId(e.target.value);
                }}
              />
              <Button
                className={classes.search}
                // disabled={studentAccessId.length === 0}
                onClick={(e) => {
                  dispatch(fetchSingleStudent(studentAccessId));
                }}
              >
                Search
              </Button> */}
              </Box>

              {/* students ar modde faka na thakle and students ar modde value 0 ar besi hoile search button a kaj korbe..  */}
              {input.student_id && Object.keys(input.student_id).length > 0 && (
                <>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography mb={1} mt={2}>
                        Student Name
                      </Typography>
                      <Typography className={classes.shadowText}>
                        {input?.student_id?.name}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography mb={1} mt={2}>
                        Select Department
                      </Typography>
                      <Typography className={classes.shadowText}>
                        {input?.student_id?.department?.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography mb={1} mt={2}>
                        {input?.student_id?.batch?.name}
                      </Typography>
                      <Typography className={classes.shadowText}>
                        {" "}
                        133
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography mb={1} mt={2}>
                        Email
                      </Typography>
                      <Typography className={classes.shadowText}>
                        {input?.student_id?.email}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Typography mb={1} mt={2}>
                        Contact No
                      </Typography>
                      <Typography className={classes.shadowText}>
                        {input?.student_id?.phone}
                        {/* {students?.phone} */}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}

              <Grid container mt={2} mb={5}>
                <Grid item lg={12}>
                  <Typography>No Book To Return By This Student</Typography>
                  <Link>History</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h6">Book Information</Typography>
          <Grid container spacing={3}>
            <Grid item lg={12} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Select Book
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={6}>
                  <Autocomplete
                    options={booksAvailable}
                    getOptionLabel={(option) =>
                      `${option.name} (${option.author_name})`
                    }
                    variant="outlined"
                    fullWidth
                    value={input.book_id}
                    onChange={(e, data) => fieldChangeHandler("book_id", data)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                {input.book_id && (
                  <Grid item lg={6}>
                    <Box display="flex" gap={2}>
                      <Typography>
                        Bookself No: {input?.book_id?.self_no}
                      </Typography>
                      <Typography>Row : {input?.book_id?.row_no}</Typography>
                      <Typography>
                        Column : {input?.book_id?.column_no}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Borrower Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  fullWidth
                  value={input.borrower_date}
                  onChange={(newValue) => {
                    fieldChangeHandler("borrower_date", newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Back Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={input.back_date}
                  fullWidth
                  onChange={(newValue) => {
                    fieldChangeHandler("back_date", newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Box py={5}>
            <AddButton onClick={handleSubmit} type="submit">
              Give Borrow
            </AddButton>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddBorrower;
