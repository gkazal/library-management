import React from "react";
import StudentNav from "./StudentNav/StudentNav";
import StudentTab from "./StudentTab/StudentTab";
import img from "../../../images/dashboard/student.png";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  box: {
    boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    height: "100%",
    minHeight: "376px",
    padding: "30px",
    marginTop: "90px !important",
  },
  deletePhoto: {
    background: "#FFC2B0 !important",
    borderRadius: "22px !important",
    textTransform: "none !important",
    color: "white !important",
    padding: "10px !important",
    marginRight: "5px !important",
    width: "110px",
  },
  editPhoto: {
    background: "#D6D6D6 !important",
    borderRadius: "22px !important",
    textTransform: "none !important",
    color: "black !important",
    padding: "10px !important",
    width: "110px",
  },
  editInfo: {
    background: "#009A6B !important",
    borderRadius: "22px !important",
    color: "white !important",
    textTransform: "none !important",
    padding: "10px !important",
  },
});
const StudentProfile = () => {
  const classes = useStyles();
  return (
    <>
      <StudentNav />
      <StudentTab />
      <Grid container justifyContent="center">
        <Grid item xl={4} lg={5} md={6} sm={8} xs={11} className={classes.box}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <img
                style={{
                  width: "100%",
                }}
                src={img}
                alt=""
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box>
                <Typography>Name</Typography>
                <Typography variant="h6">Mr. John</Typography>
              </Box>
              <Box mt={1}>
                <Typography>Email</Typography>
                <Typography variant="h6">john@gmail.com</Typography>
              </Box>
              <Box mt={1}>
                <Typography>Contact No</Typography>
                <Typography variant="h6">+8801720000000</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container mt={5} spacing={2}>
            <Grid item lg={7} md={7} sm={7}>
              <Button className={classes.deletePhoto}>Delete Photo</Button>
              <Button className={classes.editPhoto}>Edit Photo</Button>
            </Grid>
            <Grid item lg={5} md={5} sm={5}>
              <Button className={classes.editInfo}>Edit Information</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StudentProfile;
