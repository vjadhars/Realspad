import React from 'react'
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Newsletter() {
  return (
    <div className='pt-5'>
         <div
        className="main_buy_eth"
        id="how_to_buy"
        style={{ marginTop: "25px" }}
      >
        <div className="container">
          <h1 className="txt_clr site_font fs-1 text-center pb-4">
            How to Spot a Good realtor?
          </h1>
          <p className="txt_clr site_font text-center">
            Tips on selecting a reliable realtor that will help you buy or sell
            a home..,
          </p>

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
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">1. Experience</h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                The proof is in the transactions. Handling multimillion-dollar
                sales can involve very complicated aspects, both on the listing
                and selling sides. When you hire your realtor, take a look at
                some of the properties they have sold. This will give you a
                better sense of how competent your realtor actually is.
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">
                2. Negotiation Skills
              </h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                When hiring an expert negotiator, review testimonials, online
                reviews, and feedback from prospective realtors. A realtor with
                a strong track record of effective representation, handling
                major transactions proficiently, and garnering positive client
                feedback will demonstrate their negotiation prowess openly.
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">
                3. Transparency
              </h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                A trustworthy agent understands your concerns and recognizes
                your need for reassurance. You should feel comfortable
                requesting references to gain further insight into your agent's
                background.
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">
                4.Global Recognition
              </h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                International firms such as Realspad Realty International
                exclusively recruit highly experienced, consistently successful
                agents. When agents associate themselves with renowned,
                reputable brands, you can rightfully expect superior service and
                expertise.
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">
                5.Market Knowledge
              </h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                A successful broker should possess an extensive, deep
                understanding of the market. They should be able to discuss
                various topics, analyze current news and industry developments,
                identify trends, and provide insights that aren't readily
                available online.
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card hw_slie d-block">
              <h6 className="site_font txt_clr fs-5 fw-bold">
                6.Community, National Affiliations
              </h6>
              <p className="fw-semibold txt_clr fs-6 text-start ">
                Experienced, skilled, and proactive agents are frequently
                engaged in their local communities and national organizations.
                Many transactions occur outside the public market listings,
                highlighting the importance of having an agent who is
                well-connected. Whether you're buying or selling, you need a
                representative who is poised to receive the first call about a
                desired property.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
<div className="eco_native">
<div className="container">
<div className="row justify-content-center">
      <div className="col-md-8 mt-3 mt-md-0">
          <p className="text-dark fw-bold text-uppercase fs-4  site_font text-center ">  Subscribe  for our latest news and updates</p>
      <div className="d-flex justify-content-center ">

          <input type="emial" className="letter_news w-75 w-md-100" placeholder="Enter Your Email" name="" id="" />
      <button className="subs_btn">Subscribe</button>


      </div>
          </div>
      </div>
</div>
</div>
    </div>
  )
}
