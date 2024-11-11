import React from "react";
import "./Tokennomics.css";
import { FaArrowRightLong } from "react-icons/fa6";
import circule from "../Assets/circle.svg";
import ch from "../Assets/pie.png"

export default function Tokennomics() {
  const handleCopyAddress = () => {
    // Find the text element
    const addressText = document.querySelector(".tokn_add");

    // Create a textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = addressText.innerText;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide user feedback (e.g., alert or tooltip)
    alert("Address copied to clipboard!");
  };

  return (
    <div className="token_nomics_main " id="Tokenomics">
      <div className="container">
        <h6 className="upper_tkn">Tokenomics</h6>
        <h1 className="lower_tkn">Token information</h1>
      <div className="row justify-content-center mt-5">
       <div className="col-md-8">

            <img src={ch} className="w-100" alt="" />
       </div>
          </div>
          {/* <div className="col-md-5">
  <div className="row small_pading justify-content-center">
    <div className="pbulcos col-6 mbll_cn col-md-4">
      <p className="percentage_totken ">45%</p>
      <p className="areab_nae">Publics sales </p>
    </div>
    <div className="pbulcos private mbll_cn col-6 col-md-4">
      <p className="percentage_totken ">15%</p>
      <p className="areab_nae">Private sales </p>
    </div>
  </div>
  <div className="row small_pading justify-content-center mt-3">
    <div className="pbulcos  market mbll_cn  col-6 col-md-4 ">
      <p className="percentage_totken ">10%</p>
      <p className="areab_nae">Marketing </p>
    </div>
    <div className="pbulcos  techn  mbll_cn col-6 col-md-4 private">
      <p className="percentage_totken ">4%</p>
      <p className="areab_nae">Technical </p>
    </div>
  </div>
  <div className="row small_pading justify-content-center mt-3">
    <div className="pbulcos advs  mbll_cn  col-6 col-md-4">
      <p className="percentage_totken ">1%</p>
      <p className="areab_nae">Advisor </p>
    </div>
    <div className="pbulcos private  mbll_cn liqu  col-6 col-md-4">
      <p className="percentage_totken ">10%</p>
      <p className="areab_nae">Liquidity </p>
    </div>
  </div>
  <div className="row small_pading justify-content-center mt-3">
    <div className="pbulcos col-6 col-md-4  mbll_cn airdrop ">
      <p className="percentage_totken ">1%</p>
      <p className="areab_nae">Airdrop </p>
    </div>
    <div className="pbulcos holdings mbll_cn col-6 col-md-4">
      <p className="percentage_totken  ">14%</p>
      <p className="areab_nae">Holdings </p>
    </div>
  </div>
</div> */}

    
    
      </div>
    </div>
  );
}
