import React, { useState, useEffect } from "react";
import BgHexagon from "@/components/BgHexagon/BgHexagon";
import { EstralSVG } from "@/assets/svg";

import DATA from "./DATA.json";

import lol_logo from "@/assets/img/league-of-legends.png";

// STYLES
import "./Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState({ month: "", year: "" });
  const [jsonData, setJsonData] = useState(DATA.data);
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [activeDate, setActiveDate] = useState("");

  useEffect(() => {
    const latestDate = new Date(
      Math.max(...jsonData.map((dato) => new Date(dato.date).getTime()))
    );

    const latestMonth = latestDate
      .toLocaleString("default", { month: "short", timeZone: "UTC" })
      .toUpperCase();
    const latestYear = latestDate.getUTCFullYear().toString();

    setDate({ month: latestMonth, year: latestYear });
    setActiveDate(`${latestMonth} ${latestYear}`);
  }, [jsonData]);

  useEffect(() => {
    if (date.month && date.year) {
      const filteredData = jsonData
        .filter((dato) => {
          const fecha = new Date(dato.date);
          const mes = fecha
            .toLocaleString("default", { month: "short", timeZone: "UTC" })
            .toUpperCase();
          const año = fecha.getUTCFullYear().toString();
          return mes === date.month && año === date.year;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      setDatosFiltrados(filteredData);
    }
  }, [date, jsonData]);

  const filtrarPorMes = (month, year) => {
    setDate({ month, year });
    setActiveDate(`${month} ${year}`);
  };

  const mesesYAniosUnicos = Array.from(
    new Set(
      jsonData.map((dato) => {
        const fecha = new Date(dato.date);
        return `${fecha
          .toLocaleString("default", { month: "short", timeZone: "UTC" })
          .toUpperCase()} ${fecha.getUTCFullYear()}`;
      })
    )
  );

  return (
    <>
      <BgHexagon>
        <div className="calendar-container">
          <span>Estral Esports</span>
          <h1>Calendario</h1>
          <nav className="nav_calendar">
            <ul className="nav_calendar_ul">
              {mesesYAniosUnicos.map((fecha, index) => {
                const [month, year] = fecha.split(" ");
                return (
                  <li
                    key={index}
                    className={`nav_calendar_li ${
                      activeDate === fecha ? "active" : ""
                    }`}
                    onClick={() => filtrarPorMes(month, year)}
                  >
                    <span className="nav_calendar_month">{month}</span>
                    <span className="nav_calendar_year">{year}</span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="card-container">
            {datosFiltrados.map((dato, index) => (
              <a href="" className="card-games" key={index}>
                <header className="card-header">
                  <img className="card-game" src={lol_logo} alt="" />
                  <div className="card-date">
                    <a href="" className="card-link">
                      {new Date(dato.date).toLocaleDateString("default", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                      <span>{dato.league}</span>
                    </a>
                  </div>
                </header>
                <div className="card-body">
                  <div className="card-team1">
                    <img
                      className="card-logo"
                      src="https://am-a.akamaihd.net/image?resize=96:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FEST.png"
                      alt=""
                    />
                    <span>EST</span>
                    <p>Estral Esports</p>
                  </div>
                  <div className="card-result">
                    {dato.match_result ? (
                      <span>
                        {dato.match_result.estral} : {dato.match_result.oponent}
                      </span>
                    ) : (
                      <span>VS</span>
                    )}
                  </div>
                  <div className="card-team2">
                    <img className="card-logo" src={dato.oponent_logo} alt="" />
                    <span>{dato.oponent_tag}</span>
                    <p>{dato.oponent}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </BgHexagon>
    </>
  );
};

export default Calendar;
