import React from "react";
import logo from "../assets/logo.svg";
import person from "../assets/person.svg";
import email from "../assets/email.svg";
import star from "../assets/star.svg";
import bag from "../assets/bag.svg";
import globe from "../assets/globe.svg";

const Header = () => {
  return (
    <div className="h-div">
      <div className="d-flex ms-3">
        <img src={logo} alt="logo" />
        <h2 className="ms-2">Archslate</h2>
      </div>

      <div className="h1-div">
        <div className="text-center">
          <img src={star} alt="star" />

          <p>Candidates</p>
        </div>
        <div className="text-center">
          <img src={globe} alt="globe" />

          <p>Componies</p>
        </div>
        <div className="text-center">
          <img src={bag} alt="globe" />

          <p>Jobs</p>
        </div>
        <div className="text-center">
          <img src={email} alt="globe" />

          <p>Notification</p>
        </div>
        <div className="text-center">
          <img src={person} alt="globe" />

          <p>User Name</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
