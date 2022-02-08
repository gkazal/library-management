import { Box, Grid } from "@mui/material";
import React from "react";
import BookCard from "../../../../Shared/TotalCard/BookCard";
import { BookRequestText } from "../../../../Styles/globalStyled";
import StudentNav from "../StudentNav/StudentNav";
import StudentTab from "../StudentTab/StudentTab";
import BorrowHistoryTable from "./BorrowHistoryTable";

const BorrowHistory = () => {
  return (
    <>
      <StudentNav />
      <StudentTab />
      <Grid container justifyContent="center">
        <Grid item lg={8} md={10} sm={11} xs={12}>
          <Box mt={10}>
            <Grid container justifyContent="center">
              <Grid item lg={3}>
                <BookCard />
              </Grid>
            </Grid>
          </Box>

          <Box mt={15}>
            <BookRequestText>Book Requested</BookRequestText>
            <BorrowHistoryTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BorrowHistory;
