import React from "react";
import Header from "./components/Header/Header";
import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";
import SectionThree from "./components/Sections/SectionThree";
import Gallery from "./components/Sections/Gallery";
import Footer from "./components/Footer/Footer";

import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/dark.css";
import "./styles/light.css";
import "./styles/fonts/fonts.css";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
