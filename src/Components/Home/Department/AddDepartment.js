import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDepartment,
  fetchAllDepartments,
} from "../../../store/actions/allDepartmentsAction";
import { FETCH_DEPARTMENT } from "../../../store/types";
import { AddButton } from "../../../Styles/globalStyled";

const AddDepartment = () => {
  const [input, setInput] = useState({ name: "" });

  const fieldChangeHandler = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClose = () => {
    dispatch({
      type: FETCH_DEPARTMENT,
      payload: {},
    });
    setInput((prevState) => ({
      name: "",
    }));
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addDepartment(input, () => {
        console.log("Name", input);
        dispatch(fetchAllDepartments());
        handleClose();
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={12} sx={{ background: "#009A6B" }}>
            <Typography>Add Department</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item lg={12}>
            <Typography mb={1} mt={2}>
              Department Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.name}
              onChange={(e) => fieldChangeHandler("name", e.target.value)}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <AddButton onClick={handleSubmit} type="submit">
            Add Department
          </AddButton>
        </Box>
      </form>
    </>
  );
};

export default AddDepartment;
