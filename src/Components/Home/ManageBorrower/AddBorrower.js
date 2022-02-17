import {
  DatePicker,
  DesktopDateTimePicker,
  LocalizationProvider,
} from "@mui/lab";
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
import { AddButton } from "../../../Styles/globalStyled";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useDispatch } from "react-redux";
import {
  addBorrower,
  fetchBooksBorrowed,
} from "../../../store/actions/booksBorrowedAction";
import { FETCH_SINGLE_BORROWER } from "../../../store/types";
import { fetchSingleStudent } from "../../../store/actions/allStudentsAction";
import { useSelector } from "react-redux";
import { fetchAllBooksOnlyName } from "../../../store/actions/booksAvailableAction";

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
  const { students } = useSelector((state) => state.allStudents);
  const { booksOnlyName } = useSelector((state) => state.booksAvailable);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooksOnlyName());
  }, [dispatch]);

  const [input, setInput] = useState({
    student_id: "",
    // borrower_id: "",
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
      student_id: "",
      // borrower_id: "",
      book_id: "",
      borrower_date: null,
      back_date: null,
    }));
    close();
  };

  useEffect(() => {
    if (students && Object.keys(students).length > 0) {
      setInput((prevState) => ({
        prevState,
        student_id: students.id,
      }));
    }
  }, [students]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = { ...input };

    if (input.book_id.hasOwnProperty("id")) {
      formData["book_id"] = input.book_id.id;
    }

    dispatch(
      addBorrower(formData, () => {
        console.log("Name", input);
        dispatch(fetchBooksBorrowed());
        handleClose();
      })
    );
  };

  const [studentAccessId, setStudentAccessId] = useState("");

  console.log(input);

  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography sx={{ background: "#009A6B" }}>Add Borrower</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item lg={7} md={8} sm={8} xs={12}>
            <Typography mb={1} mt={2}>
              Student ID
            </Typography>
            <Box display="flex" gap={3}>
              <TextField
                variant="outlined"
                fullWidth
                value={studentAccessId}
                onChange={(e) => {
                  setStudentAccessId(e.target.value);
                }}
              />
              <Button
                className={classes.search}
                disabled={studentAccessId.length === 0}
                onClick={(e) => {
                  dispatch(fetchSingleStudent(studentAccessId));
                }}
              >
                Search
              </Button>
            </Box>
            {students && Object.keys(students).length > 0 && (
              <>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography mb={1} mt={2}>
                      Student Name
                    </Typography>
                    <Typography className={classes.shadowText}>
                      {students.name}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography mb={1} mt={2}>
                      Select Department
                    </Typography>
                    <Typography className={classes.shadowText}>
                      {students?.department?.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography mb={1} mt={2}>
                      {students?.batch?.name}
                    </Typography>
                    <Typography className={classes.shadowText}> 133</Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography mb={1} mt={2}>
                      Email
                    </Typography>
                    <Typography className={classes.shadowText}>
                      {students?.email}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography mb={1} mt={2}>
                      Contact No
                    </Typography>
                    <Typography className={classes.shadowText}>
                      {students?.phone}
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
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography mb={1} mt={2}>
              Select Book
            </Typography>
            <Autocomplete
              options={booksOnlyName}
              getOptionLabel={(option) => option.name}
              variant="outlined"
              fullWidth
              value={input.book_id}
              onChange={(e, data) => fieldChangeHandler("book_id", data)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item lg={6}></Grid>
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
                renderInput={(params) => <TextField {...params} />}
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
                renderInput={(params) => <TextField {...params} />}
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
    </>
  );
};

export default AddBorrower;
