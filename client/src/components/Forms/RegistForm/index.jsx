import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./RegistForm.css";

const RegistForm = () => {
  return (
    <div>
      <div className="regist-section-container regist-section-heading flex flex-col items-start mb-12">
        <div className="regist-heading-logo mb-10">
          {/* <Link to="/"> */}
          <p className="text-2xl font-extrabold">BuyTix</p>
          {/* </Link> */}
        </div>
        <div className="regist-heading-title">
          <h1 className="text-black font-extrabold text-5xl text-start">Create an account</h1>
        </div>
      </div>
      <div className="regist-form">
        <div className="form-container">
          <div className="flex flex-col gap-4">
            <div className="form-group">
              <div className="input-combo flex gap-2 items-center rounded-lg py-3 px-4">
                <VscAccount size={25} />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full font-semibold outline-none"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-combo flex gap-2 items-center rounded-lg py-3 px-4">
                <MdOutlineAlternateEmail size={25} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full font-semibold outline-none"
                />
              </div>
            </div>
            <div className="form-group mt-2 ">
              <div className="input-combo flex gap-2 items-center rounded-lg py-3 px-4">
                <RiLockPasswordLine size={25} />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full font-semibold outline-none"
                />
              </div>
            </div>
            <div className="form-group mt-2">
              <button
                type="submit"
                className="rounded-lg py-3 px-4 w-full hover:scale-105 active:scale-100"
              >
                <span className="font-bold text-lg text-white [text-shadow:0_0_4px_rgb(0_0_0_/_70%)]">
                  Log in
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="split-form my-8">
        <span className="border-2 pill px-4 py-[2px] rounded-full text-sm text-center font-medium text-gray-400">
          or
        </span>
      </div>
      <div className="regist-google mb-8">
        <a
          href="/"
          type="submit"
          className="rounded-lg w-full py-3 px-4 border-gray-600 border hover:border-gray-300 flex justify-center items-center gap-2 bg-white duration-150"
        >
          <FcGoogle size={24} />
          <span className="text-md font-semibold">Sign in with Google</span>
        </a>
      </div>
    </div>
  );
};

export default RegistForm;
