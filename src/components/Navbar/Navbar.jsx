import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import logo from "../../assets/svg/EstralSVG.jsx";
// styles
import "./Navbar.css";
import EstralSVG from "../../assets/svg/EstralSVG.jsx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setToggle(false);
    }
  }, []);

  return (
    <>
      <nav className="nav_container">
        {/*------------------------------------------------------------------
         -------------------------------Logo---------------------------------
         -------------------------------------------------------------------- */}
        <div className="nav_logo">
          <a href="/">
            <EstralSVG className="nav_logo_img" />
          </a>
        </div>

        {/*------------------------------------------------------------------
         -------------------------Menu Hamburguer----------------------------
         -------------------------------------------------------------------- */}
        <div className="nav_menu_actions">
          <div className="nav_menu_toggle" onClick={() => setToggle(!toggle)}>
            <div className="nav_menu_inner">
              <span className={`${toggle ? "menu_inner_toggled" : ""}`}></span>
              <span className={`${toggle ? "menu_inner_toggled" : ""}`}></span>
              <span className={`${toggle ? "menu_inner_toggled" : ""}`}></span>
              <span className={`${toggle ? "menu_inner_toggled" : ""}`}></span>
            </div>
          </div>
        </div>

        {/*------------------------------------------------------------------
         ---------------------------Main Menu Links--------------------------
         -------------------------------------------------------------------- */}
        <ul className="nav_links">
          <li className="nav_main_li">
            <NavLink
              className="nav_link"
              to="/somos"
              onClick={() => setToggle(false)}
            >
              somos
            </NavLink>
          </li>

          <li className="nav_main_li">
            <NavLink
              className="nav_link"
              to="/equipos"
              onClick={() => setToggle(false)}
            >
              Equipos
            </NavLink>
          </li>

          <li className="nav_main_li">
            <NavLink className="nav_link" to="/calendario">
              Calendario
            </NavLink>
          </li>

          <li className="nav_main_li">
            <NavLink className="nav_link" to="">
              Tienda
            </NavLink>
          </li>

          <li className="nav_main_li">
            <NavLink className="nav_link" to="/contacto">
              Contacto
            </NavLink>
          </li>

          <li className="nav_main_li">
            <Link
              className="nav_link"
              to="/watch-party"
              onClick={() => setToggle(false)}
            >
              Watch party
            </Link>
          </li>
        </ul>
      </nav>

      {/*--------------------------------------------------------------------
         ------------------------Menu Hamburguer Links-----------------------
         -------------------------------------------------------------------- */}
      <div
        className={`${toggle ? "nav_open nav_menu_panel" : "nav_menu_panel"}`}
      >
        <ul className="nav_ul">
          <li className="nav_li">
            <Link
              className="menu_link"
              to="/somos"
              onClick={() => setToggle(false)}
            >
              Somos
            </Link>
          </li>
          <li className="nav_li">
            <Link
              className="menu_link"
              to="/equipos"
              onClick={() => setToggle(false)}
            >
              Equipos
            </Link>
          </li>
          <li className="nav_li">
            <Link
              className="menu_link"
              to="/calendario"
              onClick={() => setToggle(false)}
            >
              Calendario
            </Link>
          </li>
          <li className="nav_li">
            <Link className="menu_link" to="" onClick={() => setToggle(false)}>
              Tienda
            </Link>
          </li>
          <li className="nav_li">
            <Link
              className="menu_link"
              to="/contacto"
              onClick={() => setToggle(false)}
            >
              Contacto
            </Link>
          </li>
          <li className="nav_li">
            <Link
              className="menu_link"
              to="/watch-party"
              onClick={() => setToggle(false)}
            >
              Watch party
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
