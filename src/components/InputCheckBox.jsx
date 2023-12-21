import React, { useState } from "react";
import CheckedIcon from "../assets/img/checkedIcon.svg";

const InputCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={` ${
        isChecked ? "border-2" : "border"
      } w-10 h-10 rounded-[3px]  border-[#FFA601] hover:border-2 cursor-pointer`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className=""
        hidden
      />
      <span className="">
        {isChecked && (
          <img src={CheckedIcon} className="h-full" alt="Checked" />
        )}
      </span>
    </label>
  );
};

export default InputCheckBox;
