import React, { useState } from "react";
import logo_img from "./images/logo.png";
import { HashLink } from "react-router-hash-link";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";
import Logo from "./images/happydental.png";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h2>
            <strong>HAPPY</strong>DENTAL
          </h2>
        </div>
        <div
          className={isActive ? "active_links" : "links"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="MenuItems">
              <HashLink to="/#home" onClick={closeMobileMenu}>
                Home
              </HashLink>
            </div>
            <div className="MenuItems">
              <HashLink to="/#about-doctors" onClick={closeMobileMenu}>
                About
              </HashLink>
            </div>
            <div className="MenuItems">
              <HashLink to="/#our-services" onClick={closeMobileMenu}>
                Treatments
              </HashLink>
            </div>
            <div className="MenuItems">
              <HashLink to="/#contact-us" onClick={closeMobileMenu}>
                Contact
              </HashLink>
            </div>
            <div className="MenuItems bgMenu" id="Appointment_menu">
              <HashLink to="/dental-clinic/slot" onClick={closeMobileMenu}>
                Appointment
              </HashLink>
            </div>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div
          className="MenuItems"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <HashLink to="/register" onClick={closeMobileMenu}>
            Register
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
