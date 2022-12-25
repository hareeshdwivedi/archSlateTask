import React from "react";
import star3 from "../assets/star3.svg";
import share2 from "../assets/share2.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="mt-5">
        <strong>About this role</strong>
        <p>
          About this role Short overview about job and the way that the
          candidate would fit into the company. Can also include extra
          instructions for the application process if any exist.
          Responsibilities specific day to day taks deliverables work
          environment requirements role within the current team etc. Skills
          software skills technical skills soft skills other Qualifications
          Required education licenses and certifications experience needed Bonus
          education licenses and certifications experience needed Rate if
          available Time Estimate if applicable Work Autoriation tbd About
          Company Description of company with any uniform info or disclaimers -
          equal hiring opportunity, etc.
        </p>
      </div>
      <div>
        <strong>Responsibilites</strong>
        <ul>
          <li>specific day to day take</li>
          <li>deliverables</li>
          <li>work environment</li>
          <li>role within the team</li>
          <li>etc</li>
        </ul>
      </div>
      <div>
        <strong>Skills</strong>
        <ul>
          <li>Soft Skills</li>
          <li>Texhnical skills</li>
          <li>Software skill</li>
          <li>etc</li>
        </ul>
      </div>
      <div>
        <strong>Qualifications</strong>
        <p>Rquired</p>
        <ul>
          <li>Education</li>
          <li>licences and certifications</li>
          <li>Software skill</li>
          <li>experience needed</li>
        </ul>
        <p>Bouns</p>
        <ul>
          <li>Education</li>
          <li>licences and certifications</li>
          <li>Software skill</li>
          <li>experience needed</li>
        </ul>
      </div>
      <div>
        <strong>Rate</strong>
        <ul>
          <li>if available</li>
        </ul>
      </div>
      <div>
        <strong>Time Estimate</strong>
        <ul>
          <li>if available</li>
        </ul>
      </div>
      <div>
        <strong>Work Autoriation</strong>
        <ul>
          <li>tbd</li>
        </ul>
      </div>
      <div>
        <strong>About the company</strong>
        <p>
          About this role Short overview about job and the way that the
          available Time Estimate if applicable Work Autoriation tbd About
          Company Description of company with any uniform info or disclaimers -
          equal hiring opportunity, etc.
        </p>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <button className="apply">Apply on Archslate</button>
        </div>
        <div>
          <button className="save-btn">
            <img src={star3} alt="star" className="me-2" />
            Save
          </button>
        </div>
        <div>
          <button className="share-btn">
            <img src={share2} alt="share2" className="me-2" />
            Share and refer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
