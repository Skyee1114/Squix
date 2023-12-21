import React from "react";
import Arrow from "./Arrow";
import Button from "./Buttons/Button";

export default function HelpUs() {
  return (
    <div className=" h-[674px] -mt-[1px]  z-10   relative bg-gradient-to-l to-[#FF9D42] from-[#AB2929]  ">
      <div className="absolute w-full h-full bg-no-repeat z-0 bg-contain bg-[url('./assets/img/Elf_Female_mage.png')]"></div>
      <div className="max-w-[1520px] mx-auto relative pt-[77px] flex flex-col gap-7">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-[30px] w-[482px]">
            <div className="p-2.5 bg-white bg-opacity-60 rounded-[3px] text-black text-sm font-bold font-['Jost'] uppercase leading-[9.94px] w-fit">
              99999 people supported project
            </div>
            <div className="text-black text-[97px] font-bold font-['Jost'] uppercase leading-[92px] text-left">
              Help us
              <br />
              grow
            </div>
            <div className=" text-black text-[23px] font-normal font-['Jost'] leading-none text-left">
              Facilisis bibendum blandit adipiscing mi elit netus vulputate
              ultrices odio libero et. Congue maecenas adipiscing venenatis
              laoreet hac.
            </div>
            <Button
              text={"View more details"}
              type={"black"}
              className={
                "px-[30px] py-[17px] bg-black rounded-[3px] text-white text-xl font-bold font-['Jost'] uppercase w-fit"
              }
            />
          </div>
          <div className="flex flex-col -mt-[140px] gap-[19px] ">
            <div className=" flex flex-row gap-[13px]">
              <div className="bg-[url('./assets/img/sproud.png')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden  w-[315.35px] h-[482.25px]">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[18px]">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Rectangle 21"
                        d="M5.62692 30.9478C3.72008 32.7783 0.549316 31.4269 0.549316 28.7836L0.549315 3.30223C0.549315 1.64537 1.89246 0.302227 3.54931 0.302227L30.0924 0.302226C32.7947 0.302226 34.1194 3.59494 32.17 5.46639L5.62692 30.9478Z"
                        fill="url(#paint0_linear_1282_8867)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1282_8867"
                          x1="-78.1491"
                          y1="14.3117"
                          x2="-57.5874"
                          y2="-40.7836"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFAE00" />
                          <stop offset="1" stopColor="#FF7A00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-4 px-5 z-10 ">
                        <div className="text-white text-[32px] font-bold font-['Jost'] leading-[23px]">
                          25
                        </div>
                        <div className="text-right text-white text-[17px] font-bold font-['Jost'] leading-3">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-6 pr-6">
                      <div className="text-right text-white text-[43px] font-bold font-['Jost'] leading-[30.53px]">
                        Sproud
                      </div>
                      <div className="text-right text-yellow-400 text-xl font-bold font-['Jost'] leading-[14.20px] pb-[34px]">
                        View details >
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    width={170}
                    height={176}
                    alt=""
                    className=" absolute -bottom-[1px] -left-[1px] z-0"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/orignal.png')] relative cursor-pointer shadow-3xl  overflow-hidden  bg-cover  w-[315.35px] h-[482.25px]">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[18px]">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Rectangle 21"
                        d="M5.62692 30.9478C3.72008 32.7783 0.549316 31.4269 0.549316 28.7836L0.549315 3.30223C0.549315 1.64537 1.89246 0.302227 3.54931 0.302227L30.0924 0.302226C32.7947 0.302226 34.1194 3.59494 32.17 5.46639L5.62692 30.9478Z"
                        fill="url(#paint0_linear_1282_8867)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1282_8867"
                          x1="-78.1491"
                          y1="14.3117"
                          x2="-57.5874"
                          y2="-40.7836"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFAE00" />
                          <stop offset="1" stopColor="#FF7A00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-4 px-5 z-10 ">
                        <div className="text-white text-[32px] font-bold font-['Jost'] leading-[23px]">
                          50
                        </div>
                        <div className="text-right text-white text-[17px] font-bold font-['Jost'] leading-3">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-6 pr-6">
                      <div className="text-right text-white text-[43px] font-bold font-['Jost'] leading-[30.53px]">
                        Orignal
                      </div>
                      <div className="text-right text-yellow-400 text-xl font-bold font-['Jost'] leading-[14.20px] pb-[34px]">
                        View details >
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    width={170}
                    height={176}
                    alt=""
                    className=" absolute -bottom-[1px] -left-[1px] z-0"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.png')] relative shadow-3xl  overflow-hidden  bg-cover  cursor-pointer w-[315.35px] h-[482.25px]">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[18px]">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Rectangle 21"
                        d="M5.62692 30.9478C3.72008 32.7783 0.549316 31.4269 0.549316 28.7836L0.549315 3.30223C0.549315 1.64537 1.89246 0.302227 3.54931 0.302227L30.0924 0.302226C32.7947 0.302226 34.1194 3.59494 32.17 5.46639L5.62692 30.9478Z"
                        fill="url(#paint0_linear_1282_8867)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1282_8867"
                          x1="-78.1491"
                          y1="14.3117"
                          x2="-57.5874"
                          y2="-40.7836"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFAE00" />
                          <stop offset="1" stopColor="#FF7A00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-4 px-5 z-10 ">
                        <div className="text-white text-[32px] font-bold font-['Jost'] leading-[23px]">
                          80
                        </div>
                        <div className="text-right text-white text-[17px] font-bold font-['Jost'] leading-3">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-6 pr-6">
                      <div className="text-right text-white text-[43px] font-bold font-['Jost'] leading-[30.53px]">
                        Pioneer
                      </div>
                      <div className="text-right text-yellow-400 text-xl font-bold font-['Jost'] leading-[14.20px] pb-[34px]">
                        View details >
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    width={170}
                    height={176}
                    alt=""
                    className=" absolute -bottom-[1px] -left-[1px] z-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="flex bg-black rounded-[3px]">
                <Arrow direction="left" />
                <Arrow direction="right" />
              </div>
              <div className="text-right text-white text-[32px] font-bold font-['Jost'] leading-[37.22px]">
                3/7
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="text-white text-base font-bold font-['Jost'] uppercase leading-none">
              Start
            </div>
            <div className="text-white text-base font-bold font-['Jost'] uppercase leading-none">
              Our goal
              <br />
              600 000 EUR
            </div>
          </div>
          <img src="img/donation_progress_bar.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
