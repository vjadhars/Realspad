import React from "react";
import "./Footer.css";
import ffos from "../Assets/footer_img.jpeg";

import { FaDiscord, FaFacebook, FaTelegram, FaReddit, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import foot from "../Assets/FooterLogo.png";

import FooterLogo from "../Assets/Logo2.png";

import { Link,useLocation  } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
const currentPath = location.pathname;
  return (
    <div className="Main_footer_bg">
      <div className="container">
        <div className="row m-0">
          <div className="col-md-5">
            <div className="d-flex gap-2">
              <img src={foot} style={{ width: "15%" }} alt="" />
              <img src={FooterLogo} alt="" style={{ width: "25%" }} />
            </div>
            <div className="social_icons mt-2 d-flex gap-3">
              <div
                className="around_social"
                style={{ textDecoration: "none !important", color: "white" }}
              >
                <a
                  href="https://www.instagram.com/realspad"
                  target="_blank"
                  style={{ textDecoration: "none !important" }}
                >
                  <AiFillInstagram className="icons_clr" />
                </a>
              </div>

              <div className="around_social">
                <a href="https://twitter.com/realspadtoken" target="_blank">
                  <FaXTwitter className="icons_clr" />
                </a>
              </div>

              <div className="around_social">
                <a href="https://t.me/Realspad_official" target="_blank">
                  <FaTelegram className="icons_clr" />
                </a>
              </div>

              <div className="around_social">
                <a
                  href="https://web.facebook.com/Realspad?_rdc=1&_rdr"
                  target="_blank"
                >
                  <FaFacebook className="icons_clr" />
                </a>
              </div>
              <div className="around_social">
                <a href="https://youtube.com/@realspad" target="_blank">
                  <FaYoutube className="icons_clr" />
                </a>
              </div>

              {/* <div className="around_social">
  <FaDiscord className="icons_clr" />
</div> */}
            </div>
            <p className="text-white text-start site_font fw-semi-bold mt-2">
              Contact us at info@realspad.com
            </p>

            {/* <p className="site_font mt-3 text-white">Made with love by p0x labs. <br /> */}

            <p className="site_font mt-3 text-white">
              © 2023 Realspad . All rights reserved.
            </p>
          </div>
          <div className="col-md-3">
            {/* <img src={logo} alt="" /> */}
            {/* <div>
              <Link className="text-decoration-none" to="/">
                <a href="" className="footer_links text-white ">
                  Home
                </a>
              </Link>
              <a href="#buy_tokens" className="footer_links text-white ">
                Buy Tokens
              </a>
              <a href="#comming_nft" className="footer_links text-white ">
                Coming NFT
              </a>

              <Link className="text-decoration-none" to="Earn-rewards-staking">
                <a href="" className="footer_links text-white ">
                  Earn Rewards
                </a>
              </Link>
              <a href="#Tokenomics" className="footer_links text-white ">
                Tokenomics
              </a>
              <a href="#Timeline" className="footer_links text-white ">
                Timeline
              </a>
              <a
                href="https://drive.google.com/file/d/1StTnPfJZU6TcHzghYQiJP9kQO43ptd7W/view?usp=sharing"
                target="_blank"
                className="footer_links text-white "
              >
                Whitepaper
              </a>
              <a
                href="https://drive.google.com/file/d/1nqXapZBrlSKX14Hui2XFdgfTSeqY6hVZ/view?usp=sharing"
                target="_blank"
                className="footer_links text-white "
              >
                Audit
              </a>
            </div> */}

            <div>
      <Link className="text-decoration-none" to="/">
        <span className="footer_links text-white">Home</span>
      </Link>

      {(currentPath === '/' || currentPath === '/Earn-rewards-staking' || currentPath === '/Earn-free-reals-tokens-airdrops') && (
        <>
          <Link className="text-decoration-none" to="/Earn-rewards-staking">
            <span className="footer_links text-white">Earn Rewards</span>
          </Link>
          <Link className="text-decoration-none" to="/Earn-free-reals-tokens-airdrops">
            <span className="footer_links text-white">AirDrop</span>
          </Link>
        </>
      )}

      {currentPath === '/' && (
        <>
          <a href="#buy_tokens" className="footer_links text-white">Buy Tokens</a>
          <a href="#comming_nft" className="footer_links text-white">Coming NFT</a>
          <a href="#Tokenomics" className="footer_links text-white">Tokenomics</a>
          <a href="#Timeline" className="footer_links text-white">Timeline</a>
          <a href="https://drive.google.com/file/d/1StTnPfJZU6TcHzghYQiJP9kQO43ptd7W/view?usp=sharing" target="_blank" className="footer_links text-white">Whitepaper</a>
          <a href="https://drive.google.com/file/d/1nqXapZBrlSKX14Hui2XFdgfTSeqY6hVZ/view?usp=sharing" target="_blank" className="footer_links text-white">Audit</a>
        </>
      )}
    </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <img src={ffos} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
