import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import StudentCard from "../../../Shared/TotalCard/StudentCard";
import { AddButton, BookRequestText } from "../../../Styles/globalStyled";
import DashboardTab from "../Dashboard/DashboardTab";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ManageStudentTable from "./MangeStudentTable";
import AddStudent from "./AddStudent";

const useStyles = makeStyles({
  textField: {
    "&:before": {
      borderBottom: "1px solid black !important",
    },
    "& .MuiInput-root": {
      color: "black !important",
      borderBottom: "1px solid rgba black !important",

      "& .svg": {
        color: "black !important",
      },
    },
    "&  .MuiSvgIcon-root": {
      color: "black !important",
    },
    "&  .MuiInput-input": {
      color: "rgba(255, 255, 255, 0.38) !important",
    },
    "& .MuiInput-root:before": {
      borderBottom: "1px solid black !important",
    },
    "& .MuiInput-root:after": {
      borderBottom: "1px solid white",
      color: "#fff !important",
    },

    "& .MuiInputLabel-root": {
      color: "black !important",
    },
  },
  rightGrid: {
    gap: "30px",
  },
});

const MangeStudent = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <DashboardTab />
      <Grid container justifyContent="center">
        <Grid item xl={8} lg={10} md={10} sm={12} xs={12}>
          <Box mt={10}>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={3}>
                <StudentCard />
              </Grid>
              <Grid item lg={3}>
                <StudentCard />
              </Grid>
              <Grid item lg={3}>
                <StudentCard />
              </Grid>
            </Grid>
          </Box>

          <Box mt={10}>
            <Grid container>
              <Grid item lg={6} md={4} sm={3} xs={12}>
                <BookRequestText>Student List</BookRequestText>
              </Grid>
              <Grid
                item
                lg={6}
                md={8}
                sm={9}
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="end"
                className={classes.rightGrid}
              >
                <FormControl variant="standard">
                  <Input
                    className={classes.textField}
                    id="input-with-icon-adornment"
                    defaultValue="Search"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box display="flex" gap={1}>
                  <Icon
                    icon="clarity:filter-grid-circle-solid"
                    width="20"
                    height="20"
                  />

                  <Typography>Filter Student</Typography>
                </Box>
                <AddButton onClick={handleClickOpen}>Add Student</AddButton>

                <Dialog
                  maxWidth="md"
                  fullWidth
                  open={open}
                  onClose={handleClose}
                >
                  <DialogContent>
                    <AddStudent />
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </Box>

          <Box mt={3}>
            <ManageStudentTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MangeStudent;
