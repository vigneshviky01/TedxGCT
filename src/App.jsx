import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Hero from "./section/Hero";
import AboutTedX from "./section/AboutTedX";
import "./App.css";
import AboutTedXGCT from "./section/AboutTedXGCT";
import Speakers from "./section/Speakers";
import Performances from "./section/Performances";
import Team from "./section/Team";
import Partners from "./section/Partners";
import Footer from "./section/Footer";
function App() {
  return (
    <>
      <header className="sm:sticky sm:top-0 sm:z-[100]">
        <NavBar />
      </header>
      <main>
        <Hero />
        <AboutTedX />
        <AboutTedXGCT />
        <Speakers />
        {/* <Speaker right={true}/> */}
        <Performances />
        <Team />
        <Partners />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
