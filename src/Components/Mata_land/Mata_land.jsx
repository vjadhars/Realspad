import React from 'react'
import "./Mata_land.css"
import mata_l from "../Assets/home_h.png"
import coin_logo from "../Assets/FooterLogo.png"
export default function Mata_land() {
  return (
    <div className='main_mata_land'>
    <div className="container">
        <div className="row align-items-center  ">
            <div className="col-md-6 right_text">
                {/* <h5>Explore ZK with</h5>
                <h5 className='fw-bold'>THE FIRST AND LARGEST</h5>
                <h5>MODULAR L2</h5>

                <h6>Manta Pacific Mainnet is Live</h6>
                <p>Manta Pacific is the first EVM-equivalent ZK-application platform that is scalable and secure through Celestia DA and Polygon zkEVM.</p> */}
                <div className="main_div_Text">
                {/* <img src={coin_logo} style={{width:"150px"}} className='mb-2' alt="" /> */}
                  <h5 className="text-left txt_clr">
                    <span >
                      <p className='fw-bold' style={{ fontSize: "2.14rem" }}>
                      Realspad - Reals Tokens, Where Real Estate meets crypto to build a best future.., 
                      {/* "REALS Tokens, Where Real Estate meets crypto to build a best future */}
                      </p>
                    </span>
                  </h5>
                  <h6 className="site_font txt_clr">
                    <span style={{ fontSize: "2rem" }}>
                      <em>“Building a best future for </em>
                      <em>your Investments..,”</em>
                    </span>
                  </h6>

                  <div>
                    <p className="site_font mt-3 text-truncate  fw-bold txt_clr ">Contract Address: <span className='fw-normal' >0x69f6b1bddf363f532261922a96bbcb16f33470df</span></p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src={mata_l} className='rounded mata_home_page w-100' alt="" />
            </div>
        </div>
    </div>

    </div>
  )
}
