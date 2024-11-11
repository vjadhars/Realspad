import React from "react";
import { useState } from "react";
import Landing_page from "../Landing_page/Landing_page";
import Secure_page from "../Secure_page/Secure_page";
import P2p from "../P2p/P2p";
import Transcation from "../Transcation/Transcation";
import Video_part from "../Video_part/Video_part";
import Tokennomics from "../Tokennomics/Tokennomics";
import FAQ from "../FAQ/FAQ";
import BuyETH from "../Buy_eth/Buy_eth";
import Realspad_nft from "../Realspad_nft/Realspad_nft";
import Partners from "../Partners/Partners";
import Real_spad_road from "../Real_spad_road/Real_spad_road";
import Mata_land from "../Mata_land/Mata_land";
import RealSpad_timeline from "../RealSpad_timeline/RealSpad_timeline";
import Newsletter from "../Newsletter/Newsletter";
import { Helmet } from "react-helmet";

// import { FaQ } from 'react-icons/fa6'

export default function Home_page() {
  const [raise, setRaise] = useState(0);

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title> Realspad - Reals Tokens, Where Real Estate meets crypto to build a best future</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Mata_land />
      <Landing_page setRaise={setRaise} />
      <Transcation />

      <Realspad_nft />

      <BuyETH />
      <Tokennomics />
      {/* <RealSpad_timeline/> */}
      <Real_spad_road />
      
      <Partners/>
      <FAQ/>
      <Newsletter/>

      
    </div>
  );
}
