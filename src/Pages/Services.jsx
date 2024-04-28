import React from "react";
import ServiceData from "./ServiceData";
import { Grid, Box, Typography, Paper } from "@mui/material";
import Tooth1 from "./images/tooth1.png";
import Tooth2 from "./images/tooth2.png";
import Tooth3 from "./images/tooth3.png";

import "./Services.css";
const Services = () => {
  return (
    <>
      <section id="our-services">
        <div className="services_container">
          <h2 className="services_header">
            <span>
              <i class="fa-solid fa-angles-right"></i>
            </span>
            Our Treatments
          </h2>
          <Grid
            container
            gap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop:10
            }}
          >
            <Grid item xs={3}>
              <Paper elevation={3} sx={{ paddingBottom: 10, borderRadius: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "#02282b",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: -35,
                    }}
                  >
                    <img
                      src={Tooth1}
                      alt="tooth1"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    paddingX: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                  >
                    Teeth Whitening
                  </Typography>

                  <Typography>
                    One-hour teeth whitening at our clinic under a dentist's
                    supervision or custom whitening splints and gels to use at
                    home for several days. These two methods may be combined.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper elevation={3} sx={{ paddingBottom: 10, borderRadius: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "#02282b",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: -35,
                    }}
                  >
                    <img
                      src={Tooth2}
                      alt="tooth2"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    paddingX: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                  >
                    Teeth Cleaning
                  </Typography>

                  <Typography>
                    Complete dental examination along with the removal of dental
                    calculus using ultrasonic technology and tooth polishing
                    with professional polishing pastes.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper elevation={3} sx={{ paddingBottom: 10, borderRadius: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "#02282b",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: -35,
                    }}
                  >
                    <img
                      src={Tooth3}
                      alt="tooth3"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    paddingX: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                  >
                    ICON Treatment
                  </Typography>

                  <Typography>
                    The ICON treatment is the first choice in therapy for
                    removing white spots on teeth. It represents a non-invasive
                    method, where there is no risk of damaging the natural tooth
                    tissue.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Services;
