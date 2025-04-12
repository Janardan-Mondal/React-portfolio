import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import my_img from "./assets/my_img.png"
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderComponent = () => {
    switch (activePage) {
      case "about":
        return <About key="about" />;
      case "contact":
        return <Contact key="contact" />;
      case "home":
      default:
        return <Home key="home" />;
    }
  };
  // console.log(activePage);
  return (
    <div
      className="w-full min-h-screen overflow-auto bg-cover bg-center bg-no-repeat relative"
      style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}
    >
      <img src={my_img} alt="" className="fixed bottom-0 lg:left-20 left-0" />

      <Navbar setActivePage={setActivePage} activePage={activePage} />
      <AnimatePresence mode="wait">
        {renderComponent()}
      </AnimatePresence>
    </div>
  );
};

export default App;
