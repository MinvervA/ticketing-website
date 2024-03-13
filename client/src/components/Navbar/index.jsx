import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      console.log("test");
      setHeader(true);
    } else {
      setHeader(false);
      console.log(">>>>disni");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <div
      className={`fixed z-10 top-0 left-0 right-0 ${
        header
          ? "bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200"
          : "bg-white"
      } transition duration-300 ease-in-out`}
    >
      <div
        className={`navbar-wrapper md:px-[30px] md:max-w-[1300px] md:h-[82px] md:mx-auto container md:flex items-center md:justify-between md:py-0 py-4 px-4`}
      >
        <div className="navbar-left flex justify-between items-center md:gap-8">
          <div className="navbar-logo">
            <div className="text-2xl font-bold">BuytTix</div>
          </div>
          <div className="navbar-menu">
            <div className="font-bold">Explore events</div>
          </div>
          <div className="navbar-menu">
            <div className="menu-item text-[28px] flex item-center cursor-pointer md:hidden">
              {menuOpen ? (
                <RxCross1 onClick={() => setMenuOpen(!menuOpen)} />
              ) : (
                <IoMenu onClick={() => setMenuOpen(!menuOpen)} />
              )}
            </div>
          </div>
        </div>

        <div className="navbar-actions md:flex md:items-center md:gap-2">
          <div className="md:flex md:gap-2 hidden">
            <div className="action-create-event">
              <button className="bg-black text-white font-bold rounded-lg py-2 px-3 cursor active:scale-95 hover:scale-105 transition duration-300">
                Login
              </button>
            </div>
          </div>

          <div
            className={`menu-mobile md:hidden md:static absolute md:z-10 -z-[9999] ${
              menuOpen ? "top-[126px] h-screen opacity-100" : "top-[-50px] opacity-50"
            } left-0 right-0 md:p-0 transition-all duration-300`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
