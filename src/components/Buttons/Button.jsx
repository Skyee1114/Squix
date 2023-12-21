import React from "react";
import "./Button.css";

const Button = ({ text, onClick, className, type, icon }) => {
  const defaultGradient = {
    backgroundImage:
      "linear-gradient(180deg, #FFAE00 -12.86%, #FF7A00 111.98%)",
  };
  const hoverGradient = {
    backgroundImage:
      "linear-gradient(180deg, #FFCB5C -12.86%, #FFB800 111.98%)",
  };

  return (
    <button
      className={`button transition-all flex gap-3 h-[63px] ease-in-out duration-300 disabled:bg-primary-disabled text-white font-bold text-[20px] px-[30px] py-[17px] rounded cursor-pointer uppercase ${className} ${
        type === "black" ? "bg-black  " : "bg-primary-gradient"
      }`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" />}
      <span className="z-10 ">{text}</span>
    </button>
  );
};

export default Button;
