import React from "react";
import "./RegistPage.css";
import RegistForm from "../../../Components/Forms/RegistForm";

const RegistPage = () => {
  return (
    <div className="bg-black">
      <div className="RegistPage w-full h-[5000px]">
        <div className="regist-page-container grid md:grid-cols-2 grid-cols-1">
          <div className="regist-Page"></div>
          <div className="regist-section h-[100vh] px-8 flex items-center bg-white">
            <div className="regist-section-container w-[360px] m-auto">
              <RegistForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistPage;
