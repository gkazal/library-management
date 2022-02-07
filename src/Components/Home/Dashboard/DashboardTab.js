import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

const useStyles = makeStyles({
  tabBox: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.13)",
    display: "flex",
  },
  activeTab: {
    position: "relative",
    color: "#009A6B",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: "25%",
      width: "50%",
      height: 3,
      borderRadius: 8,
      backgroundColor: "#258E00",
    },
  },
  rightBorder: {
    borderRight: "2px solid red ",
    height: "30px",
    // marginTop: "30px",
  },
});

const DashboardTab = () => {
  const classes = useStyles();

  const [field, setField] = useState("dashboard");
  const handleDashboard = () => {
    setField("dashboard");
  };
  const handleStudent = () => {
    setField("student");
  };
  const handleBorrower = () => {
    setField("borrower");
  };
  const handleBook = () => {
    setField("book");
  };

  return (
    <Grid container className={classes.tabBox}>
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box className={classes.rightBorder}>
          <Typography
            variant="h6"
            onClick={handleDashboard}
            className={field === "dashboard" && classes.activeTab}
            align="center"
            sx={{ padding: "10px" }}
          >
            Dashboard <br />
            <span style={{ color: "#8D8D8D", fontSize: "14px" }}>
              Data & Statistics
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box className={classes.rightBorder}>
          <Typography
            variant="h6"
            onClick={handleStudent}
            className={field === "student" && classes.activeTab}
            align="center"
            sx={{ padding: "10px" }}
          >
            Manage Student <br />
            <span style={{ color: "#8D8D8D", fontSize: "14px" }}>
              Student Information
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box className={classes.rightBorder}>
          <Typography
            variant="h6"
            className={field === "borrower" && classes.activeTab}
            align="center"
            sx={{ padding: "10px" }}
            onClick={handleBorrower}
          >
            Manage Borrower <br />{" "}
            <span style={{ color: "#8D8D8D", fontSize: "14px" }}>
              Borrower Information
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Typography
          variant="h6"
          className={field === "book" && classes.activeTab}
          align="center"
          sx={{ padding: "10px" }}
          onClick={handleBook}
        >
          Manage Book <br />{" "}
          <span style={{ color: "#8D8D8D", fontSize: "14px" }}>
            Managing All Books
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardTab;
