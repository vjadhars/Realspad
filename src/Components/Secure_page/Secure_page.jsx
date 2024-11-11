import React from "react";
import "./Secure_page.css";
import Secure from "../Assets/Secure.png";

export default function Secure_page({raise}) {
  return (
    <div className="main_secure_page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-center">
            <h3 className="se_head">

              <img src={Secure} alt="" className="me-5" />
              <span>100% Secure</span>
            </h3>
          </div>
          <div className="col-md-5 text-center">
            <p className="se_para">
            The smart contract has been audited by blockchain security specialist Solid Proof.
            </p>
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-md-4">
            <div className="black_box">
              <h1>6</h1>
              <p>Total Stages</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box resvers">
              <h1>${(raise)}</h1>
              <p>Amount Raised</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box">
              <h1>6,000,000</h1>
              <p>Total token availible for sale</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
