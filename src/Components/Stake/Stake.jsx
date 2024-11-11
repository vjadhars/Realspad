import React, { useEffect, useState } from "react";
import "./Stake.css";

import { useAccount } from "wagmi";
import {
  Token_staking_Contract_ABI,
  Token_staking_Contract_Address,
  Token_staking_Token_Contract_ABI,
  Token_staking_Token_Contract_Address,
} from "../Contract/Contract";
import Web3 from "web3";
import moment from "moment";
import Countdown from "react-countdown";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { toast } from "react-hot-toast";
import { Button, Popover } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Stake = () => {
  const { address } = useAccount();
  const [spinner, setspinner] = useState(false);

  const WebSupply = new Web3("https://bsc-rpc.publicnode.com");

  const [Stake_History_show, setStake_History_show] = useState([]);
  const [totalStaked, settotalStaked] = useState(0);



  const Stake_History = async () => {
    try {
      let stakingContractOf = new WebSupply.eth.Contract(
        Token_staking_Contract_ABI,
        Token_staking_Contract_Address
      );
      let totalStakedtoken = await stakingContractOf.methods
      .totalStaked()
      .call();
       totalStakedtoken = WebSupply.utils.fromWei(totalStakedtoken.toString())
       settotalStaked(totalStakedtoken);

      if (address) {
        let History_obj = {};
        let UserInformation = await stakingContractOf.methods
          .UserInformation(address)
          .call();

        // console.log("UserInformation", UserInformation);
        let array1 = UserInformation[0];
        let array2 = UserInformation[1];
        let array3 = UserInformation[2];
        let myArray = [];

        for (let i = 0; i < array1.length; i++) {
          // let date =new Date(Number(array3[i])*1000).toUTCString();
          let currentTimestamp = array3[i];
          let amount = WebSupply.utils.fromWei(array1[i].toString());

          let date = moment(Number(array3[i]) * 1000).format("DD-MM-YYYY");
          let obj = {
            Sno: i + 1,
            address: address,
            amount: amount,
            unLoackTime: Number(currentTimestamp) + Number(86400) * array2[i],
            LockTime: date,
          };
          myArray = [...myArray, obj];
        }
        setStake_History_show(myArray);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Stake_History();
  }, [address]);

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Unstaked Time Reached!</div>
      </>
    );
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="text_days fs-5 ">
          {/* {days} D {hours} H {minutes} M {seconds} S */}
          {days}d : {hours}h : {minutes}m : {seconds}s
        </div>
      );
    }
  };
  const confirm = (index) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content:
        "Before unstake time 10% will be deducted your amount and reward",
      okText: "Continue",
      cancelText: "Cancel",
      onOk: () => Withdraw(index),
    });
  };

  const Withdraw = async (index) => {
    try {
      setspinner(true);
      const { request } = await prepareWriteContract({
        address: Token_staking_Contract_Address,
        abi: Token_staking_Contract_ABI,
        functionName: "harvest",
        args: [[index]],
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
  return (
    <div>
      <div className="container mx-auto lg:px-10 py-5">
        <div className="flex flex-col items-center justify-center lg:py-0 py-8">
          <div className="text-center">
            <p className="text-center pb-1 text-3xl font-bold stekss">Total Staked Realspad Tokens Are : {totalStaked} $Reals Token</p>
            <hr className="line flex mx-auto mb-8" />
          </div>
          <div className="text-center">
            <p className="text-center pb-1 text-3xl font-bold stekss">Your Stakes</p>
            <hr className="line flex mx-auto mb-8" />
          </div>
          <div className="MuiBox-root css-ihc79b">
            <div className="d-flex justify-content-end align-items-center mb-3">
              <div
                className="site_main_btn"
                tabIndex={0}
                type="button"
                onClick={() => Stake_History()}
              >
                <a className="me-2 inner_btn_site w-100">Refresh</a>
                {/* <span
                  role="img"
                  aria-label="sync"
                  className="anticon anticon-sync SyncOutlined"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="sync"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" />
                  </svg>
                </span> */}
              </div>
            </div>
            <div
              className="MuiTableContainer-root css-48ybtg mt-4"
              border="none"
              pt={2}
              pb={5}
            >
              <table
                className="MuiTable-root css-1owb465 ajdakj"
                aria-label="simple table"
                style={{ minWidth: 600 }}
              >
                <thead className="MuiTableHead-root css-1wbz3t9">
                  <tr className="MuiTableRow-root MuiTableRow-head css-1gqug66">
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "#151522" }}
                    >
                      #
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "#151522" }}
                    >
                      Staked Amount
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "#151522" }}
                    >
                      Withdrawal Time
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "#151522" }}
                    >
                      Unstake
                    </th>
                    {/* <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "#151522" }}
                    >
                      Your Reward
                    </th> */}
                  </tr>
                </thead>
                <tbody className="MuiTableBody-root css-1xnox0e">
                  {Stake_History_show.length == 0 ? (
                    <>
                      <td
                        className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg"
                        colSpan={5}
                        style={{ border: "none" }}
                      >
                        <div className="MuiBox-root css-ehd0rl">
                          <p className="MuiTypography-root MuiTypography-body1 css-o7q7an">
                            You have no staking data
                          </p>
                        </div>
                      </td>{" "}
                    </>
                  ) : (
                    <>
                      {Stake_History_show.map((items, index) => {
                        let current_Time = Math.floor(
                          new Date().getTime() / 1000.0
                        );

                        return (
                          <>
                            {items.unstaked == true ||
                            items.withdrawan == true ? (
                              <></>
                            ) : (
                              <>
                                <tr className="MuiTableRow-root css-1gqug66">
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-black text-center"
                                    scope="col"
                                  >
                                    {items.Sno}
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-black text-center"
                                    scope="col"
                                  >
                                    {items.amount}
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-black text-center"
                                    scope="col"
                                  >
                                    <Countdown
                                      date={
                                        Date.now() +
                                        (parseInt(items.unLoackTime) * 1000 -
                                          Date.now())
                                      }
                                      renderer={renderer}
                                    />
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-black text-center"
                                    scope="col"
                                  >
                                    <button
                                      className="inner_btn_site"
                                      tabIndex={0}
                                      type="button"
                                      style={{ width: "5rem" }}
                                      onClick={() =>
                                        current_Time >= items.unLoackTime
                                          ? Withdraw(index)
                                          : toast.error("Time is not reached!")
                                      }
                                    >
                                      {/* {
                                        spinner ?
                                        "Loading ...":"Unstake"
                                      } */}
                                      Unstake
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                  </td>{" "}
                                </tr>{" "}
                              </>
                            )}
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
