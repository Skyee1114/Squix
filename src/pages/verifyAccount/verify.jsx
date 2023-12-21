import React from "react";
import Button from "../../components/Buttons/Button";

export default function Verify() {
  return (
    <div className="h-[905px]  bg-[url('./assets/img/verify_back.png')] bg-cover bg-no-repeat flex flex-col pt-[113px] gap-[50px]">
      <div className="text-center text-white text-[54px] font-bold font-['Jost'] uppercase">
        Thanks for registration on SQUIX Games!
      </div>
      <div className="flex flex-row mx-auto">
        <div className="w-[801px] gap-[51px] p-20 bg-white rounded-tl-[3px] rounded-bl-[3px] shadow flex-col  items-start inline-flex relative">
          <div className="text-black text-[54px] font-bold font-['Jost'] uppercase leading-none ">
            Verify your account
          </div>
          <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
          <div className="w-[641px] h-[74.22px] text-black text-[23px] text-left font-normal font-['Jost'] leading-tight">
            Please click on the button below and receive the link on your email
            and verify your account by clicking on it.
          </div>
          <Button
            text={"Verify email"}
            className={"w-full text-center flex items-center justify-center"}
          />
        </div>
      </div>
    </div>
  );
}
