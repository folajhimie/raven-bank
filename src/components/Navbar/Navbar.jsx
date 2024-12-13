import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Button from "../primaryButton/PrimaryButton.jsx";
// import PrimaryButton from "../primaryButton/PrimaryButton.jsx";
// import SecondaryButton from "../secondaryButton/SecondaryButton.jsx";
import NavLinks from "./NavLinks";
import useMediaQuery from "../../hooks/useMediaQuery.jsx";
// import { links } from "./Mylinks";
// import NavbarLinks from "./NavbarLinks";
// import CartTel from "../../assets/Home/CARTEL.png"

import Sisyphus from "../../assets/Home/home.svg";
import Profile from "../../assets/images/profile.svg"
import Signout from "../../assets/images/signout.svg"
import Globe from "../../assets/images/globe.svg";
import AngleRight from "../../assets/images/angle-right.svg"







const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

// eslint-disable-next-line react/prop-types
const Navbar = ({ isTopOfPage }) => {
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage ? "bg-[#20252B]" : "bg-[#f2f7ff]";
  // const [heading, setHeading] = useState("")

  const OpenScreen = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${navbarBackground} fixed w-full top-0 left-0 z-50 bg-primary`}>

      {isAboveMediumScreens && (
        <div className="flex items-center font-medium justify-between mx-2 bg-primary">
          <div className="z-50 p-3 md:w-auto w-full flex justify-around">
            <div className="mr-7">
              <Link className="px-2 w-full  flex flex-row justify-center" to="/">

                <div className=" text-start justify-start mx-auto text-primary cursor-pointer w-full flex">
                  <div className="w-[150px]">
                    <img
                      alt=""
                      src={Sisyphus}
                      className="text-[1px] md:w-full md:h-full xs:w-full xs:h-full"
                    />

                  </div>
                </div>
              </Link>
              <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>

              </div>
            </div>
            <div className="bg-[#EAF0FE] opacity-50 w-[1px] md:flex xs:hidden"></div>

            <ul className="md:flex hidden capitalize items-center gap-2 font-[Poppins] xl:text-sm lg:text-xs md:ml-10">
              <li>
                <Link to="/" className="text-white font-normal text-md py-2 px-3 inline-block">
                  Exchange
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#9ca5b0] font-normal text-md py-2 px-3 inline-block">
                  Wallets
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#9ca5b0] font-normal text-md py-2 px-3 inline-block">
                  Roqqu Hub
                </Link>
              </li>
            </ul>
          </div>
          <ul className="md:flex hidden capitalize items-center gap-4 font-[Poppins] xl:text-sm lg:text-xs">
            {/* <li>
              <Link to="/" className=" py-2 px-3 inline-block">
                Home
              </Link>
            </li> */}
            <NavLinks />
            <div className="flex w-auto justify-between gap-2">
              {/* <div className="md:block hidden">
                <Link className="link flex items-center" to="/auth/login">
                  <PrimaryButton text={"sign in"} />
                </Link>
              </div> */}

              <div className="md:block hidden">
                <div className="flex items-center justify-center bg-[#12171D] h-full py-1 px-2 rounded gap-2" >
                  <img
                    alt=""
                    src={Profile}
                    className="text-[1px] md:w-[36px] md:h-[36px] xs:w-full xs:h-full"
                  />
                  <div className="text-white">Olakunle Temi..</div>
                  <img
                    alt=""
                    src={AngleRight}
                    className="text-[1px] md:w-[24px] md:h-[24px] xs:w-full xs:h-full"
                  />
                </div>
              </div>




              <div className="md:block hidden">
                <div className="flex items-center justify-center h-full px-2 rounded gap-2" >
                  <img
                    alt=""
                    src={Globe}
                    className="text-[1px] md:w-[24px] md:h-[24px] xs:w-full xs:h-full"
                  />
                  <img
                    alt=""
                    src={Signout}
                    className="text-[1px] md:w-[24px] md:h-[24px] xs:w-full xs:h-full"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className="flex items-center font-medium justify-between ">
          <div
            className="z-50 py-0 w-full flex justify-around"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="py-3">
                <Link className=" w-full  flex flex-row justify-center" to="/">

                  <div className=" text-start justify-start mx-auto text-primary cursor-pointer w-full flex">
                    <div className="w-[150px]">
                      <img
                        alt=""
                        src={Sisyphus}
                        className="text-[1px] md:w-full md:h-full xs:w-full xs:h-full"
                      />

                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="block">
                  <div className="flex items-center justify-center h-full py-1 px-2 rounded gap-2" >
                    <img
                      alt=""
                      src={Profile}
                      className="text-[1px] md:w-[36px] md:h-[36px] xs:w-full xs:h-full"
                    />
                  </div>
                </div>

                <div className="block">
                  <div className="flex items-center justify-center h-full px-2 rounded gap-2" >
                    <img
                      alt=""
                      src={Globe}
                      className="text-[1px] md:w-[24px] md:h-[24px] xs:w-full xs:h-full"
                    />
                    
                  </div>
                </div>
                <button
                  className="text-primary text-3xl py-3"
                  onClick={() => setOpen(!open)}
                >
                  {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
                  <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: {
                          d: "M 2 2.5 L 20 2.5",
                          stroke: "rgba(129,139,160,1)",
                        },
                        open: {
                          d: "M 3 16.5 L 17 2.5",
                          stroke: "rgba(129,139,160,1)",
                        },
                      }}
                      transition={transition}
                    />
                    <Path
                      d="M 2 9.423 L 20 9.423"
                      stroke="#818ba0"
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      transition={transition}
                    />
                    <Path
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: {
                          d: "M 2 16.346 L 20 16.346",
                          stroke: "rgba(129,139,160,1)",
                        },
                        open: {
                          d: "M 3 2.5 L 17 16.346",
                          stroke: "rgba(129,139,160,1)",
                        },
                      }}
                      transition={transition}
                    />
                  </svg>
                </button>

              </div>



            </div>
          </div>
          <div>
            <div
              onClick={OpenScreen}
              className={`${open ? "left-0" : "left-[-100%]"
                } absolute left-0 top-40 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full h-screen`}
            ></div>

            <ul
              className={`
              bg-primary fixed h-fit top-[65px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-full
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
              style={{
                height: "100%",
                // width: '100%',
                flex: "1",
                padding: "1rem 1.1rem 1rem 1rem",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <li>
                <Link to="/" className="text-white py-4 px-1 inline-block capitalize">
                  Exchange
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white py-4 px-1 inline-block capitalize">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white py-4 px-1 inline-block capitalize">
                  Roqqu Hub
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white py-4 px-1 inline-block capitalize">
                  Log Out
                </Link>
              </li>

            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




