
import { useState } from "react";

// import Expand from "../../../assets/svg/Expand.svg";
// import Containers from "../../../assets/svg/container.svg"

import TopChart from "../../../assets/svg/top-chart.svg";
import TopTable from "../../../assets/svg/top-table.svg";
import BottomChart from "../../../assets/svg/bottom-chart.svg";
import BottomTable from "../../../assets/svg/bottom-table.svg";

// import FirstIcon from "../../../assets/chart/first-icon.svg"
// import MiddleIcon from "../../../assets/chart/middle-icon.svg"
// import LastIcon from "../../../assets/chart/last-icon.svg"
// import Dropdown from "../../../assets/chart/drop-down.svg"




function OrderChart() {
    const [heading, setHeading] = useState("Order Book");

    return (
        <div className="rounded-lg bg-[#20252b] px-4 py-2">
            <div>
                <section
                    className="
                     flex flex-col justify-center items-center   h-full  md:w-[275px] xs:w-full py-1
                    "
                >
                    <div>
                        <div className="mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 xs:flex md:hidden flex-wrap justify-center items-center text-center mt-[50px]">

                            <div className=" w-fit ">
                                <div className="rounded-lg border-[1px] p-1 gap-3 border-gray-500 flex justify-center items-center w-fit">
                                    <button
                                        onClick={() => setHeading("Order Book")}

                                        className={`${heading === "Order Book" ? "bg-[#353945] text-white rounded-lg px-[21px] py-[5px] text-center" : "text-white"
                                            } flex justify-between items-center px-[21px] group`}

                                    >Order Book</button>


                                    <button
                                        className={`${heading === "Recent Trades" ? "bg-[#353945] text-white rounded-lg px-[21px] py-[5px] text-center" : "text-white"
                                            } flex justify-between items-center px-[21px] group`}

                                        onClick={() => setHeading("Recent Trades")}
                                    >Recent Trades</button>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="md:w-fit xs:w-full flex flex-col justify-center items-center">

                        <div className="flex max-w-[275px] md:w-[275px] xs:w-full ">
                            <div className="my-0 ">
                                <img
                                    alt=""
                                    src={TopChart}
                                    className="w-[275px] max-h-[275px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        <div className="flex max-w-[275px] md:w-[275px] xs:w-full ">
                            <div className="my-0 ">
                                <img
                                    alt=""
                                    src={TopTable}
                                    className="w-[275px] max-h-[275px] h-auto object-contain"
                                />

                            </div>

                        </div>

                    </div>
                    <div className="md:w-fit xs:w-full flex flex-col justify-center items-center">
                        <div className="flex max-w-[275px] md:w-[275px] xs:w-full  ">
                            <div className="my-0 ">
                                <img
                                    alt=""
                                    src={BottomChart}
                                    className="w-[275px] max-h-[275px] h-auto object-contain"
                                />

                            </div>

                        </div>

                        <div className="flex max-w-[275px] md:w-[275px] xs:w-full ">
                            <div className="my-0 ">
                                <img
                                    alt=""
                                    src={BottomTable}
                                    className="w-[275px] max-h-[275px]  h-auto object-contain"
                                />

                            </div>

                        </div>

                    </div>

                </section>

            </div>


        </div>
    );
}

export default OrderChart;
