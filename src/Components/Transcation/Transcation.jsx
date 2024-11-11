import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img2 from "../Assets/rt2.svg";
import img3 from "../Assets/lqfirspeak-3.svg";
import img4 from "../Assets/lqfirspeak-2.svg";
import img5 from "../Assets/Group-46-1.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

// import './styles.css';

// import required modules
import {} from "swiper/modules";
import "./Transcation.css";

import manta_1 from "../Assets/modol.jpeg";

export default function Transcation() {
  const swiperRef = useRef();

  return (
    <div className="main_transcaion_page">
      <div className="container       pb-5 ">
        <div className="row trans_sc pt-5">
          <h1 className="text-center site_font txt_clr">
            The Realspad(Reals Token) Ecosystem
          </h1>
          {/* <div className="col-md-5 pad_side">
            <div className="trans_conent">
         
            </div>
            <div className="arrow_group">
              <div className="box_arrow me-3">
                <FaArrowLeftLong
                  style={{ fontSize: "1.3rem" }}
                  onClick={() => swiperRef.current.slidePrev()}
                />
              </div>
              <div
                className="box_arrow"
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaArrowRightLong style={{ fontSize: "1.3rem" }} />
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-7 pad_side mt-3 mt-md-0 bg_card">
            <>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },  
                }}
              
                modules={[]}
                className="mySwiper"
              >
                <SwiperSlide>
                 
                </SwiperSlide>
                <SwiperSlide>
                
                </SwiperSlide>
                <SwiperSlide>
              
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                 
                </SwiperSlide>
              </Swiper>
            </>
          </div> */}
          <div className="col-md-3">
            <div className="trns_box_content text-start">
              <div className="card_first_img">
                <img src={img5} alt="" />
              </div>

              <h6>Commercial Agricultural Land Development</h6>
              <p>
                Produce property openings for votes to be suitable to use land
                for business structures, complexes & for Hi-tech Agriculture.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0">
            <div className="trns_box_content text-start">
              <div className="card_first_img">
                <img src={img4} alt="" />
              </div>

              <h6>Multi Family Dwelling Units</h6>
              <p>
                Build new townhomes, condominiums, modular homes, and apartment
                complexes that are designed for families and individualities.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0">
            <div className="trns_box_content text-start">
              <div className="card_first_img">
                <img src={img3} alt="" />
              </div>

              <h6>Zero- Emission Homes</h6>
              <p>
                Designed with grid tied solar panels and watertight
                sequestration, which results in an energy efficient and carbon
                free terrain.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0">
            <div className="trns_box_content text-start">
              <div className="card_first_img">
                <img src={img2} alt="" />
              </div>

              <h6>Business Complexes</h6>
              <p>
                Produce and make architectures in the form of forecourts, strip
                promenades, and shopping centers to allow companies to strive
                for growth.
              </p>
            </div>
          </div>

          <div className="clr_bg"></div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pad_side">
            <img src={manta_1} className="manta_img" alt="" />
          </div>
          <div className="col-md-6 pad_side mt-3 mt-md-0">
            <h6
              className="site_font fw-bold txt_clr  "
              style={{ fontSize: "32px" }}
            >
              Assets backed by REALS TOKEN that are real properties
            </h6>
            <p className="site_font fw-normal txt_clr  ">
              Realspad sets itself apart by establishing a foundation for its
              REALS TOKEN in tangible property assets, thereby furnishing
              investors with an additional layer of security and worth to the
              token. By bridging the divide between conventional real estate
              investments and the world of cryptocurrencies, this novel strategy
              provides investors with a transparent and secure way to invest in
              real estate.
            </p>
            <div className="mt-2 d-flex flex-column flex-md-row gap-2 ">
              <a href="#buy_tokens" className="text-decoration-none">
              <button className="b_mnta site_font ">Buy REALS Tokens</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
