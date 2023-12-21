import React from "react";
import Button from "../../components/Buttons/Button";

export default function Thanks() {
  return (
    <div className="h-[905px]  bg-[url('./assets/img/verify_back.png')] bg-cover bg-no-repeat flex flex-col pt-[113px] gap-[50px]">
      <div className="text-center text-white text-[54px] font-bold font-['Jost'] uppercase">
        Thanks for registration on SQUIX Games!
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-[801px] gap-[51px] p-20 bg-white rounded-tl-[3px] rounded-bl-[3px] shadow flex-col  items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase leading-none ">
            Account verified!
          </div>
          <div className="w-[548px] h-16 p-5 bg-[#88A34F] bg-opacity-20 justify-start items-center gap-[18px] inline-flex">
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
                    id="Vector 7"
                    d="M21.9844 5.24508L8.47457 18.7549L2.01572 12.296"
                    stroke="#89A450"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <div className="text-black text-xl font-medium font-['Jost']">
              Your account is active
            </div>
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
          <div className="w-[641px] h-[74.22px] text-black text-[23px] text-left font-normal font-['Jost'] leading-tight">
            Thank you for verification your account. You can go forward to the
            website.
          </div>
          <Button
            text={"Go to my account"}
            className={"w-full text-center flex items-center justify-center"}
          />
        </div>
      </div>
    </div>
  );
}
