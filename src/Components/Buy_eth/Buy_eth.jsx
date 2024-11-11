import React from "react";
import "./Buy_eth.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pth from "../Assets/Pyth.png";
import ori from "../Assets/orbiter.png";
import ozi from "../Assets/iZUMi.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import gal from "../Assets/Galxe.png";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
export default function Buy_eth() {
  return (
    <>
      <div className="  py-5  " id="how_to_buy" style={{ marginTop: "25px" }}>
        <div className="container">
          <h2 className="main_heading_buy lower_tkn">
            How To Buy Reals Token ? <span className="outline_eth"></span>
          </h2>

          <div className="text-center">
            <p className="site_font txt_clr">
              If you missed out on previous presale, you could join our presale
              and buy 10000 Reals tokens from a price ranging from 0.0011$ to
              0.30$. You don't want to miss out again, so take this chance and
              don't let the past repeat itself.{" "}
            
            </p>
            <p className="fw-bold text-truncate">
                {" "}
                $REALS Token Address:0x69f6b1bddf363f532261922a96bbcb16f33470df
              </p>{" "}
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="buy_main_box_here">
                <h4 className="site_font txt_clr">01. CONNECT </h4>
                <br></br>
                <ul className=" buy_ul ps-0">
                  <li>
                    Connect your Metamask or Trust wallet to the widget above
                    for easiest way to buy $REALS Tokens.$REALS is also listed
                    on Pancakeswap also.
                    <p className="text-truncate txt_clr site_font fw-bold mb-0">Contract address: <br />   <span className="fw-normal">0x69f6b1bddf363f532261922a96bbcb16f33470df</span></p>
                  </li>
                  <br></br>
                  {/* <li>
                  Using the BNB in your MetaMask or Trust Wallet, it’s an easy
                  token swap
                </li><br></br>
                <li>
                  Keep a small amount of BNB in your wallet to cover the minimal
                  gas fee.
                </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-4  mt-3 mt-md-0">
              <div className="buy_main_box_here">
                <h4 className="site_font txt_clr">02. PURCHASE </h4>
                <br></br>
                <ul className=" buy_ul">
                  <li>
                    Buy with BNB or USDC on the Binance Smart Chain. Enter the
                    quantity of BNB tokens to buy and click the purchase button.
                    A quick reminder to keep enough BNB in your wallet to pay
                    gas charges. Your wallet reserves 0.0026BNB (~$1) for GAS
                    expenses to prevent transaction failures.
                  </li>
                  <br></br>
                  {/* <li>
                Connect your wallet to the BSC network to pay with USDT
                </li><br></br>
                <li>
                Have enough BNB left over to pay the gas fee.
                </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-4  mt-3 mt-md-0">
              <div className="buy_main_box_here">
                <h4 className="site_font txt_clr">03. CLAIM </h4>
                <br></br>
                <ul className=" buy_ul">
                  <li>
                    After the final buying you can see your claimable tokens in
                    ready to claim and can claim those tokens at any time.
                    Please note that claiming and trading Realspad(Reals Token)
                    is possible ONLY via Binance network. Let’s moon together!
                  </li>
                  <br></br>
                  {/* <li>
                Connect your wallet to BSC chain and select USDC as a payment option
                </li><br></br>
                <li>
                Make sure you have BNB  to pay the gas fee.
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="d-flex justify-content-center mt-5">

                <button onClick={() => window.location.href = "#BuyNow"} className="button-24">Buy Now</button>
        </div> */}
        </div>
      </div>

 
      
      {/* <div className="eco_native" id="how_to_buy">
        <div className="container">
          <h1 className="txt_clr site_font fs-1 text-center pb-4">
            Ecosystem-Native Projects
          </h1>

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
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="slider_card">
              <div className="d-flex justify-content-start">
                <img
                  className="d-flex"
                  style={{ width: "94px" }}
                  src={gal}
                  alt=""
                />
              </div>
              <p className="fw-bold txt_clr fs-6 text-start ">
                SocialFi platform to build and grow web3 community
              </p>
            </SwiperSlide>
            <SwiperSlide className="slider_card">
              <div className="d-flex justify-content-start">
                <img
                  className="d-flex"
                  style={{ width: "94px" }}
                  src={ozi}
                  alt=""
                />
              </div>
              <p className="fw-bold txt_clr fs-6 text-start ">
                SocialFi platform to build and grow web3 community
              </p>
            </SwiperSlide>{" "}
            <SwiperSlide className="slider_card">
              <div className="d-flex justify-content-start">
                <img
                  className="d-flex"
                  style={{ width: "94px" }}
                  src={ori}
                  alt=""
                />
              </div>
              <p className="fw-bold txt_clr fs-6 text-start ">
                SocialFi platform to build and grow web3 community
              </p>
            </SwiperSlide>{" "}
            <SwiperSlide className="slider_card">
              <div className="d-flex justify-content-start">
                <img
                  className="d-flex"
                  style={{ width: "94px" }}
                  src={pth}
                  alt=""
                />
              </div>
              <p className="fw-bold txt_clr fs-6 text-start ">
                SocialFi platform to build and grow web3 community
              </p>
            </SwiperSlide>{" "}
            <SwiperSlide className="slider_card">
              <div className="d-flex justify-content-start">
                <img
                  className="d-flex"
                  style={{ width: "94px" }}
                  src={ori}
                  alt=""
                />
              </div>
              <p className="fw-bold txt_clr fs-6 text-start ">
                SocialFi platform to build and grow web3 community
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </>
  );
}
