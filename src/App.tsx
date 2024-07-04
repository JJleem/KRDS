import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import Guideline from "./pages/Guideline";
import StyleGuide from "./pages/StyleGuide";
import Header from "./Components/common/Header/Header";
import HeaderTop from "./Components/common/Header-top/HeaderTop";
import Footer from "./Components/common/Footer/Footer";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { toggleState } from "./atom/Atom";
import Wrap from "./Wrap";
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Wrap>
          <HeaderTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/guideline" element={<Guideline />} />
          </Routes>
          <Routes>
            <Route path="/styleguide" element={<StyleGuide />} />
          </Routes>
          <Footer />
        </Wrap>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
