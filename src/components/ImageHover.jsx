import React, { useEffect, useState } from "react";

const ImageWithHover = ({ defaultImage, hoverImage, finalImage, onHover }) => {
  const [hovered, setHovered] = useState(false);
  const [showFinalImage, setShowFinalImage] = useState(false);

  const handleMouseOver = () => {
    if (onHover) {
      console.log(hoverImage.split(".")[0] + "#.png");
      onHover(hoverImage.split(".")[0] + "__.png");
    }
    setHovered(true);
    setTimeout(() => {
      setShowFinalImage(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (!hovered) {
      const timer = setTimeout(() => {
        setShowFinalImage(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [hovered]);

  return (
    <div
      className="relative transition-all duration-300"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img src={defaultImage} alt="normal" />
      <img
        src={hoverImage}
        className={`absolute top-0 left-0  transition duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        } `}
        alt="hover"
      />
      <img
        src={finalImage}
        className={`absolute top-0 left-0  transition duration-500 ${
          showFinalImage ? "opacity-100" : "opacity-0"
        } `}
        alt="final"
      />
    </div>
  );
};

export default ImageWithHover;
