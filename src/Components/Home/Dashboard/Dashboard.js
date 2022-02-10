import React from "react";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import DashboardTab from "./DashboardTab";
import DashboarBody from "./DashboarBody";

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <DashboardTab />
      <DashboarBody />
    </Box>
  );
};

export default Dashboard;
