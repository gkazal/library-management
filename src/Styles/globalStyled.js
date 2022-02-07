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