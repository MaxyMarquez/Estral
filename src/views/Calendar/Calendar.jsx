import React, { useState, useEffect, useMemo } from "react";
import BgHexagon from "@/components/BgHexagon/BgHexagon";
import DATA from "./DATA.json";
import lol_logo from "@/assets/img/league-of-legends.png";

// STYLES
import "./Calendar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Calendar = () => {
  const [date, setDate] = useState(() => {
    const latestDate = new Date(
      Math.max(...DATA.data.map((dato) => new Date(dato.date).getTime()))
    );
    const latestMonth = latestDate
      .toLocaleString("default", { month: "short", timeZone: "UTC" })
      .toUpperCase();
    const latestYear = latestDate.getUTCFullYear().toString();
    return { month: latestMonth, year: latestYear };
  });
  const [activeDate, setActiveDate] = useState(`${date.month} ${date.year}`);

  const mesesYAniosUnicos = useMemo(() => {
    const uniqueDates = Array.from(
      new Set(
        DATA.data.map((dato) => {
          const fecha = new Date(dato.date);
          return `${fecha
            .toLocaleString("default", { month: "short", timeZone: "UTC" })
            .toUpperCase()} ${fecha.getUTCFullYear()}`;
        })
      )
    ).sort((a, b) => {
      const months = [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN",
        "JUL",
        "AGO",
        "SEP",
        "OCT",
        "NOV",
        "DIC",
      ];
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");
      const dateA = new Date(yearA, months.indexOf(monthA));
      const dateB = new Date(yearB, months.indexOf(monthB));
      return dateA - dateB;
    });
    return uniqueDates;
  }, []);

  const datosFiltrados = useMemo(() => {
    return DATA.data
      .filter((dato) => {
        const fecha = new Date(dato.date);
        const mes = fecha
          .toLocaleString("default", { month: "short", timeZone: "UTC" })
          .toUpperCase();
        const año = fecha.getUTCFullYear().toString();
        return mes === date.month && año === date.year;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [date]);

  const filtrarPorMes = (month, year) => {
    setDate({ month, year });
    setActiveDate(`${month} ${year}`);
  };

  return (
    <BgHexagon>
      <div className="calendar-container">
        <p className="calendar_span">Estral Esports</p>
        <h1 className="calendar_title">Calendario</h1>
        <div className="nav_calendar_container">
          <nav className="nav_calendar">
            <Swiper
              className="nav_calendar_ul"
              loop={true}
              freeMode={true}
              slidesPerView={5}
              navigation={true}
              modules={[Navigation]}
              initialSlide={mesesYAniosUnicos.length - 1}
            >
              {mesesYAniosUnicos.map((fecha, index) => {
                const [month, year] = fecha.split(" ");
                return (
                  <SwiperSlide
                    key={index}
                    className={`nav_calendar_li ${
                      activeDate === fecha ? "active" : ""
                    }`}
                    onClick={() => filtrarPorMes(month, year)}
                  >
                    <span className="nav_calendar_month">{month}</span>
                    <span className="nav_calendar_year">{year}</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </nav>
        </div>

        <div className="card-container">
          {datosFiltrados.map((dato, index) => (
            <a href="#" className="card-games" key={index}>
              <header className="card-header">
                <img
                  className="card-game"
                  src={lol_logo}
                  alt="League of Legends Logo"
                />
                <div className="card-date">
                  <span className="card-link">
                    {new Date(dato.date).toLocaleDateString("default", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                    <span>{dato.league}</span>
                  </span>
                </div>
              </header>
              <div className="card-body">
                <div className="card-team1">
                  <img
                    className="card-logo"
                    src="https://am-a.akamaihd.net/image?resize=96:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FEST.png"
                    alt="Estral Esports Logo"
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
                  <img
                    className="card-logo"
                    src={dato.oponent_logo}
                    alt={dato.oponent_tag}
                  />
                  <span>{dato.oponent_tag}</span>
                  <p>{dato.oponent}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </BgHexagon>
  );
};

export default React.memo(Calendar);
