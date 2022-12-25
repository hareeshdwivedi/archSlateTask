import React from "react";
import man from "../assets/man.svg";
import email2 from "../assets/email2.svg";

const CartPoster = () => {
  return (
    <div className="crt">
      <strong className="ms-3 ">Job Poster</strong>

      <div className="d-flex ms-3 mt-4">
        <img src={man} alt="man" />

        <div>
          <p>John Carbos</p>
          <strong>Project Manager</strong>
        </div>
      </div>

      <button className="msg mt-3 ms-4">
        <img src={email2} alt="share2" className="me-2" />
        Message
      </button>
    </div>
  );
};

export default CartPoster;
