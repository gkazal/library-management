import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import img from "../../../images/dashboard/home.png";
import { NavBookRequestButton } from "../../../Styles/globalStyled";
import StudentCard from "../../../Shared/TotalCard/StudentCard";
import BookCard from "../../../Shared/TotalCard/BookCard";
import { Book } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsSummery } from "../../../store/actions/studentsSummeryAction";
import { fetchAllStudents } from "../../../store/actions/allStudentsAction";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    // background: "silver",
  },
  card: {
    display: "flex",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.17)",
    padding: "10px",
    justifyContent: "space-around",

    "& svg": {
      color: "green ",
      background: "white",
      padding: "8px",
      borderRadius: "30px ",
    },
    "& .p": {
      color: "blue ",
    },
    "&:hover": {
      //   position: "relative",
      background: "#009A6B !important",

      "& svg": {
        color: "green ",
        background: "white",
        padding: "8px",
        borderRadius: "30px !important",
      },

      "& p": {
        color: "white ",
      },
    },
  },

  cardIconGreen: {
    // background: " rgba(12, 150, 84, 0.1) ",
    // padding: "8px",
    // borderRadius: "30px",
  },
  cardIconRed: {
    // background: " rgba(226, 14, 14, 0.1) ",
    // padding: "8px",
    // borderRadius: "30px",
  },
});
const DashboarBody = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchStudentsSummery());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const studentsSummery = useSelector(
    (state) => state.studentsSummery.studentsSummery
  );
  console.log(studentsSummery.length);

  const allStudents = useSelector((state) => state.allStudents.allStudents);
  console.log(allStudents.length);
  const studentCount = allStudents.length;
  console.log(studentCount);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          xl={8}
          lg={10}
          md={10}
          sm={10}
          xs={11}
          className={classes.root}
        >
          <Box py={5}>
            <Typography align="center">
              <span style={{ color: "#009A6B", fontSize: "20px" }}>
                Welcome,{" "}
              </span>
              John Doe
            </Typography>
            <Typography align="center">
              Here is your library data you may want to know
            </Typography>
          </Box>

          <Box>
            <Grid container spacing="20" justifyContent="center">
              <Grid item lg={3}>
                <StudentCard
                  studentCount={studentCount}
                  students={"Total Students"}
                />
              </Grid>
              <Grid item lg={3}>
                <BookCard books={"Books Available"} />
              </Grid>
              <Grid item lg={3}>
                <BookCard books={"Books Borrowed"} />
              </Grid>
              <Grid item lg={3}>
                <BookCard books={"Overdue Books"} />
              </Grid>
              <Grid item lg={3}>
                <StudentCard students={"Inactive Students"} />
              </Grid>
              <Grid item lg={3}>
                <StudentCard students={"Activation Request"} />
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
              <Typography>You can take backup of your data</Typography>
              <NavBookRequestButton>Generate Backup</NavBookRequestButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboarBody;
