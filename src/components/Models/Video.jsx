import React, { useState, useEffect } from "react";

function Video() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [playHover, setPlayHover] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pt-12 max-w-[1520px] mx-auto">
      <div className="relative">
        <img src="img/video.png" alt="video" className="mx-auto" />
        <img
          src={`img/${playHover ? "play_btn_hover.svg" : "play_btn.svg"}`}
          alt="play"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[132px] h-[132px]"
          onMouseEnter={() => setPlayHover(true)}
          onMouseLeave={() => setPlayHover(false)}
        />
      </div>

      <div className="flex gap-5 pb-4 mt-4 overflow-x-auto" id="model_flow">
        {["1", "1", "1", "1", "1", "1", "1"].map((img, index) => (
          <img
            src="img/concept_art.png"
            alt="concept_art"
            className={`w-[365px] h-[169px] ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Video;
