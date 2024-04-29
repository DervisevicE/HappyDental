import React, { useState } from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
// import "./BookingHours.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

const BookingHours = () => {
  const url = "https://dental-service.onrender.com/dental-clinic/slot";
  const navigate = useNavigate();
  const [loader, setLoader] = useState("none");
  const [activeUser, setActiveUser] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
    time: "",
  });
  const [btn, setBtn] = useState(0);
  const [aces, setACES] = useState(-1);
  const [ace, setACE] = useState(-1);
  const doctorsData = [
    { name: "John Doe", something: "some" },
    { name: "Mummy Bummy", something: "dome" },
  ];

  const today = dayjs();
  const currentTime = dayjs().add(1, "minute").format("HH:mm");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Typography>Doctor</Typography>
            <Autocomplete
              freeSolo
              id="combo-box-demo"
              options={doctorsData}
              getOptionLabel={(option) => option.name}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Please select" />
              )}
            />
          </Grid>
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Typography>Date</Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={today}
                disablePast
                views={["year", "month", "day"]}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sx={{ width: "100%" }}>
            <Typography>Time</Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                defaultValue={dayjs()
                  .hour(currentTime.split(":")[0])
                  .minute(currentTime.split(":")[1])}
                disablePast
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Grid>

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
            >
              Book Appointment
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ width: "100%" }}>
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
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingHours;
