import {
  Button,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  Input,
  InputAdornment,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import logo from "../../../images/nav-logo.png";
import { NavBookRequestButton } from "../../../Styles/globalStyled";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  root: {
    fontSize: 30,
    minHeight: "7vh",
    height: "100%",
    background: "#181C32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",

    "@media(max-width: 1200px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center ",
    },
  },
  navbody: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "50px",

    "@media(max-width: 899px)": {
      padding: "50px 20px",
      flexDirection: "column",

      "& a": {
        display: "block",
        marginBottom: 20,
        "&:last-child": {
          marginBottom: 0,
        },
      },
    },
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
  burger: {
    "& .MuiSvgIcon-root": {
      width: "1.5em !important",
      height: "1.5em !important",
      color: "red !important",
    },
  },
  drawer: {
    "& .MuiPaper-root": {
      width: "230px",
      height: "100%",
      minHeight: "100vh",
      backgroundColor: "#000",
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

  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerHandler = (state) => {
    setOpenDrawer(state);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xl={10} lg={11} md={11} sm={11} xs={12}>
        <Grid container className={classes.root1}>
          <Grid item xl={6} lg={4} md={4}>
            <Box mt={1}>
              <img src={logo} alt="" />
            </Box>
          </Grid>
          <Grid item xl={6} lg={8} md={8}>
            <Hidden mdDown>
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
            </Hidden>
          </Grid>

          <SwipeableDrawer
            anchor="right"
            open={openDrawer}
            className={classes.drawer}
            onClose={() => drawerHandler(false)}
            onOpen={() => drawerHandler(true)}
          >
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
            z
          </SwipeableDrawer>

          <Box>
            <Hidden mdUp>
              <IconButton onClick={() => drawerHandler(true)}>
                <MenuIcon className={classes.burger} sx={{ color: "white" }} />
              </IconButton>
            </Hidden>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
