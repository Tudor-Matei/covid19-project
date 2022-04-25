import React, { ReactNode, useEffect } from "react";
import { BrowserRouter, Location, Route, Routes, useLocation } from "react-router-dom";
import sourcesLandingImage from "url:../images/Landing-Sources.jpg";
import evolutionLandingImage from "url:../svg/Landing-Evolution.svg";
import homeLandingImage from "url:../svg/Landing-Home.svg";
import impactLandingImage from "url:../svg/Landing-Impact.svg";
import statisticsLandingImage from "url:../svg/Landing-Statistics.svg";
import structureLandingImage from "url:../svg/Landing-Structure.svg";
import Evolution from "../../pages/Evolution";
import Home from "../../pages/Home";
import Impact from "../../pages/Impact";
import Sources from "../../pages/Sources";
import Statistics from "../../pages/Statistics";
import Structure from "../../pages/Structure";
import capitaliseFirstLetter from "../utils/capitaliseFirstLetter";
import Navbar from "./Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteTitleUpdater>
        <Routes>
          <Route index element={<Home landingImage={homeLandingImage} />} />
          <Route path="evolutie" element={<Evolution landingImage={evolutionLandingImage} />} />
          <Route path="structura" element={<Structure landingImage={structureLandingImage} />} />
          <Route path="statistici" element={<Statistics landingImage={statisticsLandingImage} />} />
          <Route path="impact" element={<Impact landingImage={impactLandingImage} />} />
          <Route path="surse" element={<Sources landingImage={sourcesLandingImage} />} />
        </Routes>
      </RouteTitleUpdater>
    </BrowserRouter>
  );
}

function RouteTitleUpdater({ children }: { children: ReactNode }) {
  const { pathname: pathName }: Location = useLocation();
  useEffect(() => {
    const title = capitaliseFirstLetter(pathName.replace("/", ""));
    document.title = `Atestat COVID-19 | ${title.length === 0 ? "Acasă" : title}`;
  }, [pathName]);
  return <>{children}</>;
}