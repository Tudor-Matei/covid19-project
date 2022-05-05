import { Icon } from "@iconify/react";
import React, { ReactNode, useEffect, useState } from "react";
import { Location, Route, Routes, useLocation } from "react-router-dom";
import sourcesLandingImage from "url:../images/Landing-Sources.jpg";
import evolutionLandingImage from "url:../svg/Landing-Evolution.svg";
import homeLandingImage from "url:../svg/Landing-Home.svg";
import impactLandingImage from "url:../svg/Landing-Impact.svg";
import structureLandingImage from "url:../svg/Landing-Structure.svg";
import Evolution from "../../pages/Evolution";
import Home from "../../pages/Home";
import Impact from "../../pages/Impact";
import Sources from "../../pages/Sources";
import Structure from "../../pages/Structure";
import capitaliseFirstLetter from "../utils/capitaliseFirstLetter";
import Navbar from "./Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <SmallScreenSizeAlert />
      <RouteTitleUpdater>
        <Routes>
          <Route index element={<Home landingImage={homeLandingImage} />} />
          <Route path="evolutie" element={<Evolution landingImage={evolutionLandingImage} />} />
          <Route path="structura" element={<Structure landingImage={structureLandingImage} />} />
          <Route path="impact" element={<Impact landingImage={impactLandingImage} />} />
          <Route path="surse" element={<Sources landingImage={sourcesLandingImage} />} />
        </Routes>
      </RouteTitleUpdater>
    </>
  );
}

function RouteTitleUpdater({ children }: { children: ReactNode }) {
  const location: Location = useLocation();

  useEffect(() => {
    const title = capitaliseFirstLetter(location.pathname.replace("/", ""));
    document.title = `Atestat COVID-19 | ${title.length === 0 ? "Acasă" : title}`;
  }, [location.key]);
  return <>{children}</>;
}

function SmallScreenSizeAlert() {
  const [currentDimensions, setCurrentDimensions] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024 || window.innerHeight < 400)
        setCurrentDimensions({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return (
    <div className="small-screen-size">
      <Icon icon="carbon:fit-to-screen" />
      <h1>
        Mărimea ecranului dumneavoastră este prea mică:{" "}
        <span>
          {currentDimensions.width}x{currentDimensions.height}
        </span>
      </h1>
      <p>
        Site-ul acesta nu a fost optimizat pentru mărimi <span>mai mici de 1024x400</span>.
      </p>
    </div>
  );
}
