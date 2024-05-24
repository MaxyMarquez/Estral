import { Routes, Route } from "react-router-dom";

// COMPONENTS / VIEWS
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Teams from "./views/Teams/Teams";
import LeagueOfLegends from "./views/LeagueOfLegends/LeagueOfLegends";
import Calendar from "./views/Calendar/Calendar";
import Contact from "./views/Contact/Contact";

// STYLES
import "./App.css";
import "@/assets/style/logo-animation.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
