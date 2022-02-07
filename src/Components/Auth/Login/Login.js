import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import image from "../../../images/login-background.png";
import logo from "../../../images/logo.png";

const useStyles = makeStyles({
  library: {
    color: "green",
  },
  loginBody: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",

    background: `url(${image}) no-repeat bottom center`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signInBody: {
    backgroundColor: "#FFFFFF",
    boxShadow: " 0px 8px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.11)",
  },
  innerBody: {
    backgroundColor: "#FFFFFF",
    boxShadow: " 0px 8px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    padding: "60px",
  },
  logButton: {
    backgroundColor: "#009A6B!important",
    boxShadow: " 0px 5px 4px rgba(218, 15, 15, 0.15)",
    color: "white !important",
    padding: "15px !important",
    marginTop: "30px !important",
    textTransform: "none !important",
    width: "150px",
  },
  tabBox: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    width: "100% !important",
    marginLeft: "0px !important",
    display: "flex",
    justifyContent: "space-around",
  },
  activeTab: {
    position: "relative",
    color: "#009A6B",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      //   minWidth: "300px",
      height: 3,
      borderRadius: 8,
      backgroundColor: "#258E00",
    },
  },
});

const Login = () => {
  const classes = useStyles();

  const [form, setForm] = useState({
    name: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const fieldChangeHandler = (field, value) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const [field, setField] = useState("student");
  const handleStudent = () => {
    setField("student");
  };
  const handleLibrarian = () => {
    setField("librarian");
  };

  return (
    <Box className={classes.loginBody}>
      <Grid container justifyContent="center">
        <Grid item xl={4} lg={6} md={8} sm={10} xs={12}>
          <Box textAlign="center">
            <img src={logo} alt="" />
            <Typography sx={{ color: "rgba(0, 0, 0, 0.34)" }}>
              Smart Library Management System
            </Typography>
          </Box>

          <Box className={classes.signInBody} mt={3}>
            <Grid container spacing={2} className={classes.tabBox}>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                onClick={handleStudent}
                className={field === "student" && classes.activeTab}
              >
                <Typography align="center" sx={{ padding: "20px" }}>
                  Login
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                onClick={handleLibrarian}
                className={field === "librarian" && classes.activeTab}
              >
                <Typography align="center" sx={{ padding: "20px" }}>
                  Librarian Login
                </Typography>
              </Grid>
            </Grid>
            <Box className={classes.innerBody}>
              <Typography mb={1} mt={2}>
                User Name
              </Typography>
              <TextField
                className={classes.textField}
                placeholder="Your Name"
                variant="outlined"
                fullWidth
              />
              <Typography mb={1} mt={2}>
                Password
              </Typography>
              <TextField
                className={classes.textField}
                placeholder="*********"
                type={form.showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {form.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                variant="outlined"
                // value={form.password}
                onChange={(e) => fieldChangeHandler("password", e.target.value)}
                fullWidth
              />

              <Box>
                <Button
                  className={classes.logButton}
                  StyledButton
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
