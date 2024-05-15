import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({}) => {
  const logos = [
    {
      name: "Estral Solutions",
      url: "https://estralsolutions.com/wp-content/uploads/2023/11/cropped-Estral-Solutions-Logo.png",
      link: "",
    },
    {
      name: "Totalplay",
      url: "https://www.totalplay.com.mx/assets/img/nuevos/totalplay-logoWhite.svg",
      link: "",
    },
    {
      name: "Aorus",
      url: "https://cdn.worldvectorlogo.com/logos/aorus-1.svg",
      link: "",
    },
    {
      name: "Ocelot Gaming",
      url: "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/4/AmazonStores/A1AM78C64UM0Y8/1556eb6aa8aa52fff9ac00df61955571.w1951.h597.png",
      link: "",
    },
    {
      name: "Cougar Gaming",
      url: "https://www.shenanigansgaming.com/wp-content/themes/shenanigans/dist/img/cougar-logo.svg",
      link: "",
    },
  ];

  return (
    <div className="carousel-container">
      <ul className="carousel-inner">
        {logos?.map((element, index) => (
          <li key={index}>
            <img src={element.url} alt="" />
          </li>
        ))}
      </ul>
      <ul className="carousel-inner" aria-hidden="true">
        {logos?.map((element, index) => (
          <li key={index}>
            <img src={element.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
