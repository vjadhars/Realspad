import React from "react";
import "./Real_spad_road.css";
import where from "../Assets/timeline.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
    import road1 from "../Assets/road1.jpeg"
    import road2 from "../Assets/road2.jpeg"


export default function Real_spad_road() {
  return (
    <>
      <div className="py-5" id="Timeline">
        <div className="container">

        {/* <h1 className="lower_tkn pb-4">Realspad (Reals Token) ROADMAP</h1> */}
{/* 
          <>
            <Swiper
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
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                
                
              }}
              loop={true}
               autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="road_box">
                  <p>
                    Set up Website with <br />
                    blog & Newsletter
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p>
                    Launch App for <br /> earnings{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p>
                    Release whitepaper to <br /> blockchain Community
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p>Send out newsletters </p>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p>Website & System Security </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p> Talk to Big Exchanges</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="road_box">
                  <p>
                    NFT Launch & Airdrops <br /> Distributions{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
             
              <div className="road_box">
                <p>
                  Crowdfunding launch <br /> for ICO
                </p>
              </div>
            
              </SwiperSlide>
              <SwiperSlide>
             
              <div className="road_box">
                <p>
                  Dapps developments For <br /> Staking & rewards
                </p>
              </div>
           
              </SwiperSlide>
            </Swiper>
          </> */}

      
        </div>
      </div>

      <div className="main_real_spad_rod">
      <h1 className='site_font my-2 mb-4 txt_clr text-center'> Realspad Timeline</h1>

        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-md-4">
              <h4 className="site_font fs-3 fw-bold text-white text-start">
                Where We Are Today
              </h4>
              <p className="site_font  text-white text-start">
                The suite of core Manta products provide all of the fundamental
                functionality for all Modular and Zero-knowledge features in the
                network.
              </p>
            </div>
            <div className="col-md-8">
              <img
                src={where}
                className="w-100 "
                style={{ borderRadius: "15px " }}
                alt=""
              />
            </div>
          </div> */}
          <>
            <Swiper
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
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                
                
              }}
              loop={true}
               autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
               <img src={road1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={road2} alt="" />
             
              </SwiperSlide>
              <SwiperSlide>
               <img src={road1} alt="" />
              </SwiperSlide>
            
            
            
            </Swiper>
          </> 
        </div>
      </div>
    </>
  );
}
