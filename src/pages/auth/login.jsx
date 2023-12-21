import React from "react";
import Button from "../../components/Buttons/Button";
import InputText from "../../components/InputText";
import FacebookIcon from "../../assets/img/socials/facebook.png";
import GoogleIcon from "../../assets/img/socials/google_2.png";
import GoogleHoverIcon from "../../assets/img/socials/google2_.png";
import FacebookHoverIcon from "../../assets/img/socials/facebook_.png";

export default function Login() {
  return (
    <div className="h-[1238px] bg-[url('./assets/img/login_back.png')] flex flex-col justify-center pt-[113px] gap-[50px] bg-cover bg-no-repeat">
      <div className="text-center text-white text-[54px] font-bold font-['Jost'] uppercase">
        Welcome to SQUIX Games!
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-[654px] h-[750px] p-20 bg-white rounded-tl-[3px] rounded-bl-[3px] shadow flex-col justify-between items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase">
            Login
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
          <div className="text-black text-[23px] font-normal font-['Jost'] leading-relaxed">
            Already have an account?
          </div>
          <div className="h-[227px] flex-col justify-start items-start gap-[31px] w-full flex">
            <InputText
              name={"email"}
              placeholder={"Email"}
              error={false}
              success={false}
            />
            <InputText
              name={"password"}
              placeholder={"Password"}
              error={false}
              success={false}
            />

            <Button
              text={"Login"}
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
              <div className="relative bg-black rounded-[3px]  cursor-pointer ">
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
        <div className="w-[654px] h-[750px] p-20 bg-[#F5F5F5] rounded-tr-[3px] rounded-br-[3px] flex-col justify-between items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase">
            Sign up
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />

          <div className="h-[309.43px] flex-col justify-start items-start gap-[115px] flex">
            <div className="self-stretch h-[131.43px] text-black text-[23px] font-normal font-['Jost'] leading-relaxed text-left">
              If you dont have account and want support us - register one! If
              you dont have account and want support us - register one!
            </div>
            <Button
              text={"Register new account"}
              className={"w-full text-center flex items-center justify-center"}
            />
          </div>
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="text-black text-[23px] font-bold font-['Jost']">
              or sign up via
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
              <div className="relative bg-black rounded-[3px]  cursor-pointer ">
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
