import React from "react";
import logoimg from "../assets/logoimg.svg";
import share from "../assets/share.svg";
import save from "../assets/save.svg";

const HeaderTwo = () => {
  return (
    <div className="h22-div mx-auto d-flex justify-content-between">
      <div>
        <div className="d-flex ">
          <div>
            <img src={logoimg} alt="logo" />
          </div>
          <div className="ms-4">
            <h1>Architectural Designer</h1>
            <p>Black Mountain Architectural</p>
            <p>Posted 24/12/2022</p>
          </div>
        </div>
        <div className="mt-5">
          <button className="arc-btn">Architecture</button>
          <button className="fr-btn">Freelance</button>
          <button className="lo-btn">Long Term</button>
        </div>
      </div>

      <div className="me-4 mt-3 d-flex flex-column align-items-center">
        <div>
          <img src={save} alt="s" className="me-4" />
          <img src={share} alt="s" />
        </div>
        <div className="mt-3">
          <h4 className="status">Status: Accepting Applications</h4>
        </div>
        <div className="mt-5">
          <button className="apply">Apply on Archslate</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
