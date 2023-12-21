import React from "react";
import ArrowRight from "../assets/img/arrow_right.svg";
import ArrowLeft from "../assets/img/arrow_left.svg";

export default function Arrow({ direction, onClick }) {
  if (direction === "right")
    return (
      <div
        className="px-4 py-3 bg-black rounded-tr-[3px] rounded-br-[3px] hover:bg-[#FFA801] cursor-pointer duration-300"
        onClick={onClick}
      >
        <img src={ArrowRight} alt="" />
      </div>
    );
  else if (direction === "left")
    return (
      <div
        className="px-4 py-3 bg-black rounded-tl-[3px] rounded-bl-[3px] hover:bg-[#FFA801] cursor-pointer duration-300"
        onClick={onClick}
      >
        <img src={ArrowLeft} alt="" />
      </div>
    );
}
