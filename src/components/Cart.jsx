import React from "react";
import location from "../assets/location.svg";
import dollar from "../assets/dollar.svg";
import star from "../assets/star.svg";
import s from "../assets/s.svg";

const Cart = () => {
  return (
    <div className="cart-div mx-5">
      <div className="c">
        <img src={s} alt="loc" />

        <h3 className="ms-3">Software skills</h3>
        <div className="d-flex ms-3 mt-3">
          <div className="skill">Rhina</div>
          <div className="skill ms-2">sketchup</div>
        </div>

        <div className="skill ms-5 mt-4">Vectorworks</div>
      </div>
      <div className="c">
        <img src={star} alt="loc" />

        <h5 className="ms-3">Experience</h5>
        <p className="ms-3">Associate 3+ years</p>
      </div>
      <div className="c">
        <img src={dollar} alt="loc" />

        <h5 className="ms-3">Rate</h5>
        <p className="ms-3">$55-$65/hour</p>
      </div>
      <div className="c">
        <img src={location} alt="loc" />
        <h5 className="ms-3">Location</h5>
        <p className="ms-3">Boszeman MT , USA</p>

        <div className="on mx-auto">On site</div>
      </div>
    </div>
  );
};

export default Cart;
