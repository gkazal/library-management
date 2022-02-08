import { Icon } from "@iconify/react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

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
});
const StudentCard = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item>
              <Typography>
                7555 <br />
                Book Request
              </Typography>
            </Grid>
            <Grid item>
              <Box>
                <Icon icon="ant-design:user-outlined" width="30" height="30" />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default StudentCard;
