import React from "react";
import LowerFooter from "../Components/LowerFooter";
import "./Contact.css";
import { Grid, Box, Typography, Divider } from "@mui/material";

import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: "Monday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 2,
      c_day: "Tuesday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 3,
      c_day: "Wednesday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 4,
      c_day: "Thursday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 5,
      c_day: "Friday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 6,
      c_day: "Saturday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 7,
      c_day: "Sunday",
      c_time: "5:00 PM-9:00 PM",
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <Box>
            <iframe
              title="gmap_location"
              class="gmap_iframe"
              width="700px"
              height="500px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92005.32922417123!2d18.300590927757302!3d43.89381740407832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cbb1ed719bd1%3A0x562ecda6de87b33e!2sSarajevo%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sus!4v1714298795944!5m2!1sen!2sus"
            ></iframe>
          </Box>
          <div className="basic_contact_user_form">
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                  paddingY: 2,
                }}
              >
                <Grid item xs={1}>
                  <PlaceIcon
                    sx={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>
                    {" "}
                    71000, Sarajevo, Bosnia and Herzegovina
                  </Typography>
                </Grid>
              </Grid>
              <Divider />

              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                  paddingY: 2,
                }}
              >
                <Grid item xs={1}>
                  <LocalPhoneIcon
                    sx={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Get in Touch
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography> +387 33 222 222</Typography>
                  <Typography>hi@happydental.com</Typography>
                </Grid>
              </Grid>
              <Divider />

              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                  paddingY: 2,
                }}
              >
                <Grid item xs={1}>
                  <CalendarMonthIcon
                    sx={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Hours
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography> Mon to Fri</Typography>
                    <Typography>8:00 am - 6:00 pm</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography> Sat </Typography>
                    <Typography>9:00 am - 2:00 pm</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography> Sun </Typography>
                    <Typography>9:00 am - 2:00 pm</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
              Om Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
