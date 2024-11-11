import React, { useEffect, useState } from "react";
import "./Smart_token_staking.css";
import logo from "../Assets/FooterLogo.png";
import bg from "../Assets/bg5.png";
import Stake from "../Stake/Stake";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
  Token_staking_Contract_ABI,
  Token_staking_Contract_Address,
  Token_staking_Token_Contract_ABI,
  Token_staking_Token_Contract_Address,
} from "../Contract/Contract";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import toast from "react-hot-toast";
import { Staking_Data } from "./Staking_Data";
import { Helmet } from "react-helmet";

export default function Smart_token_staking() {
  const [getInput, setgetInput] = useState("");
  const [plan, setplan] = useState(30);
  const { address } = useAccount();
  const [spinner, setspinner] = useState(false);
  const [tokenBalance, settokenBalance] = useState(0);
  const [claimSpinner, setclaimSpinner] = useState(false);
  const [totalTokenStake, settotalTokenStake] = useState(0);
  const [numberOfTotalStakers, setNumberOfTotalStakers] = useState(0);
  const [Claimable, setClaimable] = useState(0);
  const [yourStake, setyourStake] = useState(0)

  const webSupply = new Web3("https://bsc-rpc.publicnode.com");

  const Stake_Token = async (days) => {
    try {
      if (!address) {
        toast.error("Connect Wallet First");
      } else {
        let stakingContractOf = new webSupply.eth.Contract(
          Token_staking_Contract_ABI,
          Token_staking_Contract_Address
        );

        console.log("minimumDeposit");
        let minimumDeposit = await stakingContractOf.methods
          .minimumDeposit()
          .call();
        minimumDeposit = webSupply.utils.fromWei(minimumDeposit.toString());

        if (getInput == 0 || getInput < minimumDeposit) {
          toast.error(
            getInput == 0
              ? "Please Enter Token Value"
              : getInput < minimumDeposit
              ? `Please Enter Token Value Greater than ${minimumDeposit}`
              : ""
          );
        } else {
          setplan(days)
          setspinner(true);
          let values = webSupply.utils.toWei(getInput);
          const { request } = await prepareWriteContract({
            address: Token_staking_Token_Contract_Address,
            abi: Token_staking_Token_Contract_ABI,
            functionName: "approve",
            args: [Token_staking_Contract_Address, values],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          setTimeout(() => {
            setspinner(false);
            toast.success("Approve SuccessFully");
            Staking_Fuc(values,days);
          }, 2000);
        }
      }
    } catch (error) {
      setspinner(false);
      console.log(error);
    }
  };

  const Staking_Fuc = async (value,days) => {
    try {
      setspinner(true);

      const { request } = await prepareWriteContract({
        address: Token_staking_Contract_Address,
        abi: Token_staking_Contract_ABI,
        functionName: "farm",
        args: [value, days],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      setTimeout(() => {
        setspinner(false);
        toast.success("Transaction Completed");
      }, 4000);
    } catch (error) {
      console.log(error);
      setspinner(false);
    }
  };
  const balanceOf = async () => {
    try {
      let ContractOfToken = new webSupply.eth.Contract(
        Token_staking_Token_Contract_ABI,
        Token_staking_Token_Contract_Address
      );
      let ContractOf = new webSupply.eth.Contract(
        Token_staking_Contract_ABI,
        Token_staking_Contract_Address
      );
      if (address) {
        let tokenBalace = await ContractOfToken.methods
          .balanceOf(address)
          .call();
          console.log("tokenBalace",tokenBalace);
        tokenBalace = webSupply.utils.fromWei(tokenBalace.toString());
        settokenBalance(tokenBalace);
        let claimable = await ContractOf.methods.pendindRewards(address).call();
        claimable = webSupply.utils.fromWei(claimable.toString());
        setClaimable(claimable);
        let userinformation = await ContractOf.methods
          .userInformation(address)
          .call();
          userinformation = userinformation[0].reduce((items, curr) => items + parseInt(curr), 0);
          userinformation = webSupply.utils.fromWei(userinformation.toString());
          console.log("userinformation",userinformation);
          setyourStake(userinformation)
      }
      let totalStaked = await ContractOf.methods.totalStaked().call();
      totalStaked = webSupply.utils.fromWei(totalStaked.toString());
      settotalTokenStake(totalStaked);

      let totalStakers = await ContractOf.methods.totalStakers().call();
      setNumberOfTotalStakers(totalStakers);
    } catch (error) {
      console.log(error);
    }
  };

  const ClaimToken = async (value) => {
    try {
      setclaimSpinner(true);

      const { request } = await prepareWriteContract({
        address: Token_staking_Contract_Address,
        abi: Token_staking_Contract_ABI,
        functionName: "claim",
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

  useEffect(() => {
    balanceOf();
  }, [address, spinner, claimSpinner]);
  return (
    <div className="main_token_staking_page">
      <div className="container">
      <Helmet>
                <meta charSet="utf-8" />
                <title>  Realspad - Stake and Earn Reals Tokens</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        {/* <div className="row mt-5">
          <div className="col-md-4">
            <div className="black_box">
              <h1>{totalTokenStake}</h1>
              <p>Total value locked</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box resvers">
              <h1>{checkAPY}</h1>
              <p>Apy</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box">
              <h1>{numberOfTotalStakers}</h1>
              <p>Number of stakers</p>
            </div>
          </div>
        </div> */}
        <h1 className="site_font txt_clr"> Realspad - Stake and Earn Reals Tokens.., </h1>
        <div className="row main_Box_div  mt-5 ">
          {Staking_Data.map((items, index) => {
            return (
              <>
                <div className="col-md-4 mt-4 ">
                  <div className="token_staking_box">
                    <div className="row align-items-center ">
                      <div className="token_mart_sawap">
                        <div className="mart_logo_wap d-flex justify-content-center">
                          <img src={logo} className="w-25" alt="" />
                        </div>
                        <div className="mt-3 mt-2">
                          <div className="Apr_div">
                            <p>APY</p>
                            <p>{items.APY}</p>
                          </div>
                          <div className="Apr_div">
                            <p>Lock Duration</p>
                            <p>{items?.Days} Days</p>
                          </div>
                          <p className="mb-0">
                            Balance: {parseFloat(tokenBalance).toFixed(3)}{" "}
                            $Reals Token
                          </p>
                          <div className="d-flex ">
                            <div className="swap_input_b d-flex ">
                              <input
                                type="text"
                                className="wap_iiinnn"
                                placeholder="0.00"
                                value={plan==items.Days ? getInput:""}
                                onChange={(e) => (setgetInput(e.target.value),setplan(items.Days))}
                              />
                              <button
                                onClick={() =>
                                 ( setgetInput(
                                    tokenBalance > 0
                                      ? Number(tokenBalance) - 0.001
                                      : 0
                                  ),setplan(items.Days))
                                }
                              >
                                Max
                              </button>
                            </div>
                          </div>
                          <button
                            className="swap_clr_btn"
                            onClick={()=>Stake_Token(items.Days)}
                          >
                            {spinner ==true&& plan==items.Days ? "Loading.." : "Stake"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </>
            );
          })}
        </div>

        <div className="row">
          <Stake />
        </div>
      </div>
    </div>
  );
}
