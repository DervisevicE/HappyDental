import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import Spinner from "../Components/Spinner";

import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const role="PATIENT";
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        firstName,
        lastName,
        role,
        email,
        password,
      });
      setLoading(false);
      toast.success("Registration successful!");
      navigate("/login_user");
    } catch (error) {
      setLoading(false);
      toast.error("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 14,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "30%",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 6,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                Sign Up
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "18px",
                }}
              >
                Create your Account
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>

          <Box sx={{ paddingTop: 16 }}></Box>

          <Grid item xs={12} sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#02282b",
                padding: 1,
                width: "100%",
                color: "white",
                marginBottom: "10px",
                borderColor: "#02282b",
                "&:hover": {
                  backgroundColor: "#01585b",
                },
              }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Create Account"}
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ width: "100%" }}>
            <Typography>
              Already have an account?{" "}
              <HashLink
                to={"/login_user"}
                style={{ borderBottom: "none", textDecoration: "none" }}
              >
                <span style={{ color: "#02282b", textTransform: "uppercase" }}>
                  Log in
                </span>
              </HashLink>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default Register;
