import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Menu,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import React from "react";
import logo from "../../../images/nav-logo.png";
import { NavBookRequestButton } from "../../../Styles/globalStyled";

const useStyles = makeStyles({
  root: {
    fontSize: 30,
    height: "7vh",
    background: "#181C32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbody: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "50px",
  },
  profile: {
    color: "black !important",
  },
  textField: {
    // '& .Mui'
    "&:before": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.38) !important",
    },
    "& .MuiInput-root": {
      color: "white !important",
      borderBottom: "1px solid rgba(255, 255, 255, 0.5) !important",

      "& .svg": {
        color: "rgba(255, 255, 255, 0.38) !important",
      },
    },
    "&  .MuiSvgIcon-root": {
      color: "rgba(255, 255, 255, 0.38) !important",
    },
    "&  .MuiInput-input": {
      color: "rgba(255, 255, 255, 0.38) !important",
    },
    "& .MuiInput-root:before": {
      borderBottom: "1px solid white !important",
    },
    "& .MuiInput-root:after": {
      borderBottom: "1px solid white",
      color: "#fff !important",
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.3) !important",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "&:hover": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.5);",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.root}>
      <Grid item lg={11} md={11} sm={11} xs={12}>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Box mt={1}>
              <img src={logo} alt="" />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Box textAlign="right" className={classes.navbody}>
              <NavBookRequestButton>Book Requested</NavBookRequestButton>
              <Typography sx={{ color: "white" }}>Generate Report</Typography>
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
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                //   aria-expanded={open ? "true" : undefined}
                startIcon={<KeyboardArrowDownIcon />}
                className={classes.profile}
              >
                {/* {Kazal?.name}
              {open ? <ExpandLess /> : <ExpandMore />} */}
                <Stack direction="row" mr={1}>
                  <Avatar alt="Remy Sharp" src="" />
                </Stack>
              </Button>
              {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu> */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
