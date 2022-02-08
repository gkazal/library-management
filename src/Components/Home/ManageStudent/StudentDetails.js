import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardTab from "../Dashboard/DashboardTab";
import Navbar from "../Navbar/Navbar";
import img from "../../../images/dashboard/student.png";
import { makeStyles } from "@mui/styles";
import { AddButton, BookRequestText } from "../../../Styles/globalStyled";
import StudentDetailTable from "./StudentDetailTable";

const useStyles = makeStyles({
  box: {
    boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    height: "100%",
    minHeight: "500px",
    padding: "30px",
  },
});

const StudentDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <DashboardTab />
      <Grid container justifyContent="center" mt={5}>
        <Grid item lg={6} md={6} sm={8} xs={11} className={classes.box}>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography>Student Information</Typography>
              <img
                style={{
                  width: "200px",
                }}
                src={img}
                alt=""
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={9} md={8} sm={8} xs={7}>
              <Typography mb={1} mt={2}>
                Student ID
              </Typography>
              <Typography> 011133097</Typography>
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={5}>
              <Typography mb={1} mt={2}>
                Student Name
              </Typography>
              <Typography> Kazal Ghosh</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={9} md={8} sm={8} xs={7}>
              <Typography mb={1} mt={2}>
                Select Department
              </Typography>
              <Typography> Computer Science</Typography>
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={5}>
              <Typography mb={1} mt={2}>
                Batch
              </Typography>
              <Typography> 133</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={9} md={8} sm={8} xs={7}>
              <Typography mb={1} mt={2}>
                Email
              </Typography>
              <Typography> mrgkazal@gmail.com</Typography>
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={5}>
              <Typography mb={1} mt={2}>
                Contact No
              </Typography>
              <Typography> 01732592451</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <AddButton>Send Email</AddButton>
        <AddButton>Deactive User</AddButton>
      </Box>
      <Grid container justifyContent="center" py={5}>
        <Grid item xl={8} lg={10} md={10} sm={12} xs={12}>
          <BookRequestText>Borrow History</BookRequestText>

          <StudentDetailTable />
        </Grid>
      </Grid>
    </>
  );
};

export default StudentDetails;
