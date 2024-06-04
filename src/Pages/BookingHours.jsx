import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
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
  const [doctors, setDoctors] = useState([]);
  const [appointmentDateTime, setAppointmentDateTime] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      appointmentDateTime: "2024-06-06T14:30:00",
      doctorId: parseInt(doctorId),
      patientId: 1,
    };
    console.log('app data', appointmentData);
    try {
      const response = await fetch('http://localhost:8080/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      console.log('podaci', response.data)
      if (response.ok) {
        console.log('Appointment created successfully');
        toast.success('Appointment created successfully', { position: "top-right" });
      } else {
        console.error('Failed to create appointment');
        toast.error('Failed to create appointment', { position: "top-right" });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/doctors');
      setDoctors(response.data.content);
      console.log('doctori su ovdje', response.data.content)

    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/#home');
  };
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
              options={doctors}
              getOptionLabel={(option) => `${option.specialization}`}
              onChange={(event, newValue) => {
                if (newValue) {
                  setDoctorId(newValue.id);
                } else {
                  setDoctorId(null);
                }
              }}
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
              onClick={handleSubmit}
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
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </Box>
    </>
  );
};

export default BookingHours;
