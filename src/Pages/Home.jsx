import React, { useState } from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../Pages/images/slide_one.png";
import { HashLink } from "react-router-hash-link";
import Background from "./images/DentalClinic-cover.jpeg";

const Home = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };

  return (
    <>
      <section
        id="home"
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(7, 63, 65, 0.8), rgba(4, 62, 66, 0.8)), url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop:120,
          paddingBottom:120,
          height:"100%",
          minHeight:"100vh"
        }}
      >
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image" style={{ visibility: "hidden" }}>
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "#f5f5f5",
                    paddingTop: 22,
                  }}
                >
                  Your smile, Our priority.
                </h2>
                <p style={{ color: "white", paddingTop: 22 }}>
                  We offer all general and specialist dental treatments. You can
                  easily book the chosen treatment on this website. If you
                  suspect caries or that you require a more extensive treatment,
                  you should book a dental examination and thorough cleaning.
                  Welcome to Happy Dental Clinic!
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    paddingTop: 22,
                  }}
                >
                  <HashLink
                    to="/register"
                    style={{
                      width: "150px",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                      }}
                    >
                      Sign up
                    </button>
                  </HashLink>

                  <HashLink
                    to="/login_user"
                    style={{
                      width: "150px",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                      }}
                    >
                      Log in
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            {/* <div className="basic_info" id="info_01">
              <h2>Flexible Schedule</h2>
              <p>
                We work on holidays, besides working late on regular days. In
                case of emergencies we accept bookings.
              </p>

              <HashLink
                to={"/register"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"> Chat with Doctor</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Best Price Guarantee</h2>
              <p>
                Our reasonable prices made thousands of people smile with a new,
                beautiful, irresistible smile, as never before!!
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Read More</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Opening Hours</h2>
              <p>
                Monday – Saturday : 10.00 am – 10.00 pm Sunday : 5.00 pm – 10.00
                pm
              </p>

              <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </HashLink>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
