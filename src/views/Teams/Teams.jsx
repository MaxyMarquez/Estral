import React from "react";
import { Link } from "react-router-dom";

import BgHexagon from "../../components/BgHexagon/BgHexagon";

import imglol from "../../assets/img/league-of-legends.png";

import "./Teams.css";

const Teams = () => {
  return (
    <>
      <BgHexagon>
        <div className="teams-container">
          <h1 className="teams-title">EQUIPOS</h1>
          <div className="temas-links">
            <Link to={"/equipos/league-of-legends"} className="teams-link">
              <img src={imglol} alt="" />
            </Link>
            <Link to={""} className="teams-link">
              <img src={imglol} alt="" />
            </Link>
            <Link to={""} className="teams-link">
              <img src={imglol} alt="" />
            </Link>
          </div>
        </div>
      </BgHexagon>
    </>
  );
};

export default Teams;
