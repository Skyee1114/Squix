import React, { useState } from "react";

function ConceptArts() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="pt-12 max-w-[1520px] mx-auto">
      <img
        src="img/concept_art.png"
        alt="concept_art"
        className=" rounded-[3px]"
      />

      <div className="flex gap-5 pb-4 mt-4 overflow-x-auto" id="model_flow">
        {["1", "1", "1", "1", "1", "1", "1"].map((img, index) => (
          <img
            src="img/concept_art.png"
            alt="concept_art"
            className={`w-[365px] h-[169px] rounded-[3px] ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ConceptArts;
