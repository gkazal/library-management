import { Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BookCard from "../../../Shared/TotalCard/BookCard";
import StudentNav from "./StudentNav/StudentNav";
import StudentTab from "./StudentTab/StudentTab";
import img from "../../../images/dashboard/home.png";
import { NavBookRequestButton } from "../../../Styles/globalStyled";
import RequestBook from "./RequestBook";

const StudentDashboard = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <StudentNav />
      <StudentTab />
      <Grid container justifyContent="center">
        <Grid item lg={8}>
          <Box mt={10}>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
            </Grid>
          </Box>

          <Box
            mt={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box textAlign="center">
              <img src={img} alt="" />
              <Typography>Request For Book To Librarian</Typography>
              <NavBookRequestButton onClick={handleClickOpen}>
                Request Book
              </NavBookRequestButton>
            </Box>

            <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
              <DialogContent>
                <RequestBook />
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StudentDashboard;
