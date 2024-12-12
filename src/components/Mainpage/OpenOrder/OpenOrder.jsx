
import { useState } from "react";

// import Expand from "../../../assets/svg/Expand.svg";
// import Containers from "../../../assets/svg/container.svg"

// import TopChart from "../../../assets/svg/top-chart.svg";
// import TopTable from "../../../assets/svg/top-table.svg";





function OrderChart() {
    const [heading, setHeading] = useState("Open Orders");

    return (
        <div>
            <section className="flex flex-col justify-center items-center bg-primary h-full w-full py-1">
                <div className="w-full flex flex-wrap justify-start items-start">
                    <div
                        className="
                            mb-3 md:px-4 xs:px-0 text-black flex-col font-normal
                            md:mb-7 xs:mb-3 flex flex-wrap justify-start items-start
                            text-center mt-[50px]
                        "
                    >
                        {/* Overflow Container */}
                        <div className="flex overflow-x-auto whitespace-nowrap px-2 py-2">
                            {/* Ensure content fits and scrolls */}
                            <div className="rounded-lg border-[1px] p-1 gap-3 border-[#9ca5b0] flex justify-start items-center w-max">
                                <button
                                    onClick={() => setHeading("Open Orders")}
                                    className={`${heading === "Open Orders"
                                            ? "bg-[#353945] text-white whitespace-nowrap rounded-lg px-[21px] py-[5px] text-center"
                                            : "text-[#9ca5b0]"
                                        } flex justify-between items-center px-[21px] group whitespace-nowrap`}
                                >
                                    Open Orders
                                </button>

                                <button
                                    onClick={() => setHeading("Positions")}
                                    className={`${heading === "Positions"
                                            ? "bg-[#353945] text-white whitespace-nowrap rounded-lg px-[21px] py-[5px] text-center"
                                            : "text-[#9ca5b0]"
                                        } flex justify-between items-center px-[21px] group whitespace-nowrap`}
                                >
                                    Positions
                                </button>

                                <button
                                    onClick={() => setHeading("Order History")}
                                    className={`${heading === "Order History"
                                            ? "bg-[#353945] text-white whitespace-nowrap rounded-lg px-[21px] py-[5px] text-center"
                                            : "text-[#9ca5b0]"
                                        } flex justify-between items-center px-[21px] group whitespace-nowrap`}
                                >
                                    Order History
                                </button>

                                <button
                                    onClick={() => setHeading("Trade History")}
                                    className={`${heading === "Trade History"
                                            ? "bg-[#353945] text-white whitespace-nowrap rounded-lg px-[21px] py-[5px] text-center"
                                            : "text-[#9ca5b0]"
                                        } flex justify-between items-center px-[21px] group whitespace-nowrap`}
                                >
                                    Trade History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>
        </div>
    );
}


export default OrderChart;
