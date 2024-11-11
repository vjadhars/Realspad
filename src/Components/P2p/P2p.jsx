import React from "react";
import "./P2p.css";
import imgg from "../Assets/image-7.png";
import Second from "../Assets/Group-53.png";
import firstP2p from "../Assets/firstP2p_Img.png";

export default function P2p() {
  return (
    <div className="">
      <div className="row row_p2p">
        <div className="col-md-6">
          <div className="P2p_first_div">
            <div className="inner_Div_first_P2p">
              <h2>
                High-Performance crypto <br /> loyalty blockchain
              </h2>
              <button>GET STARTED</button>
            </div>
            <div className="firstImage_div">
              <img src={firstP2p} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="P2p_second_div">
            <div className="inner_Div_second_P2p">
              <h2>
                P2P Lending & Staking <br /> Platform (DEX)
              </h2>
              <button>GET STARTED</button>
            </div>
            <div className="secondImage_div">
              <img src={Second} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
