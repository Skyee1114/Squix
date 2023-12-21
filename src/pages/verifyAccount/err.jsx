import React from "react";
import Button from "../../components/Buttons/Button";

export default function Err() {
  return (
    <div className="h-[905px] bg-[url('./assets/img/verify_back.png')] bg-cover bg-no-repeat flex flex-col pt-[113px] gap-[50px]">
      <div className="text-center text-white text-[54px] font-bold font-['Jost'] uppercase">
        Thanks for registration on SQUIX Games!
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-[801px] gap-[34px] p-20 bg-white rounded-tl-[3px] rounded-bl-[3px] shadow flex-col  items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase leading-none ">
            Error
          </div>
          <div className="w-[548px] h-16 p-5 bg-[#A34F4F] bg-opacity-20 justify-start items-center gap-[18px] inline-flex">
            <div className="relative w-6 h-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="signs">
                  <path
                    id="Vector 8"
                    d="M18.5098 4.99996L4.99996 18.5098"
                    stroke="#A45050"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector 9"
                    d="M5 4.99996L18.5098 18.5098"
                    stroke="#A45050"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <div className="text-black text-xl font-medium font-['Jost']">
              Error
            </div>
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
          <div className="w-[641px] text-black text-[23px] text-left font-normal font-['Jost'] leading-tight">
            Something went wrong. Try again later
          </div>
          <Button
            text={"Try verify again"}
            className={"w-full text-center flex items-center justify-center"}
          />
        </div>
      </div>
    </div>
  );
}
