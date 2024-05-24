import React, { useState } from "react";
import BgHexagon from "../../components/BgHexagon/BgHexagon";

import "./LeagueOfLegends.css";
import Players from "./Players/Players";

const LeagueOfLegends = () => {
  const [role, setRole] = useState("player");

  const roleSelection = () => {
    switch (role) {
      case "player":
        return <Players />;
      case "coach":
        break;
      default:
        break;
    }
  };

  const handleRoleSelection = (value) => {
    setRole(value);
  };

  return (
    <>
      <BgHexagon>
        <div className="lol-container">
          <nav className="lol-nav-staff">
            <ul>
              <li
                className={`${role === "player" ? "active" : ""}`}
                onClick={() => handleRoleSelection("player")}
              >
                Jugadores
              </li>
              <li
                className={`${role === "coach" ? "active" : ""}`}
                onClick={() => handleRoleSelection("coach")}
              >
                Coaches
              </li>
            </ul>
          </nav>

          <div className="">{roleSelection()}</div>
        </div>
      </BgHexagon>
    </>
  );
};

export default LeagueOfLegends;
