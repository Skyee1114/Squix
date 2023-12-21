import React, { useState } from "react";
import ModelScene from "./ModelScene";
import Model3DSvg from "../../assets/img/model3d.svg";

const Model3D = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

    return (
        <div className="flex justify-between max-w-[1520px] mx-auto">
            <div className="h-[750px] min-w-[400px] overflow-y-auto mt-4 pe-4" id="model_flow">
                <div className="sticky top-0 w-[365px] h-20 bg-gradient-to-b from-[#3b362b] to-transparent mt-[-92px]">
                </div>
                {["1", "2", "3", "4", "5", "6"].map((image, index) => (
                    <img
                        key={index}
                        src={Model3DSvg}
                        alt={""}
                        className={`w-[365px] my-4 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
                        onClick={() => handleClick(index)}
                    />
                ))}
                <div className="sticky bottom-[-1px] h-20 bg-gradient-to-t from-[#3b362b] to-transparent w-[365px] mt-[-92px]">
                </div>
            </div>
            <div className="w-full relative z-10">
                <img
                    src="img/group_11.png"
                    alt="group11"
                    className="absolute w-[1368px] left-1/2 transform -translate-x-1/2 translate-y-[-230px]"
                />


        <img
          src="img/races-logo-detailed.svg"
          alt="race_logo"
          className="absolute w-[750px] left-1/2 transform -translate-x-1/2 translate-y-[-100px] opacity-20"
        />
        <ModelScene />
        <div className="relative">
          <img
            src="img/rotate_guide.svg"
            alt="rotate_guide"
            className="w-[226px] mx-auto mt-[-100px] pb-[50px]"
          />
          <img
            src="img/rotate_guide_hover.svg"
            alt="rotate_guide"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition duration-300 opacity-0 hover:opacity-100 w-[226px] mx-auto mt-[-100px] pb-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Model3D;
