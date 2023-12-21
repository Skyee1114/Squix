import React from "react";
import { Link } from "react-router-dom";
import SelectLang from "./SelectLang";
import ProfileButtons from "./ProfileButtons";
import LogoSvg from "../assets/img/logo.svg";

export default function Header() {
  return (
    <div className="pb-24 ">
      <div className="relative z-20 flex justify-between">
        <img src={LogoSvg} alt="logo" width={"152px"} />
        <div className="flex gap-5">
          <Link
            to={"/"}
            className="font-bold text-[20px] text-white h-fit hover:text-[#FFA801]"
          >
            PLAYTEST
          </Link>
          <Link
            to={"/"}
            className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
          >
            ROADMAP
          </Link>
          <Link
            to={"/"}
            className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
          >
            CAREERS
          </Link>
          <Link
            to={"/"}
            className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
          >
            CONTACTS
          </Link>
          <SelectLang />
          <ProfileButtons />
        </div>
      </div>
    </div>
  );
}
