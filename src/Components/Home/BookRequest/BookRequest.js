import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BookCard from "../../../Shared/TotalCard/BookCard";
import { BookRequestText } from "../../../Styles/globalStyled";
import DashboardTab from "../Dashboard/DashboardTab";
import Navbar from "../Navbar/Navbar";
import BookRequestTable from "./BookRequestTable";

const BookRequest = () => {
  return (
    <>
      <Navbar />
      <DashboardTab />
      <Grid container justifyContent="center">
        <Grid item lg={8} sm={10} xs={12}>
          <Box mt={10}>
            <Grid container justifyContent="center">
              <Grid item lg={3}>
                <BookCard />
              </Grid>
            </Grid>
          </Box>

          <Box mt={15}>
            <BookRequestText>Book Requested</BookRequestText>
            <BookRequestTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BookRequest;
