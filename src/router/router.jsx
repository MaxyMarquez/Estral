import Layout from "@/layouts/Layout";
import Home from "@/views/Home/Home";
import About from "@/views/About/About";
import Calendar from "@/views/Calendar/Calendar";
import Teams from "@/views/Teams/Teams";
import LeagueOfLegends from "@/views/LeagueOfLegends/LeagueOfLegends";
import Contact from "@/views/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/somos",
        element: <About />,
      },
      {
        path: "/equipos",
        element: <Teams />,
      },
      {
        path: "equipos/league-of-legends",
        element: <LeagueOfLegends />,
      },
      {
        path: "/calendario",
        element: <Calendar />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
