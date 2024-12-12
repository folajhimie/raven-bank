

import Number from "../../../assets/svg/Number.svg";
import Undo from "../../../assets/svg/undo.svg";
import Redo from "../../../assets/svg/redo.svg";
import Indicators from "../../../assets/svg/Indicators.svg";
import CandleChart from "../../../assets/svg/Candle-Chart.svg";
import Expand from "../../../assets/svg/Expand.svg";
import Containers from "../../../assets/svg/container.svg"




function Chart() {
  return (
    <div>
      <div>
        <section
          className="
          bg-center flex "
        >
          <div className="flex flex-col w-full">
            <div className="relative flex z-40 flex-col w-full ">
              <div className="md:w-fit xs:w-full ">
                <div className=" bg-primary rounded grid md:grid-cols-5 xs:grid-cols-1 justify-between  px-2 py-0 border-black border-t-2 w-full">
                  <div className="flex overflow-x-auto whitespace-nowrap px-2 py-0 gap-[12px] col-span-3">
                    <div className="flex justify-start items-center">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-[#9ca5b0] text-[12px]">Time</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-[#9ca5b0] text-[12px]">1H</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-[#9ca5b0] text-[12px]">2H</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-[#9ca5b0] text-[12px]">4H</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-white text-[12px] px-3 py-1 rounded-full bg-gray-500">1D</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center ">
                      <div className="my-2 flex flex-col">
                        <div className="flex justify-start items-center gap-2">
                          <div className="text-[#9ca5b0] text-[12px]">1W</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center ">
                      <div className="my-2 flex py-0">
                        <div className="flex justify-start items-center gap-0 ">
                          <img
                            alt=""
                            src={Number}
                            className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex md:border-r-[0.5px] md:border-l-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 px-2 md:py-2 xs:py-0">
                        <div className="flex justify-start items-center">
                          <img
                            alt=""
                            src={CandleChart}
                            className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start items-center">
                      <div className="my-2 flex md:border-r-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 md:px-2 xs:px-0 md:py-2 xs:py-0">
                        <div className="flex justify-start items-center">
                          <img
                            alt=""
                            src={Indicators}
                            className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>


                    <div className="flex justify-start items-center">
                      <div className="my-2 flex gap-2 md:border-r-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 px-2 py-2">
                        <div className="flex justify-start items-center gap-0">
                          <img
                            alt=""
                            src={Undo}
                            className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain"
                          />
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <img
                            alt=""
                            src={Redo}
                            className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex md:justify-end xs:justify-start items-center px-4 col-span-2">
                    <div className="my-2">
                      <img
                        alt=""
                        src={Expand}
                        className="text-[1px] md:w-full md:h-full xs:w-full xs:h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-start items-center w-full ">
                  <div className="my-0">
                    <img
                      alt=""
                      src={Containers}
                      className="text-[1px] w-full h-full"
                    />

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

      </div>


    </div>
  );
}

export default Chart;
