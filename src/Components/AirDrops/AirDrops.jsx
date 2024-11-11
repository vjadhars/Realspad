import React, { useEffect, useMemo } from "react";
import "./AirDropStyle.css";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsFillPatchCheckFill, BsReddit } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import { Helmet } from "react-helmet";
const cardArray = [
  {
    title: "Twitter : Realspad Token Official Account",
    icons: <FaXTwitter />,
    path: "https://twitter.com/realspadtoken",
    active: false,
  },
  {
    title: "Telegram official: Realspad Project Official Account",
    icons: <FaTelegram />,
    path: "https://t.me/Realspad_official",
    active: false,
  },
  {
    title: "Telegram public: Realspad Token Public Channel",
    icons: <FaTelegram />,
    path: "https://t.me/Realspad_public",
    active: false,
  },
  // {
  //   title: "Reditt: Realspad Project Public Channel",
  //   icons: <BsReddit />,
  //   path: "https://www.reddit.com/user/Realspad/",
  //   active: false,
  // },
  {
    title: "YouTube: Realspad Project Official Channel",
    icons: <IoLogoYoutube />,
    path: "https://www.youtube.com/@realspad",
    active: false,
  },
  // {
  //   title: "Facebook: Realspad Project Official Account",
  //   icons: <FaFacebook />,
  //   path: "https://web.facebook.com/Realspad?_rdc=1&_rdr",
  //   active: false,
  // },
  // {
  //   title: "Instagram: Realspad Project Official Account",
  //   icons: <FaInstagramSquare />,
  //   path: "https://www.instagram.com/realspad/",
  //   active: false,
  // },
  // {
  //   title: "Twitter: Realspad Project CEO Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/Patrickmetlas15",
  //   active: false,
  // },
  // {
  //   title: "LinkedIn: Realspad Project CEO Official Account",
  //   icons: <FaLinkedin />,
  //   path: "https://www.linkedin.com/in/patrick-metlas-3768992a1/",
  //   active: false,
  // },
  // {
  //   title: "Twitter:Realspad Project Manager Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/LvcWalter",
  //   active: false,
  // },
  // {
  //   title: "Twitter:Realspad Project Communtiy Manager Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/JeromeDru",
  //   active: false,
  // },
  // {
  //   title: "Twitter:Realspad Project CTO Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/maxencelopez667",
  //   active: false,
  // },
  // {
  //   title: "Twitter:Realspad Project Development Team HEAD Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/JacqulineB80974",
  //   active: false,
  // },
  // {
  //   title: "Twitter:Realspad Project Public Affairs Manager Official Account",
  //   icons: <FaXTwitter />,
  //   path: "https://twitter.com/Beregere2",
  //   active: false,
  // },
];
export default function Airdrops() {
  const [cards, setCards] = useState(cardArray);
  const { address } = useAccount();
  const [userDetails, setUserDetails] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState("");
  const [updatedCount, setUpdatedCount] = useState(0);
  const [username, setUsername] = useState("");
  const [isValidUserName, setIsValidUserName] = useState("");
  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  let history = window.location;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let refValue = urlParams.get("ref");
  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    if (isValidEmail) {
      setIsValid("");
      console.log("Email is valid:", email);
    } else {
      console.log("Invalid email:", email);
      setIsValid("Invalid email");
    }
  };
  const handleChangetelegram = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    const usernamePart = newUsername.replace(/^.*\/([^/]+)$/, "$1");
    // Use a regular expression to validate the username
    const isValidUsername = /^[a-zA-Z][a-zA-Z0-9_.]{3,30}$/.test(usernamePart);
    if (isValidUsername) {
      console.log("Username is valid:", username);
      setIsValidUserName("");
    } else {
      console.log("Invalid username:", username);
      setIsValidUserName("Invalid username");
    }
  };
  const handleCardClick = (index) => {
    let updatedCount = 0; // Initialize the count outside the state updater function

    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      if (!updatedCards[index].active) {
        updatedCards[index].active = true;
        updatedCount++; // Increment the count if the card is updated
      }

      return updatedCards;
    });

    setUpdatedCount((prevCount) => prevCount + updatedCount); // Update the count outside the state updater function
  };

  // const allActive = useMemo(() => cards.every((card) => card.active), [cards]);

  const handleSubmit = async () => {
    try {
      let userPoints=updatedCount*10
      let refPoints=  Number(userPoints*0.1)
      refPoints=Number(refPoints)*Number(1000000000000000000)
      let count = Number(userPoints) * Number(1000000000000000000);
      if (username !== "" && email !== "") {
        if (Object.keys(userDetails).length == 0) {
          setSpinner(true);
          if (refValue == null) {
            refValue = "0x0000000000000000000000000000000000000000";
            refPoints=0
          }
          console.log("refValue",refValue);
          const res = await axios.post(
            "https://tipcoin.betterlogics.tech/addPoints",
            {
              walletAddress: address,
              points: count,
              email: email,
              telegram: username,
              refAddress:refValue,
              refPoint:refPoints
            }
          );
          if (res.data.success) {
            toast.success(res.data.msg);
          } else {
            toast.error(res.data.msg);
          }
        } else {
          toast.error("This address already exists");
        }
      } else {
        if (username == "") {
          setIsValidUserName("Username is require");
        }
        if (email == "") {
          setIsValid("Email is required");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `https://tipcoin.betterlogics.tech/getByAddress?walletAddress=${address}`
        );
        if (res?.data?.success) {
          setUserDetails(res?.data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (address) {
      getUserData();
    }
  }, [spinner, address]);

  useEffect(() => {
    if (address) {
      setRefAddress(`${history.origin}/AirDrops?ref=${address}`);
    } else {
      setRefAddress("Connect wallet");
    }
    setInterval(() => {
      setCopied(false);
    }, 3000);
  }, [address, copied]);
  return (
    <div className="main_reaspa_here">
     <Helmet>
                <meta charSet="utf-8" />
                <title> Realspad - Earn Free Reals Tokens Airdrops</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container main_airdrop_page">
    {/* <img src={bg} alt="" /> */}
     
      <div className="row justify-content-center mx-0">
        <div className="col-md-8 mt-3">
        <h1 className="igniatio col-md-8 mt-3" style={{ color: "#000" }}>
      Realspad - Earn Free Reals Tokens Airdrops
      </h1>
      {/* <h1 className="igniatio col-md-8 mt-3" style={{ color: "#000" }}>
        Complete all tasks and gets 140 Points , 10 points for Each Task
      </h1> */}
          <h6 className="igniatio">Airdrop Program by Realspad(Reals Token)</h6>
          <p>
            Realspad(Reals Token), where real estate meets Crypto to build a
            best future. “Building a best future for your Investments..,”
          </p>
          <p>
            The Airdrop Program, powered by https://realspad.com/, provides
            rewards for community members as they explore https://realspad.com/,
            engage with the community, and support the growth of the network.
          </p>
          <h1>1% Airdrop 20000000 Reals tokens</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="mainBoxDiv">
          <div className="d-flex w-100 mt-3 gap-2">
            <div style={{ width: "50%" }}>
              <input
                type="text"
                className="singleBoxStyle "
                placeholder="Enter your email here"
                value={userDetails.email}
                onChange={handleChange}
                style={{ width: "100%", border: "none", outline: "none" }}
              />
              <p style={{ color: "red" }}>{isValid}</p>
            </div>
            <div style={{ width: "50%" }}>
              <input
                type="text"
                className="singleBoxStyle "
                placeholder="Enter your telegram username"
                value={userDetails.telegram}
                onChange={handleChangetelegram}
                style={{ width: "100%", border: "none", outline: "none" }}
              />
              <p style={{ color: "red" }}>{isValidUserName}</p>
            </div>
          </div>
            {cards.map((items, index) => (
              <a
                href={items.path}
                target="_blank"
                style={{
                  width: "100%",
                  cursor:
                    cards[index].active || Object.keys(userDetails).length > 0
                      ? "not-allowed"
                      : "pointer",
                  textDecoration: "none",
                  pointerEvents:
                    cards[index].active ||
                    Object.keys(userDetails).length > 0 ||
                    !address
                      ? "none"
                      : "auto",
                }}
                key={index}
              >
                <div
                  className="singleBoxStyle"
                  onClick={() => handleCardClick(index)}
                >
                  <div>
                    <span className="mx-2">{items.icons}</span>
                    {items.title}
                  </div>
                  {(cards[index].active ||
                    Object.keys(userDetails).length > 0) && (
                    <div>
                      <BsFillPatchCheckFill />
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
       
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button
          className="wallet_button air_drop_btns p-5"
          style={{ cursor: updatedCount == 0 ? "not-allowed" : "pointer" }}
          disabled={updatedCount == 0 ? true : false}
          onClick={handleSubmit}
        >
          {spinner ? "Loading..." : "Submit"}
        </button>
      </div>

    <div className="row justify-content-center mt-2">
      <div className="col-md-8">
      <div>
        <h6 className="txt_clr site_font ">Term and conditions </h6>
        <ul className="ps-0 term_condtions">
          <li>Must follow, join and Subscribe the above social links.</li>
          <li>Must provide your email and telegram username.</li>
          <li> All will be verified before distributing the Airdrops.</li>
        </ul>
      </div>
      </div>
    </div>

      <div className="row main_Box_div  mt-5 ">
        <div className="col-md-8 mt-4 ">
          <div className="token_staking_box">
            <div className="row align-items-center ">
              <div className="token_mart_sawap">
                <div className="mt-3 mt-2">
                    <div className="Apr_div">
                      <p>Referal Address</p>
                    </div>
                  <div className="d-flex ">
                    <div className="copy_input_b w-100 d-flex ">
                      <input
                        type="text"
                        className="wap_iiinnn w-100"
                        value={refAddress}
                      />
                    </div>
                    <CopyToClipboard
                    text={refAddress}
                    onCopy={() => setCopied(true)}
                  >
                      <button className="CopyBTN">  {copied ? "COPIED" : "COPY"}{" "}</button>
                  </CopyToClipboard>
                  </div>

                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
}
