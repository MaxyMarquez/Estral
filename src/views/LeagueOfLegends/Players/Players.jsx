import {
  BotSVG,
  InstagramSVG,
  JungleSVG,
  MidSVG,
  SubstituteSVG,
  SupportSVG,
  TopSVG,
  TwitchSVG,
  TwitterSVG,
  YoutubeSVG,
} from "@/assets/svg";
import React from "react";
import { useState } from "react";
import "./Players.css";
import { BOT, JUNGLE, MID, SUBSTITUTE, SUPPORT, TOP } from "../DATA";
import { Link } from "react-router-dom";

const Players = () => {
  const [player, setPlayer] = useState(TOP);
  const [fade, setFade] = useState(false);

  const handleClick = (newPlayer) => {
    if (player === newPlayer) return;
    setFade(true);
    setTimeout(() => {
      setPlayer(newPlayer);
    }, 200);
    setTimeout(() => {
      setFade(false);
    }, 800);
  };

  return (
    <div className="player-container">
      <nav className="lol-nav-player">
        <ul>
          <li
            className={player === TOP ? "active" : ""}
            onClick={() => handleClick(TOP)}
          >
            <TopSVG />
          </li>
          <li
            className={player === JUNGLE ? "active" : ""}
            onClick={() => handleClick(JUNGLE)}
          >
            <JungleSVG />
          </li>
          <li
            className={player === MID ? "active" : ""}
            onClick={() => handleClick(MID)}
          >
            <MidSVG />
          </li>
          <li
            className={player === BOT ? "active" : ""}
            onClick={() => handleClick(BOT)}
          >
            <BotSVG />
          </li>
          <li
            className={player === SUPPORT ? "active" : ""}
            onClick={() => handleClick(SUPPORT)}
          >
            <SupportSVG />
          </li>
          <li
            className={player === SUBSTITUTE ? "active" : ""}
            onClick={() => handleClick(SUBSTITUTE)}
          >
            <SubstituteSVG />
          </li>
        </ul>
      </nav>

      <div className="player">
        {player && (
          <div className={`player-information ${fade ? "fade-in-out" : ""}`}>
            <h2 className="player-name">{player.name}</h2>
            <h3 className="player-nickname">{player.nickname}</h3>

            <div className="player-details">
              <div>
                <h4>Posición</h4>
                <p>{player.position}</p>
              </div>
              <div>
                <h4>Nacionalidad</h4>
                <p>{player.country}</p>
              </div>
              <div>
                <h4>Social</h4>
                <ul className="player-social">
                  <li>
                    <Link to="" target="_blank">
                      <TwitchSVG />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank">
                      <YoutubeSVG />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank">
                      <InstagramSVG />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank">
                      <TwitterSVG />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {<player.image className={`img ${fade ? "fade-in" : ""}`} />}
        {/* <picture>
          <img
            className={`img ${fade ? "fade-in" : ""}`}
            src={player.image}
            alt=""
          />
        </picture> */}
      </div>
    </div>
  );
};

export default Players;
