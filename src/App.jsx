import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import AboutMe from "./components/AboutMe/AboutMe";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Results />
      <AboutMe />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
