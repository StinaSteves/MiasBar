import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Impressum from "./page/Impressum.jsx";
import Datenschutz from "./page/Datenschutz.jsx";

import "./App.css";
import "./Mobile.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;