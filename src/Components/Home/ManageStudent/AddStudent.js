import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UploadButton from "../../../Shared/UploadButton/UploadButton";
import { AddButton } from "../../../Styles/globalStyled";

const AddStudent = () => {
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
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Student ID
          </Typography>
          <TextField
            // className={classes.textField}
            placeholder="Your Name"
            variant="outlined"
            fullWidth
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
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Select Department
          </Typography>
          <TextField
            // className={classes.textField}
            placeholder="Your Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Batch
          </Typography>
          <TextField
            // className={classes.textField}
            placeholder="Your Name"
            variant="outlined"
            fullWidth
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
            placeholder="Your Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Contact
          </Typography>
          <TextField
            // className={classes.textField}
            placeholder="Your Name"
            variant="outlined"
            fullWidth
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
            placeholder="Your Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <Typography mb={1} mt={2}>
            Upload Image
          </Typography>
          <Box>
            <UploadButton label="Upload Image" />
          </Box>
          <AddButton>Add Student</AddButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AddStudent;
