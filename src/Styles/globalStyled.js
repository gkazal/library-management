import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

export const NavBookRequestButton = withStyles(() => ({
  root: {
    textTransform: "none !important",

    color: "white !important",
    backgroundColor: "#009A6B !important",
    padding: "10px !important",
    borderRadius: "23px !important",
    outline: "none !important",
    fontSize: "14px !important",
    fontWeight: "500!important",
    width: "154px !important",
    height: "46px !important",
  },
}))(Button);

export const BookRequestText = withStyles(() => ({
  root: {
    fontSize: "18px !important",
    fontWeight: "600 !important",
    color: "#009A6B",
  },
}))(Typography);

export const AddButton = withStyles(() => ({
  root: {
    textTransform: "none !important",
    color: "white !important",
    backgroundColor: "#009A6B !important",
    padding: "10px !important",
    borderRadius: "23px !important",
    outline: "none !important",
    fontSize: "14px !important",
    fontWeight: "500!important",
    width: "154px !important",
    height: "46px !important",
  },
}))(Button);

export const ActionButton = withStyles(() => ({
  root: {
    textTransform: "none !important",
    color: "green !important",
    padding: "10px !important",
    borderRadius: "8px !important",
    border: "1px solid green !important",
    outline: "none !important",
    fontSize: "14px !important",
    fontWeight: "500!important",
    width: "154px !important",
    height: "46px !important",
  },
}))(Button);
