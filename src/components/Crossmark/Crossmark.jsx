import React from "react";

import "./Crossmark.css";

const Crossmark = () => {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
        className="crossmark"
      >
        <line
          class="path line"
          fill="none"
          stroke=""
          stroke-width="6"
          stroke-linecap="round"
          stroke-miterlimit="10"
          x1="34.4"
          y1="37.9"
          x2="95.8"
          y2="92.3"
        />
        <line
          class="path line"
          fill="none"
          stroke=""
          stroke-width="6"
          stroke-linecap="round"
          stroke-miterlimit="10"
          x1="95.8"
          y1="38"
          x2="34.4"
          y2="92.2"
        />
      </svg>
    </>
  );
};

export default Crossmark;
