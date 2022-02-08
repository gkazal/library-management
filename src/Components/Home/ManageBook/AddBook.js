import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddButton } from "../../../Styles/globalStyled";

const AddBook = () => {
  return (
    <>
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
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            CL Accession No
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            ISBN No
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            Author
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            Book Title
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            Edition
          </Typography>
          <TextField variant="outlined" fullWidth />
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
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            Row No
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography mb={1} mt={2}>
            Column No
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Box mt={3}>
        <AddButton>Add Book</AddButton>
      </Box>
    </>
  );
};

export default AddBook;
