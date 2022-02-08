import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddButton } from "../../../Styles/globalStyled";

const RequestBook = () => {
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
          <Typography>Request Book</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Book Name
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Edition(If any specific you like to mention)
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Author Name
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Box mt={3}>
        <AddButton>Request Book</AddButton>
      </Box>
    </>
  );
};

export default RequestBook;
