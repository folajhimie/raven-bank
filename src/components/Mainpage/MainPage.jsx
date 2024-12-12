import Coin from "../../assets/svg/coin.svg";
import Clock from "../../assets/svg/clock.svg";
import ArrowUp from "../../assets/svg/arrow-up.svg";
import ArrowDown from "../../assets/svg/arrow-down.svg"
import Shape from "../../assets/svg/Shape.svg"
import Chart from "./Chart/Chart.jsx"
import OrderChart from "./OrderBook/Order-Chart.jsx";
import OpenOrder from "./OpenOrder/OpenOrder.jsx"



function MainPage() {
  return (
    <div>
      <div>
        {/* <div className="bg-slate-900 opacity-30 absolute z-20 lg:h-screen md:h-[70vh] sm:h-screen xs:h-screen w-full"></div> */}
        <section
          className="
          bg-center flex  mt-[4.1rem] w-full border-b-black border"
        >
          <div className="flex flex-col w-full">
            <div className="relative flex z-40 w-full">
              <div className=" bg-primary flex md:flex-row xs:flex-col px-2 py-2 border-gray border-t-2 w-full">
                <div className="flex justify-start items-center px-4 md:border-r-[0.5px] my-2 py-1 xs:border-r-none border-[#EAF0FE] border-opacity-50">
                  <div className="my-2">
                    <img
                      alt=""
                      src={Coin}
                      className="text-[1px] md:w-full md:h-full xs:w-full xs:h-full"
                    />

                  </div>
                  <div className="text-green-600">$20,634</div>
                </div>

                {/* <div className="bg-gray-50 w-[0.5px] md:flex xs:hidden h-full mx-3 "></div> */}
                <div className="flex overflow-x-auto whitespace-nowrap px-2 py-2">
                  <div className="flex justify-start items-center">
                    <div className="my-2 flex flex-col md:border-r-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 px-4 py-1 pr-14">
                      <div className="flex justify-start items-center gap-2">
                        <img
                          alt=""
                          src={Clock}
                          className="text-[1px] w-[16px] h-[16px]"
                        />
                        <div className="text-[#9ca5b0] text-[12px]">24h Change</div>
                      </div>
                      <div className="text-green-600 flex gap-2">
                        <span>520.80</span>
                        <span>+</span>
                        <span className="flex justify-center items-center">1.25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="my-2 flex flex-col md:border-r-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 px-4 py-1 pr-14">
                      <div className="flex justify-start items-center gap-2">
                        <img
                          alt=""
                          src={ArrowUp}
                          className="text-[1px] w-[16px] h-[16px]"
                        />
                        <div className="text-[#9ca5b0] text-[12px] whitespace-nowrap">24h High</div>
                      </div>
                      <div className="text-[#EAF0FE] flex gap-2 flex-row">
                        <span>520.80</span>
                        <span>+</span>
                        <span className="flex justify-center items-center">1.25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="my-2 flex flex-col md:border-r-[0.5px] xs:border-r-none border-[#EAF0FE] border-opacity-50 px-4 py-1 pr-14">
                      <div className="flex justify-start items-center gap-2">
                        <img
                          alt=""
                          src={ArrowDown}
                          className="text-[1px] w-[16px] h-[16px]"
                        />
                        <div className="text-[#9ca5b0] text-[12px]">24h Low</div>
                      </div>
                      <div className="text-[#EAF0FE] flex gap-2 flex-row">
                        <span>520.80</span>
                        <span>+</span>
                        <span className="flex justify-center items-center">1.25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="my-2 flex flex-col px-4 py-1 pr-14">
                      <div className="flex justify-start items-center gap-2">
                        <img
                          alt=""
                          src={Shape}
                          className="text-[1px] w-[16px] h-[16px]"
                        />
                        <div className="text-[#9ca5b0] text-[12px]">24h Volume</div>
                      </div>
                      <div className="text-[#EAF0FE] flex gap-2 flex-row">
                        <span>75.655.26</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </section>

      </div>

      <div className="grid md:grid-cols-5 xs:grid-cols-1 gap-2">
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="grid md:grid-cols-4 xs:grid-cols-1 md:gap-1 xs:gap-0 h-full bg-primary">
              <div className="col-span-3 h-full w-full">
                <Chart />

              </div>
              <div className="col-span-1 h-full ">
                <OrderChart />
                {/* <div className="bg-red-500">hello</div> */}
              </div>
            </div>

            <div className="w-full bg-primary">
              <div className="w-full overflow-x-auto bg-primary">
                <OpenOrder />

              </div>
              <div className="md:w-full xs:w-full flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center w-full h-screen text-white">
                  <div className="text-[25px]">No Open Orders</div>
                  <div className="flex justify-center items-center flex-col text-[#9ca5b0] px-2 md:text-[15px] xs:text-[10px]">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                    <div>Id pulvinar nullam sit imperdiet pulvinar.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="col-span-1">
          <div>Hello</div>

        </div>
      </div>


      {/* <div>
        <BasicSection />
      </div>
      <div>
        <ServiceSection />
      </div>
      <div>
        <MiddlePage />
      </div>
      <div>
        <SupportSection />
      </div>
      <div>
        <FaqSection />
      </div> */}
    </div>
  );
}

export default MainPage;


