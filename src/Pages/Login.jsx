import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from 'axios';
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Spinner from "../Components/Spinner";

import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Autocomplete,
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

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", { 
        email, 
        password 
      });
      const token = response.data;
      localStorage.setItem('token', token);
      toast.success('Prijava uspešna!');
      navigate('/#home');  // Preusmeravanje na home stranicu
    } catch (error) {
      toast.error('Greška pri prijavi: ' + (error.response?.data?.message || error.message));
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
                paddingBottom:6
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                Log in
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "18px",
                }}
              >
                Sign in to your account
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
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
            >
              Log in
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ width: "100%" }}>
            <HashLink to="/register">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  padding: 1,
                  color: "#02282b",
                  borderColor: "#02282b",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                Create new Account
              </Button>
            </HashLink>
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default Login;
