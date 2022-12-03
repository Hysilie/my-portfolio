import "../src/Style/App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./Pages/Home";
import turtles from "./assets/LittleTurtles-Logo.png";
import turtlesmobile from "./assets/littleturtles_mobile-transparent.png";
import rijks from "./assets/Rijks-Logo.png";
import rijksmobile from "./assets/rijkart_mobile-transparent.png";
import nems from "./assets/Petitsnems-Logo.png";
import nemsmobile from "./assets/nems_mobile-transparent.png";
import games from "./assets/ApiGames-Logo.png";
import gamesmobile from "./assets/apigames_mobile-transparent.png";

const projects = [
  {
    id: 1,
    projet_name: "Little Turtles",
    projet_type: "First project about ocean pollution",
    repo: "https://github.com/Iris-succi/little_turtles",
    duration: "2 weeks",
    tools: "HTML, CSS, JS, Figma",
    url: "https://iris-succi.github.io/little_turtles/",
    logo: turtles,
    mobile_view: turtlesmobile,
    desktop_view: "https://www.google.com",
  },
  {
    id: 2,
    projet_name: "Rijks'Art",
    projet_type: "Personnal project about a virtual visit of the Rijksmuseum",
    repo: "https://github.com/Hysilie/Rijk-Art",
    duration: "48 H",
    tools: "React, Tailwind, Figma",
    url: "https://rijks-art.netlify.app/",
    logo: rijks,
    mobile_view: rijksmobile,
    desktop_view: "https://www.google.com",
  },
  {
    id: 3,
    projet_name: "Petits Nems",
    projet_type:
      "Hackathon about a food website to travel without leaving home",
    repo: "https://github.com/Hysilie/Hackathon2022-",
    duration: "24 H",
    tools: "React, Tailwind, Figma",
    url: "https://github.com/Hysilie/Hackathon2022-",
    logo: nems,
    mobile_view: nemsmobile,
    desktop_view: "https://www.google.com",
  },
  {
    id: 4,
    projet_name: "Api Games",
    projet_type: "Second Project about a game website",
    repo: "https://github.com/WildCodeSchool/P2_API-Crew_Lyon-React-Sept-2022",
    duration: "5 weeks",
    tools: "React, Bootstrap, Figma",
    url: "https://github.com/WildCodeSchool/P2_API-Crew_Lyon-React-Sept-2022",
    logo: games,
    mobile_view: gamesmobile,
    desktop_view: "https://www.google.com",
  },
];

function App() {
  /* set a toggle theme light and dark */

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  /* put theme in local storage */

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", theme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", theme);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={
        theme === "light"
          ? "h-screen scroll-smooth"
          : "h-screen scroll-smooth bg-[#3E3D3D] text-[#eee]"
      }
    >
      <Router>
        <header>
          <NavigationBar toggleTheme={toggleTheme} theme={theme} />
        </header>

        <Routes>
          <Route
            path="/"
            element={<Home projects={projects} theme={theme} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
