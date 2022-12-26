import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Skills from "./Skills";
import { useState } from "react";
import { useCookies } from "react-cookie";

function App(props) {
  const [darkCookie, setDarkCookie, removeDarkCookie] = useCookies([false]);
  const [isDark, setDark] = useState(false);

  return (
    <div className={`bg-blue md:p-10 ${isDark ? "dark" : null}`}>
      <Navbar
        setDark={setDark}
        isDark={isDark}
        setDarkCookie={setDarkCookie}
        darkCookie={darkCookie}
      />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
