
import { useState } from "react";


import Info from "../../../assets/chart/info.svg";
import Check from "../../../assets/chart/check.svg"
import DropDown from "../../../assets/chart/drop-down.svg"

// import FirstIcon from "../../../assets/chart/first-icon.svg"
// import MiddleIcon from "../../../assets/chart/middle-icon.svg"
// import LastIcon from "../../../assets/chart/last-icon.svg"
// import Dropdown from "../../../assets/chart/drop-down.svg"




function Buy() {
    const [heading, setHeading] = useState("Buy");
    const [toggle, setToggle] = useState("Limit");

    return (
        <div>
            <div className="rounded-lg bg-[#20252b] px-4 py-4">
                <section
                    className="
                     flex flex-col justify-center items-center  w-full py-1 
                    "
                >
                    <div>
                        <div className="mb-3  md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[0px]">

                            <div className=" w-fit ">
                                <div className="rounded-lg border-[1px] p-0 gap-3 border-none bg-[#1b1e23] flex justify-center items-center w-fit">
                                    <button
                                        onClick={() => setHeading("Buy")}

                                        className={`${heading === "Buy" ? "bg-[#21262c] text-white rounded-lg px-[50px] py-[5px] text-center border-[1px] border-green-600" : "text-white"
                                            } flex justify-between items-center px-[50px] py-[5px]`}

                                    >Buy</button>


                                    <button
                                        className={`${heading === "Sell" ? "bg-[#21262c] text-white rounded-lg px-[50px] py-[5px] text-center border-[1px] border-green-600" : "text-white"
                                            } flex justify-between items-center px-[50px] py-[5px] `}

                                        onClick={() => setHeading("Sell")}
                                    >Sell</button>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[8px]">

                            <div className=" w-fit ">
                                <div className="rounded-lg text-[11px] p-1 gap-3 flex justify-center items-center w-fit">
                                    <button
                                        onClick={() => setToggle("Limit")}

                                        className={`${toggle === "Limit" ? "bg-[#353945] text-white rounded-full px-[21px] py-[5px] text-center" : "text-white"
                                            } flex justify-between items-center px-[21px] group whitespace-nowrap`}

                                    >Limit</button>


                                    <button
                                        className={`${toggle === "Market" ? "bg-[#353945] text-white rounded-full px-[21px] py-[5px] text-center" : "text-white"
                                            } flex justify-between items-center px-[21px] group whitespace-nowrap`}

                                        onClick={() => setToggle("Market")}
                                    >Market</button>

                                    <button
                                        className={`${toggle === "Stop-Limit" ? "bg-[#353945] text-white rounded-full px-[21px] py-[5px] text-center" : "text-white"
                                            } flex justify-between items-center px-[21px] group whitespace-nowrap`}

                                        onClick={() => setToggle("Stop-Limit")}
                                    >Stop-Limit</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="w-full flex  rounded-lg border-[1px] border-[#2d3236] px-2 py-3 justify-between ">

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-center gap-3 ">
                            <div className="text-white whitespace-nowrap">Limit Price</div>
                            <img
                                alt=""
                                src={Info}
                                className="w-full h-full "
                            />

                        </div>

                    </div>

                    <div className="flex w-full  justify-end items-center text-[12px]">
                        <div className="my-0 flex gap-3">
                            <div className="text-white">0.00</div>
                            <div className="text-white">USD</div>

                        </div>

                    </div>

                </div>

                <div className="w-full flex mt-4  rounded-lg border-[1px] border-[#2d3236] px-2 py-3 justify-between">

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-center gap-3 ">
                            <div className="text-white whitespace-nowrap">Amount</div>
                            <img
                                alt=""
                                src={Info}
                                className="w-full h-full "
                            />

                        </div>

                    </div>

                    <div className="flex w-full  justify-end items-center text-[12px]">
                        <div className="my-0 flex gap-3">
                            <div className="text-white">0.00</div>
                            <div className="text-white">USD</div>

                        </div>

                    </div>

                </div>

                <div className="w-full flex mt-4  rounded-lg border-[1px] border-[#2d3236] px-2 py-3 justify-between">

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-center gap-3 ">
                            <div className="text-white whitespace-nowrap">Type</div>
                            <img
                                alt=""
                                src={Info}
                                className="w-full h-full "
                            />

                        </div>

                    </div>

                    <div className="flex w-full  justify-end items-center text-[12px]">
                        <div className="my-0 flex gap-0">
                            <div className="text-white whitespace-nowrap">Good till cancelled</div>
                            <img
                                alt=""
                                src={DropDown}
                                className="w-full h-full "
                            />

                        </div>

                    </div>

                </div>

                <div className="flex w-full  justify-start gap-3 items-center text-[12px] mt-5">
                    <div className="my-0 flex justify-start gap-3 items-center">
                        <img
                            alt=""
                            src={Check}
                            className="w-full h-full bg-[#2662ff] rounded"
                        />
                        <div className="text-white whitespace-nowrap">Post Only</div>
                        <img
                            alt=""
                            src={Info}
                            className="w-full h-full "
                        />

                    </div>

                </div>

                <div className="w-full flex mt-4 px-0 py-3 justify-between text-white">

                    <div className="flex w-full justify-start items-center text-[12px]">

                        Total
                    </div>

                    <div className="flex w-full  justify-end items-center text-[12px]">
                        <div className="my-0 flex gap-0">
                            0.00

                        </div>

                    </div>

                </div>

                <button className="w-full bg-gradient-to-r from-[#2662ff] to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90">
                    Buy BTC
                </button>

                <div className="w-full flex mt-4 px-2 py-3 justify-between">

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-start  gap-3 flex-col">
                            <div className="text-white whitespace-nowrap">Total account value</div>
                            <div className="text-white whitespace-nowrap text-[15px]">0.00</div>

                        </div>

                    </div>

                    <div className="flex w-full  justify-end items-center text-[12px]">
                        <div className="my-0 flex gap-0 justify-center items-center">
                            <div className="text-white whitespace-nowrap">NGN</div>
                            <img
                                alt=""
                                src={DropDown}
                                className="w-full h-full "
                            />

                        </div>

                    </div>

                </div>

                <div className="w-full flex mt-4 px-2 py-3 justify-between">

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-start  gap-3 flex-col">
                            <div className="text-white whitespace-nowrap">Open Order</div>
                            <div className="text-white whitespace-nowrap text-[15px]">0.00</div>

                        </div>

                    </div>

                    <div className="flex w-full justify-start items-center text-[12px]">
                        <div className="my-0 flex items-start  gap-3 flex-col">
                            <div className="text-white whitespace-nowrap">Available</div>
                            <div className="text-white whitespace-nowrap text-[15px]">0.00</div>

                        </div>

                    </div>

                </div>

                <button className="w-fit bg-[#2662ff]  text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90">
                    Deposit
                </button>





            </div>


        </div>
    );
}

export default Buy;
