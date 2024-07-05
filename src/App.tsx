import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import Guideline from "./pages/guideline/Guideline";
import StyleGuide from "./pages/styleguide/StyleGuide";
import Header from "./Components/common/Header/Header";
import HeaderTop from "./Components/common/Header-top/HeaderTop";
import Footer from "./Components/common/Footer/Footer";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { toggleState } from "./atom/Atom";
import Wrap from "./Wrap";
import Guideline02 from "./pages/guideline/Guideline02";
import Foundation from "./pages/foundation/Foundation";
import Component from "./pages/component/Component";
import Global from "./pages/global/Global";
import Service from "./pages/service/Service";
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
            <Route path="/guideline/guideline_02" element={<Guideline02 />} />
          </Routes>
          <Routes>
            <Route path="/foundation" element={<Foundation />} />
          </Routes>
          <Routes>
            <Route path="/styleguide" element={<StyleGuide />} />
          </Routes>
          <Routes>
            <Route path="/component" element={<Component />} />
          </Routes>
          <Routes>
            <Route path="/global" element={<Global />} />
          </Routes>
          <Routes>
            <Route path="/service" element={<Service />} />
          </Routes>
          <Footer />
        </Wrap>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
