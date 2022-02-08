import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Icon } from "@iconify/react";
import img from "../../../images/dashboard/home.png";
import { NavBookRequestButton } from "../../../Styles/globalStyled";
import StudentCard from "../../../Shared/TotalCard/StudentCard";
import BookCard from "../../../Shared/TotalCard/BookCard";
import { Book } from "@mui/icons-material";

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
  const classes = useStyles();
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
                <StudentCard />
              </Grid>
              <Grid item lg={3}>
                <StudentCard />
              </Grid>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
              <Grid item lg={3}>
                <BookCard />
              </Grid>
              <Grid item lg={3}>
                <StudentCard />
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
