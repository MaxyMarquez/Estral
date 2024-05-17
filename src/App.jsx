import { Routes, Route } from "react-router-dom";

// COMPONENTS / VIEWS
import Navbar from "./layouts/Navbar/Navbar";
import About from "./views/About/About";
import Teams from "./views/Teams/Teams";
import LeagueOfLegends from "./views/LeagueOfLegends/LeagueOfLegends";
import Calendar from "./views/Calendar/Calendar";

// STYLES
import "./App.css";
import "@/assets/style/logo-animation.css";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/somos" element={<About />} />
        <Route path="/equipos" element={<Teams />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/equipos/league-of-legends"
          element={<LeagueOfLegends />}
        />
      </Routes>
    </>
  );
}

export default App;
