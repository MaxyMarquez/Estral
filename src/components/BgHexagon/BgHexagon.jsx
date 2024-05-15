import React from "react";
import { useEffect } from "react";

import "./styles.css";

const BgHexagon = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const hexagonEffect = document.querySelector(".hexagon-effect");
      if (window.innerWidth > 1280) {
        hexagonEffect.style.left = `${e.clientX}px `;
        hexagonEffect.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="hexagon-container">
        <div className="hexagon-bg">
          <div className="hexagon-content">{children}</div>
        </div>
        <div className="hexagon-effect"></div>
      </div>
    </>
  );
};

export default BgHexagon;
