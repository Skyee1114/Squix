import React, { useState } from "react";
import Model3D from "./Model3D";
import ConceptArts from "./ConceptArts";
import Video from "./Video";
import Lore from "./Lore";

const ModelPage = () => {

  const [viewType, setViewType] = useState("3D MODEL");
  const btnClass =
    "font-bold text-[20px] text-center flex items-center justify-center relative cursor-pointer w-[200px] h-[60px] bg-repeat-round duration-300 ease-in-out";
  const activeClass = "bg-[url('./assets/img/3dbtn_back.svg')] text-[#FFA801]"; // Custom class for active state
  const inactiveClass = "bg-btn-inactive text-white hover:text-[#FFA801]";

  return (
    <div
      className="bg-[url('./assets/img/model_back.png')] bg-center py-16"
      style={{
        backgroundImage:
          "radial-gradient(closest-side at 60% 55%, #5C5650, #312c24)",
      }}
    >
      <div className="pt-12 max-w-[1520px] mx-auto">
        <div className="flex items-center gap-[138px]">
          <img src="img/logoP3.png" alt="logoP3" className="w-[237px]" />
          <div className="flex gap-8 z-30">
            {["3D MODEL", "CONCEPT ARTS", "VIDEO", "LORE"].map(
              (item, index) => {
                const isActive = viewType === item;
                return (
                  <div
                    className={`${btnClass} ${
                      isActive ? activeClass : inactiveClass
                    }`}
                    onClick={() => {
                      setViewType(item);
                    }}
                    key={index}
                  >
                    {item}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      {viewType === "3D MODEL" && <Model3D />}
      {viewType === "CONCEPT ARTS" && <ConceptArts />}
      {viewType === "VIDEO" && <Video />}
      {viewType === "LORE" && <Lore />}
    </div>
  );

};

export default ModelPage;
