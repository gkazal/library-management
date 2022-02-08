import { DatePicker, LocalizationProvider } from "@mui/lab";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { AddButton } from "../../../Styles/globalStyled";
import DateRangeIcon from "@mui/icons-material/DateRange";

const useStyles = makeStyles({
  search: {
    background: "#009A6B !important",
    borderRadius: "8px",
    color: "white !important",
    textTransform: "none !important",
    padding: "10px !important",
    width: "95px",
  },
  shadowText: {
    color: "#8D8D8D",
  },
});

const AddBorrower = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(null);

  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography sx={{ background: "#009A6B" }}>Add Borrower</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={7} md={8} sm={8} xs={12}>
          <Typography mb={1} mt={2}>
            Student ID
          </Typography>
          <Box display="flex" gap={3}>
            <TextField variant="outlined" fullWidth />
            <Button className={classes.search}>Search</Button>
          </Box>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Student Name
              </Typography>
              <Typography className={classes.shadowText}> Mr XBow</Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Select Department
              </Typography>
              <Typography className={classes.shadowText}>
                Computer Science & Engineering
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Batch
              </Typography>
              <Typography className={classes.shadowText}> 133</Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Email
              </Typography>
              <Typography className={classes.shadowText}>
                mrx@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography mb={1} mt={2}>
                Contact No
              </Typography>
              <Typography className={classes.shadowText}>
                +880170000000
              </Typography>
            </Grid>
          </Grid>
          <Grid container mt={2} mb={5}>
            <Grid item lg={12}>
              <Typography>No Book To Return By This Student</Typography>
              <Link>History</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6">Book Information</Typography>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Select Book
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Borrower Date
          </Typography>
          <Box>
            <Typography>
              <DateRangeIcon />

              {/* <Box component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                to{" "}
              </Box> */}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography mb={1} mt={2}>
            Borrower Date
          </Typography>
          <TextField variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Box py={5}>
        <AddButton>Give Borrow</AddButton>
      </Box>
    </>
  );
};

export default AddBorrower;
