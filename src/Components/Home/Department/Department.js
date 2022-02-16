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
import React, { useEffect, useState } from "react";
import { AddButton, BookRequestText } from "../../../Styles/globalStyled";
import Navbar from "../Navbar/Navbar";
import DepartmentTable from "./DepartmentTable";
import SearchIcon from "@mui/icons-material/Search";
import { fetchAllDepartments } from "../../../store/actions/allDepartmentsAction";
import { useDispatch, useSelector } from "react-redux";
import AddDepartment from "./AddDepartment";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
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
  rightGrid: {
    gap: "30px",
  },
});

const Department = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDepartments());
  }, [dispatch]);

  const totalDepartments = useSelector(
    (state) => state.allDepartments.allDepartments
  );

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

      <Grid container justifyContent="center" mt={3}>
        <Grid item lg={2}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item>
                  <Typography>
                    <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                      {" "}
                      {totalDepartments.length}
                    </span>{" "}
                    <br />
                    Total Department
                  </Typography>
                </Grid>
                <Grid item>
                  <Box>
                    <Icon icon="ep:office-building" width="40" height="40" />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={5}>
        <Grid item lg={9}>
          <Box mt={10}>
            <Grid container>
              <Grid item lg={6}>
                <BookRequestText>Department List</BookRequestText>
              </Grid>
              <Grid
                item
                lg={6}
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

                  <Typography>Filter Department</Typography>
                </Box>
                <AddButton
                  onClick={handleClickOpen}
                  sx={{ width: "180px !important" }}
                >
                  <Icon
                    icon="ep:office-building"
                    width="25"
                    height="25"
                    style={{ marginRight: "10px" }}
                  />
                  Add Department
                </AddButton>

                <Dialog
                  maxWidth="sm"
                  fullWidth
                  open={open}
                  onClose={handleClose}
                >
                  <DialogContent>
                    <AddDepartment />
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
            <Box mt={3}>
              <DepartmentTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Department;
