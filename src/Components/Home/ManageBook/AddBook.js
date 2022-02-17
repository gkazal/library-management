import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  fetchBooksAvailable,
} from "../../../store/actions/booksAvailableAction";
import { FETCH_BOOK } from "../../../store/types";
import { AddButton } from "../../../Styles/globalStyled";

const AddBook = () => {
  const [input, setInput] = useState({
    accession_no: "",
    cl_accession_no: "",
    isbn_no: "",
    author_name: "",
    name: "",
    edition: "",
    self_no: "",
    row_no: "",
    column_no: "",
  });

  const fieldChangeHandler = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClose = () => {
    dispatch({
      type: FETCH_BOOK,
      payload: {},
    });
    setInput((prevState) => ({
      accession_no: "",
      cl_accession_no: "",
      isbn_no: "",
      author_name: "",
      name: "",
      edition: "",
      self_no: "",
      row_no: "",
      column_no: "",
    }));
  };

  const allAuthor = useSelector((state) => state.allDepartments.allDepartments);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addBook(input, () => {
        console.log("Name", input);
        dispatch(fetchBooksAvailable());
        handleClose();
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={12} sx={{ background: "#009A6B" }}>
            <Typography>Add Book</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              Accession No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.accession_no}
              onChange={(e) =>
                fieldChangeHandler("accession_no", e.target.value)
              }
            />
          </Grid>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              CL Accession No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.cl_accession_no}
              onChange={(e) =>
                fieldChangeHandler("cl_accession_no", e.target.value)
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              ISBN No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.isbn_no}
              onChange={(e) => fieldChangeHandler("isbn_no", e.target.value)}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              Author
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.author_name}
              onChange={(e) =>
                fieldChangeHandler("author_name", e.target.value)
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              Book Title
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.name}
              onChange={(e) => fieldChangeHandler("name", e.target.value)}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              Edition
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.edition}
              onChange={(e) => fieldChangeHandler("edition", e.target.value)}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" mt={3}>
          Book Location
        </Typography>

        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography mb={1} mt={1}>
              Bookself No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.self_no}
              onChange={(e) => fieldChangeHandler("self_no", e.target.value)}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography mb={1} mt={1}>
              Row No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.row_no}
              onChange={(e) => fieldChangeHandler("row_no", e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography mb={1} mt={2}>
              Column No
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.column_no}
              onChange={(e) => fieldChangeHandler("column_no", e.target.value)}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <AddButton onClick={handleSubmit} type="submit">
            Add Book
          </AddButton>
        </Box>
      </form>
    </>
  );
};

export default AddBook;
