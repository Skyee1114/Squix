import React from "react";
import InputText from "../../components/InputText";
import FacebookIcon from "../../assets/img/socials/facebook.png";
import GoogleIcon from "../../assets/img/socials/google_2.png";
import GoogleHoverIcon from "../../assets/img/socials/google2_.png";
import FacebookHoverIcon from "../../assets/img/socials/facebook_.png";
import InputCheckBox from "../../components/InputCheckBox";
import Button from "../../components/Buttons/Button";

export default function Register() {
  return (
    <div className=" bg-[url('./assets/img/login_back.png')] flex flex-col bg-cover bg-no-repeat bg-center justify-center py-[113px] gap-[50px]">
      <div className="text-center text-white text-[54px] font-bold font-['Jost'] uppercase">
        Welcome to SQUIX Games!
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-[654px] p-20 gap-[60px] bg-white rounded-tl-[3px] rounded-bl-[3px] shadow flex-col  items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase leading-none ">
            sign up
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
          <div className="flex-col justify-start items-start gap-[31px] flex w-full">
            <InputText
              name={"username"}
              placeholder={"Username*"}
              error={false}
              success={false}
              type={"text"}
            />
            <InputText
              name={"email"}
              placeholder={"E-mail*"}
              error={false}
              type={"text"}
              success={false}
            />
            <InputText
              name={"password"}
              placeholder={"Password"}
              error={false}
              success={false}
              type={"password"}
            />
            <div className="text-black text-sm font-normal font-['Jost']">
              *required form
            </div>
            <div className="w-[457px] h-10 justify-start items-center gap-2.5 inline-flex">
              <InputCheckBox />
              <div>
                <span className="text-black text-[15px] font-normal font-['Jost']">
                  I have read and agree to the{" "}
                </span>
                <span className="text-amber-500 text-[15px] font-normal font-['Jost'] underline">
                  Terms of Service{" "}
                </span>
                <span className="text-black text-[15px] font-normal font-['Jost']">
                  and{" "}
                </span>
                <span className="text-amber-500 text-[15px] font-normal font-['Jost'] underline">
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className="w-[457px] h-10 justify-start items-center gap-2.5 inline-flex">
              <InputCheckBox />
              <div>
                <span className="text-black text-[15px] font-normal font-['Jost']">
                  Subscribe to our newstellers
                </span>
              </div>
            </div>
            <Button
              text={"Register new account"}
              className={"w-full text-center flex items-center justify-center"}
            />
          </div>
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="text-black text-[23px] font-bold font-['Jost']">
              or login via
            </div>
            <div className="inline-flex items-start justify-start gap-5">
              <div className="relative bg-black rounded-[3px]  cursor-pointer ">
                <img src={FacebookIcon} alt="" width={50} height={50} />
                <img
                  src={FacebookHoverIcon}
                  className="absolute h-[51px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="relative bg-black rounded-[3px] cursor-pointer ">
                <img src={GoogleIcon} alt="" width={50} height={50} />
                <img
                  src={GoogleHoverIcon}
                  className="absolute h-[50px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
