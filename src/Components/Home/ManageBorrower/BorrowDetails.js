import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BookRequestText } from "../../../Styles/globalStyled";
import DashboardTab from "../Dashboard/DashboardTab";
import Navbar from "../Navbar/Navbar";
import BorrowDetailTable from "./BorrowDetailTable";
import BookCard from "../../../Shared/TotalCard/BookCard";

const BorrowDetails = () => {
  return (
    <>
      <Navbar />
      <DashboardTab />
      <Grid container justifyContent="center">
        <Grid item xl={8} lg={10} md={8} sm={11} xs={12}>
          <Box mt={10}>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
            </Grid>
          </Box>

          <Box mt={10}>
            <BookRequestText>Borrow History</BookRequestText>
            <BorrowDetailTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BorrowDetails;
