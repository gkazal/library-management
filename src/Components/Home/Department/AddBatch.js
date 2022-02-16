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
import { addBatch, fetchAllBatches } from "../../../store/actions/batchAction";
import { FETCH_BATCH } from "../../../store/types";
import { AddButton } from "../../../Styles/globalStyled";

const AddBatch = () => {
  const [input, setInput] = useState({ name: "", department: "" });

  const allDepartments = useSelector(
    (state) => state.allDepartments.allDepartments
  );

  const fieldChangeHandler = (field, value) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClose = () => {
    dispatch({
      type: FETCH_BATCH,
      payload: {},
    });
    setInput((prevState) => ({
      name: "",
      department: "",
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addBatch(input, () => {
        console.log("Name", input);
        dispatch(fetchAllBatches());
        handleClose();
      })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={12} sx={{ background: "#009A6B" }}>
            <Typography>Add Batch</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item lg={12}>
            <Typography mb={1} mt={2}>
              Batch Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={input.name}
              onChange={(e) => fieldChangeHandler("name", e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item lg={12}>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Add Department
                </InputLabel>
                <Select
                  label="department"
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
            </Box>
          </Grid>
        </Grid>

        <Box mt={3}>
          <AddButton onClick={handleSubmit} type="submit">
            Add Batch
          </AddButton>
        </Box>
      </form>
    </>
  );
};

export default AddBatch;
