import React from "react";
import styles from "./About.css";
import about_img from "./images/aboutUs.jpeg";
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
const About = () => {
  return (
    <>
      <div
        className={styles.example}
        style={{ backgroundColor: "#fff" }}
        id="about-doctors"
      >
        <div className="about_section_container">
          <h2 className="about_title">
            <span className="about_title_logo">
              <i class="fa-solid fa-angles-right"></i>
            </span>
            About US
          </h2>
          <div className="about_container">
            <div className="about_image">
              <img src={about_img} alt="about img" />
            </div>
            <div className="about_infos">
              <p className="about_short_descrp">
                Your Trusted Partner for Dental Health
              </p>
              <p className="about_long_descrp">
                We wanted to create a modern oral health clinic focused on the
                dental experience that we wanted to make more accessible,
                affordable and cheaper. And of course - we offer high-quality
                treatments.
              </p>

              <Grid
                container
                gap={7}
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  item
                  xs={5}
                  sx={{
                    paddingTop: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "90px",
                      height: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#02272b",
                    }}
                  >
                    <PeopleAltOutlinedIcon
                      sx={{ color: "white", height: "50%", width: "50%" }}
                    />
                  </Box>

                  <Box sx={{ paddingY: 2 }}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Experienced Dentist
                    </Typography>
                    <Typography sx={{ textAlign: "left", color: "gray" }}>
                      Our qualified dental nurses and dentists are dedicated and
                      ready to provide superior treatment
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    paddingTop: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "90px",
                      height: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#02272b",
                    }}
                  >
                    <ThumbUpAltOutlinedIcon
                      sx={{ color: "white", height: "50%", width: "50%" }}
                    />
                  </Box>

                  <Box sx={{ paddingY: 2 }}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Affordable Pricing
                    </Typography>
                    <Typography sx={{ textAlign: "left", color: "gray" }}>
                      At our clinic, in addition to all individual services with
                      known prices, you can also choose service packages that
                      give you additional discounts.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
