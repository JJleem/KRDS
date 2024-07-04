import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import Guideline from "./pages/Guideline";
import StyleGuide from "./pages/StyleGuide";
import Header from "./Components/common/Header/Header";
import HeaderTop from "./Components/common/Header-top/HeaderTop";
import Footer from "./Components/common/Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <div id="g-wrap" className="main">
      <HeaderTop />
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/guideline" element={<Guideline />} />
      </Routes>
      <Routes>
        <Route path="/styleguide" element={<StyleGuide />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
