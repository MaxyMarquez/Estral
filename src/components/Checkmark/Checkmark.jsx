import React from "react";

import "./Checkmark.css";

const Checkmark = () => {
  return (
    <>
      <svg
        className="checkmark"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
      >
        <polyline
          class="path check"
          fill="none"
          stroke=""
          stroke-width="6"
          stroke-linecap="round"
          stroke-miterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
    </>
  );
};

export default Checkmark;
