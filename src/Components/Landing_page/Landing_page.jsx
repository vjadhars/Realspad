import React, { useEffect, useState } from "react";
import "./Landing_page.css";
import Tab from "../Tab_page/Tab_page";
import Web3 from "web3";
import {
  preSale_Contract_ABI,
  preSale_Contract_Address,
  referal_Contract_Address_Contract_ABI,
  referal_Contract_Address,
  preSale_Contract_ABI_old,
  preSale_Contract_Address_old,
} from "../Contract/Contract";
import { useAccount } from "wagmi";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import toast from "react-hot-toast";


import { FaArrowRightLong } from "react-icons/fa6";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Landing_page({ setRaise }) {
  const [getTokenToUSDT, setgetTokenToUSDT] = useState(0);
  const [raised, setraise] = useState(0);
  const [get_tokeSold, setget_tokeSold] = useState(0);
  const [get_maxTokeninPresale, setget_maxTokeninPresale] = useState(0);
  const { address } = useAccount();
  const [phaseNewPrice, setPhasePrice] = useState(0);
  const [NextphaseNewPrice, setNextPhasePrice] = useState("");
  const [CurrentStage, setCurrentStage] = useState(null);
  const [Rratio, setRatio] = useState(0);
  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [IsClaim, setIsClaim] = useState(false);
  const [Claimable, setClaimable] = useState(0);
  const [referralClaimable, setreferralClaimable] = useState(0);

  const [claimSpinner, setclaimSpinner] = useState(false);
  const [claimSpinner1, setclaimSpinner1] = useState(false);



  let history = window.location;

  console.log("refAddress", refAddress);
  const webSupply = new Web3(
    "https://bsc-rpc.publicnode.com"
    // "https://bsc-rpc.publicnode.com"

    // https://bsc-rpc.publicnode.com
  );

  const referralClaimabletoken = async (value) => {
    try {
     
        setclaimSpinner1(true);

        const { request } = await prepareWriteContract({
          address: preSale_Contract_Address,
          abi: preSale_Contract_ABI,
          functionName: "claimReferalIncome",
          args: [],
          account: address,
        });
        const { hash } = await writeContract(request);
        const data = await waitForTransaction({
          hash,
        });

        setTimeout(() => {
          setclaimSpinner1(false);
          toast.success("Transaction Completed");
        }, 4000);
      

    } catch (error) {
      console.log(error);
      setclaimSpinner1(false);
    }
  };


  const referralClaimabletokenold = async (value) => {
    try {
     
        setclaimSpinner(true);

        const { request } = await prepareWriteContract({
          address: referal_Contract_Address,
          abi: referal_Contract_Address_Contract_ABI,
          functionName: "claimReferalIncome",
          args: [],
          account: address,
        });
        const { hash } = await writeContract(request);
        const data = await waitForTransaction({
          hash,
        });

        setTimeout(() => {
          setclaimSpinner(false);
          toast.success("Transaction Completed");
        }, 4000);
      

    } catch (error) {
      console.log(error);
      setclaimSpinner(false);
    }
  };
  // const getValue = async () => {
  //   try {
  //     let ContractOf = new webSupply.eth.Contract(
  //       preSale_Contract_ABI,
  //       preSale_Contract_Address
  //     );
  //     let tokenToUSDT = await ContractOf.methods.TokenPricePerUSDC().call();
  //     tokenToUSDT = webSupply.utils.fromWei(tokenToUSDT.toString());
  //     setgetTokenToUSDT(tokenToUSDT);

  //     let TokenSold = await ContractOf.methods.TokenSold().call();
  //     let currentRate = await ContractOf.methods.TokenPricePerUSDC().call();

  //     TokenSold = webSupply.utils.fromWei(TokenSold.toString());
  //     currentRate = webSupply.utils.fromWei(currentRate.toString());



  //     // i m chaing this

  //     // TokenSold = Number(71458.127) + Number(TokenSold);

  //     // To this
  //     TokenSold = Number(TokenSold);

  //     setRaise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
  //     setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));
  //     setraise(Intl.NumberFormat().format(Number(TokenSold) * Number(currentRate)));


  //     // TokenSold = Intl.NumberFormat().format(TokenSold);
  //     setget_tokeSold(TokenSold);

  //     let maxTokeninPresale = await ContractOf.methods
  //       .maxTokeninPresale()
  //       .call();
  //     maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
  //     // console.log("maxToken",maxTokeninPresale);

  //     // console.log("width",parseInt(Number(TokenSold) / Number(maxTokeninPresale) / 100,));

  //     let CurrentStage = await ContractOf.methods.currentPhase().call();
  //     // currentPhasePricee = currentPhasePricee.price;
  //     // console.log("CurrentStage",CurrentStage);
  //     setCurrentStage(CurrentStage);
  //     // getCurrentPhasePrice

  //     // Get Current Stage Price
  //     let phases = await ContractOf.methods.phases(CurrentStage).call();
  //     // console.log(phases);
  //     let phasePrice = phases.price / 1e18;
  //     let newPhase = (1 / phasePrice).toFixed(2);
  //     setPhasePrice(newPhase);
  //     // console.log("Current phase price",newPhase);

  //     // 1$ = 5 token
  //     //  1 token = 1/5

  //     // setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(phasePrice)) )

  //     //Get Next Stage Price
  //     let SCurrentStage = Number(CurrentStage) + 1;
  //     // console.log("S current",SCurrentStage);
  //     let Nextphases = await ContractOf.methods.phases(SCurrentStage).call();
  //     // console.log(Nextphases);
  //     let NextphasePrice = Nextphases.price / 1e18;
  //     let TNextPhasePrice = (1 / NextphasePrice).toFixed(2);
  //     setNextPhasePrice("0.0035 $");
  //     // console.log("Next phase price",TNextPhasePrice);

  //     //

  //     // Remaining token
  //     maxTokeninPresale = Number(maxTokeninPresale) - Number(TokenSold);
  //     // console.log("Remaining token in preslse",maxTokeninPresale);
  //     setget_maxTokeninPresale(maxTokeninPresale);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //  function getCurrentPhasePrice() internal view returns (uint256) {
  // return phases[currentPhase].price;
  // }

  const Claim_status = async () => {
    let ContractOf = new webSupply.eth.Contract(
      preSale_Contract_ABI,
      preSale_Contract_Address
    );

    let ContractOfold = new webSupply.eth.Contract(
      preSale_Contract_ABI_old,
      preSale_Contract_Address_old
    );

    let ContractOfreferal = new webSupply.eth.Contract(
      referal_Contract_Address_Contract_ABI,
      referal_Contract_Address
    );
    let tokenToUSDT = await ContractOf.methods.TokenPricePerUSDC().call();
    tokenToUSDT = webSupply.utils.fromWei(tokenToUSDT.toString());
    setgetTokenToUSDT(tokenToUSDT);

    let TokenSold = await ContractOf.methods.TokenSold().call();
    let currentRate = await ContractOf.methods.TokenPricePerUSDC().call();

    TokenSold = webSupply.utils.fromWei(TokenSold.toString());
    currentRate = webSupply.utils.fromWei(currentRate.toString());



    // i m chaing this

    // TokenSold = Number(71458.127) + Number(TokenSold);

    // To this
    TokenSold = Number(TokenSold);

    setraise(Intl.NumberFormat().format(Number(Number(TokenSold) * Number(currentRate))+Number(21890.697)));


    // TokenSold = Intl.NumberFormat().format(TokenSold);
    setget_tokeSold(TokenSold);

    let maxTokeninPresale = await ContractOf.methods
      .maxTokeninPresale()
      .call();
    maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
    // console.log("maxToken",maxTokeninPresale);

    // console.log("width",parseInt(Number(TokenSold) / Number(maxTokeninPresale) / 100,));

    // let CurrentStage = await ContractOf.methods.currentPhase().call();
    // currentPhasePricee = currentPhasePricee.price;
    // console.log("CurrentStage",CurrentStage);
    // setCurrentStage(CurrentStage);
    // getCurrentPhasePrice

    // Get Current Stage Price
    // let phases = await ContractOf.methods.phases(CurrentStage).call();
    // console.log(phases);
    // let phasePrice = phases.price / 1e18;
    // let newPhase = (1 / phasePrice).toFixed(2);
    // setPhasePrice(newPhase);
    // console.log("Current phase price",newPhase);

    // 1$ = 5 token
    //  1 token = 1/5

    // setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(phasePrice)) )

    //Get Next Stage Price
    // let SCurrentStage = Number(CurrentStage) + 1;
    // console.log("S current",SCurrentStage);
    // let Nextphases = await ContractOf.methods.phases(SCurrentStage).call();
    // console.log(Nextphases);
    // let NextphasePrice = Nextphases.price / 1e18;
    // let TNextPhasePrice = (1 / NextphasePrice).toFixed(2);
    // setNextPhasePrice("0.0035 $");
    // console.log("Next phase price",TNextPhasePrice);

    //

    // Remaining token
    maxTokeninPresale = Number(maxTokeninPresale) - Number(TokenSold);
    // console.log("Remaining token in preslse",maxTokeninPresale);
    setget_maxTokeninPresale(maxTokeninPresale);
    let CanClaim = await ContractOf.methods.CanClaim().call();
    // console.log("CanClaim", CanClaim);
    setIsClaim(CanClaim);
    if (address) {
      //  let address = "0x7f269c43BA2BFC891602fc3222c60b2D5c807d56"
      let Claimable = await ContractOf.methods.Claimable(address).call();
      Claimable = webSupply.utils.fromWei(Claimable.toString());
      // console.log("Claimable",Claimable);

      let Claimableold = await ContractOfold.methods.Claimable(address).call();
      Claimableold = webSupply.utils.fromWei(Claimableold.toString());

      if (Number(Claimable)+Number(Claimableold) > 0) {
        setClaimable(Number(Claimable)+Number(Claimableold));
      } else {
        setClaimable(0);
      }
    }

    if (address) {
      //  let address = "0x7f269c43BA2BFC891602fc3222c60b2D5c807d56"
      let referralClaimable = await ContractOfreferal.methods.checkref(address).call();
      referralClaimable = webSupply.utils.fromWei(referralClaimable.toString());
      console.log("referralClaimable",referralClaimable);

      let referralClaimablenew = await ContractOf.methods.referralClaimable(address).call();
      referralClaimablenew = webSupply.utils.fromWei(referralClaimablenew.toString());

      if (Number(referralClaimable)+Number(referralClaimablenew) > 0) {
        setreferralClaimable(Number(referralClaimable)+Number(referralClaimablenew));
      } else {
        setreferralClaimable(0);
      }
    }

  };

  useEffect(() => {
    setInterval(() => {
      Claim_status();
    }, 5000);
  }, [address]);




  // Set get_maxTokeninPresale to 6,000,000
  let Gget_maxTokeninPresale = 6000000; //MaxToken in presale
  if (get_maxTokeninPresale !== 0) {
    const ratio = (get_tokeSold / Gget_maxTokeninPresale) * 100;
    // setRatio(ratio);
  } else {
    // console.log("Cannot calculate ratio, getMaxTokeninPresale is zero");
  }

  // Raised

  const formattedValue = Intl.NumberFormat().format(get_tokeSold * 0.2);

  useEffect(() => {
    if (address) {
      setRefAddress(`${history.origin}?ref=${address}`);
    } else {
      setRefAddress("Connect wallet");
    }

    setInterval(() => {
      setCopied(false);
    }, 3000);
  }, [address, copied]);
  return (
    <div className="main_div_landing">
      <div className="main_landing">
        <div className="container ">
          <div className=" justify-content-center">
            <div className="row justify-content-center">
              {/* <div className="col-lg-6 ">
                <div className="main_div_Text">
                  <h5 className="text-left txt_clr">
                    <span >
                      <p style={{ fontSize: "2.14rem" }}>
                        Realspad(Reals Token), where real estate meets Crypto to
                        build a best future.
                      </p>
                    </span>
                  </h5>
                  <h6 className="site_font txt_clr">
                    <span style={{ fontSize: "2rem" }}>
                      <em>“Building a best future for </em>
                      <em>your Investments..,”</em>
                    </span>
                  </h6>
                </div>
              </div> */}
              <div className="col-lg-12 pad_side flex justify-content-end">
                <div className="col-md-12 this_ha">
                  <div className="landing_box" id="buy_tokens">
                  <h1 className="text-center site_font txt_clr">Buy Reals Tokens now</h1>
                    <div className="row">
                      <div className="col-6">
                      
                        <div className="info_pre d-flex gap-2">
                          <h6>Current $Reals Token Sales </h6>
                          {/* <h2>Stage 1</h2> */}
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="info_pre">
                          <h6>Remaining Tokens </h6>
                          <h2>
                          {Intl.NumberFormat().format(Number(1500000000)-(Number(144446088)+Number(get_tokeSold)))}{" $Reals Token"}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="progress_bar">
                      <div
                        className="inner_pro"
                        style={{
                          width: `${
                            ((Number(144446088)+Number(get_tokeSold))/Number(1500000000))*100
                          }%`,
                        }}
                      ></div>
                      {/* <div className="inner_pro" style={{
                    width: parseInt(Number(get_tokeSold) /
                    Number(get_maxTokeninPresale) /
                    100,)
                  }}></div> */}
                    </div>
                    <div className="row mt-3">
                      <div className="col-6">
                        <div className="info_pre">
                          <h6>Total Token Sold </h6>
                          <h2 className="text-truncate">144,446,088+{Intl.NumberFormat().format(get_tokeSold)} $Reals Token</h2>
                        </div>
                      </div>
                      {/* <div className="col-6 text-end">
                        <div className="info_pre">
                          <h6>Total Token Sold </h6>
                          <h2 className="text-truncate">124545454+{Intl.NumberFormat().format(get_tokeSold)}</h2>
                        </div>
                      </div> */}
                    </div>
<div className="d-flex justify-content-between">


                    <div className="rate mt-1">
                      <h4 className="fw-bold">Current Price: <span className="fw-semibold">$0.01</span></h4>

                      {/* <h4>$1= {getTokenToUSDT} Realspad</h4> */}
                    </div>
                    <div className="rate mt-1">
                      <h4>1 $ =100 Reals Token</h4>

                      {/* <h4>$1= {getTokenToUSDT} Realspad</h4> */}
                    </div>
                    </div>

                    <div
                      className="text-center text-white"
                      style={{ fontFamily: "'Inter', sans-serif;" }}
                    >
                      {/* <h6
                        className="span-text"
                        style={{
                          fontSize: "16px",
                          fontFamily: "'Inter', sans-serif;",
                        }}
                      >
                        Your Purchased Realspad : {Claimable}{" "}
                      </h6> */}
                      <h6
                        className="txt_clr site_font  "
                        style={{
                          fontSize: "16px",
                        
                        }}
                      >
                        Ready to Claim : {Claimable}{" "}
                      </h6>
                    </div>

                    <div className="buy_chain_box">
                      <Tab Claimable={Claimable} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-md-6 pad_side ">
                <div className="white_paper_box">
                  <div className="row">
                    <div className="col-10">
                      <div>
                        <h4 className="names_re">White paper</h4>
                        <p>
                          Download our whitepaper to get a detailed
                          understanding of Realspad
                        </p>
                      </div>
                    </div>
                    <div className="col-2 circle_box">
                      <div className="cir">
                        <a
                          href="https://drive.google.com/file/d/1nwTPM8FLTtHFc8OayuQWe0KOzX6dhyw8/view"
                          target="_blank"
                        >
                          <FaArrowRightLong style={{ color: "white" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 pad_side mt-5 mt-md-0 "
                style={{ marginTop: "30px !important" }}
              >
                <div className="white_paper_box">
                  <div className="row">
                    <div className="col-10">
                      <div>
                        <h4 className="names_re">AUDIT report </h4>
                        <p>
                          The smart contract has been audited by blockchain
                          security specialist Solid Proof.
                        </p>
                      </div>
                    </div>
                    <div className="col-2 circle_box">
                      <div className="cir">
                        <a
                          href="https://drive.google.com/file/d/1nqXapZBrlSKX14Hui2XFdgfTSeqY6hVZ/view?usp=sharing"
                          target="_blank"
                        >
                          <FaArrowRightLong style={{ color: "white" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4 pad_side">
                <div className="black_box">
                  <h1>5</h1>
                  <p>Total Stages</p>
                </div>
              </div>
              <div className="col-md-4 pad_side mt-3 mt-md-0">
                <div className="black_box ">
                  {/* <h1>${raised}</h1> */}
                  <h1>$137000 + ${raised}</h1>
                  <p>Amount Raised</p>
                </div>
              </div>
              <div className="col-md-4 pad_side mt-3 mt-md-0">
                <div className="black_box">
                  <h1>1,500,000,000 $Reals Token</h1>
                  <p>Total token availible for sale</p>
                </div>
              </div>
            </div>

            <div className="row" id="earnreward">
              
              <div className="col-lg-12 pad_side">
                <div className="black_box  mt-4">
                  <h2 className="" style={{ textAlign: "left" }}>
                    Refferal Link
                  </h2>
                  <div className="d-flex justify-content-between">
                    <div className="box_busd me-2 " style={{ width: "100%" }}>
                      <input type="text" value={refAddress} />
                    </div>
                    <CopyToClipboard
                      text={refAddress}
                      onCopy={() => setCopied(true)}
                    >
                      <button
                        className="btn copied "
                        style={{ backgroundColor: "#0E79AB" }}
                      >
                        {copied ? <>COPIED</> : "COPY"}
                      </button>
                    </CopyToClipboard>
                  </div>

                  <h2 className="mt-2" style={{ textAlign: "left" }}>
                  Earn 10% for each referral
                  </h2>
                  <h2 className="mt-2" style={{ textAlign: "left" }}>
                  Your Referral Claimable Rewards : {parseFloat(referralClaimable).toFixed(4)} $Reals Token
                  </h2>

                  {/* <button className="buy_BTN" onClick={referralClaimabletokenold}>
          {claimSpinner ? "Loading..." : "Claim Referral Rewards (OLD)"}
        </button> */}

        <button className="buy_BTN " onClick={referralClaimabletoken}>
          {claimSpinner1 ? "Loading..." : "Claim Referral Rewards"}
        </button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
