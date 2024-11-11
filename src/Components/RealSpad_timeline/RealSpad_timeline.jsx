import React from 'react'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./RealSpad_timeline.css"

export default function RealSpad_timeline() {
  return (
    <div className='timeline_page py-5' id=''>
        <div className="container">
        <h1 className='site_font my-2 txt_clr text-center'> Realspad Timeline</h1>
        {/* <>
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
        //        autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
              modules={[Autoplay]}
              className="mySwiper mt-3"
            >
              <SwiperSlide>
                <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    1
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>May 2023</p>
                  <p className=' fw-normal txt_clr site_font'>Created WhitePaper & launched</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    2
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>July 2023</p>
                  <p className=' fw-normal txt_clr site_font'>Smart contract deployed & verified</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    3
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>March 2024</p>
                  <p className=' fw-normal txt_clr site_font'>official website launched & private sales started</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    4
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>April 2024</p>
                  <p className=' fw-normal txt_clr site_font'>Prsale and Airdrops started</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    5
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>June 2024</p>
                  <p className=' fw-normal txt_clr site_font'>Sales available at Pancakeswap also</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    6
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>Sept 2024</p>
                  <p className=' fw-normal txt_clr site_font'>Talking to Big Exchange and NFT Platform Creation</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    7
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>Nov 2024</p>
                  <p className=' fw-normal txt_clr site_font'>Exchange Launching    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
             
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    8
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>Dec 2024</p>
                  <p className=' fw-normal txt_clr site_font'>Real properties  backed NFT   Launching   and Distributions     </p>
                </div>
            
              </SwiperSlide>
              <SwiperSlide>
             
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    9
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>Jan 2025</p>
                  <p className=' fw-normal txt_clr site_font'>Properties backed for NFTs for Stake,Lease & Rent at locking periods to earn     </p>
                </div>
           
              </SwiperSlide>
              <SwiperSlide>
             
              <div className="road_box d-block">
                <div className='d-flex justify-content-center'>
                  <div className='time_line_nu'>
                    
                    10
                  </div>
                </div>
                  <p className='fs-5 fw-bold txt_clr site_font'>March 2025</p>
                  <p className=' fw-normal txt_clr site_font'>launch of own Blockchain for Reals coin        </p>
                </div>
           
              </SwiperSlide>
            </Swiper>
          </> */}

      
        </div>
    </div>
  )
}
