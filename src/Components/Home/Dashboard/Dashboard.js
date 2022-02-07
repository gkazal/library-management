import React from "react";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@mui/styles";
import DashboardTab from "./DashboardTab";
import DashboarBody from "./DashboarBody";

const useStyles = makeStyles({
  root: {},
});
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <DashboardTab />
      <DashboarBody />
    </Box>
  );
};

export default Dashboard;
