import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";

import Header from "./Components/common/Header/Header";
import HeaderTop from "./Components/common/Header-top/HeaderTop";
import Footer from "./Components/common/Footer/Footer";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import Wrap from "./Wrap";
//Guideline
import Guideline from "./pages/guideline/Guideline";
import Guideline02 from "./pages/guideline/Guideline02";
import Guideline03 from "./pages/guideline/Guideline03";
//Foundation
import Foundation from "./pages/foundation/Foundation";
import Foundation02 from "./pages/foundation/Foundation02";
import Foundation03 from "./pages/foundation/Foundation03";
import Foundation04 from "./pages/foundation/Foundation04";
import Foundation05 from "./pages/foundation/Foundation05";
import Foundation06 from "./pages/foundation/Foundation06";
import Foundation07 from "./pages/foundation/Foundation07";
//StyleGuide
import StyleGuide from "./pages/styleguide/StyleGuide";
//Component
import Component from "./pages/component/Component";
//Global
import Global from "./pages/global/Global";
//Service
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
            <Route path="/guideline/guideline_03" element={<Guideline03 />} />
          </Routes>
          <Routes>
            <Route path="/foundation" element={<Foundation />} />
            <Route
              path="/foundation/foundation_02"
              element={<Foundation02 />}
            />
            <Route
              path="/foundation/foundation_03"
              element={<Foundation03 />}
            />
            <Route
              path="/foundation/foundation_04"
              element={<Foundation04 />}
            />
            <Route
              path="/foundation/foundation_05"
              element={<Foundation05 />}
            />
            <Route
              path="/foundation/foundation_06"
              element={<Foundation06 />}
            />
            <Route
              path="/foundation/foundation_07"
              element={<Foundation07 />}
            />
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
