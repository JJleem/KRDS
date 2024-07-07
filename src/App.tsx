import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/scss/style.css";
// import "../src/assets/scss/css/style.css";

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
import StyleGuide_Color from "./pages/styleguide/StyleGuide_Color";
import StyleGuide_Typography from "./pages/styleguide/StyleGuide_Typography";
//Component
import Component from "./pages/component/identity/Component";
//Global
import Global from "./pages/global/Global";
//Service
import Service from "./pages/service/Service";
import StyleGuide_Shape from "./pages/styleguide/StyleGuide_Shape";
import StyleGuide_Layout from "./pages/styleguide/StyleGuide_Layout";
import StyleGuide_SystemIcon from "./pages/styleguide/StyleGuide_SystemIcon";
import Component_Footer from "./pages/component/identity/Component_Footer";
import Component_Identifier from "./pages/component/identity/Component_Identifier";
import Component_Header from "./pages/component/identity/Component_Header";
import Component_SkipLink from "./pages/component/search/Component_SkipLink";
import Component_MainMenu from "./pages/component/search/Component_MainMenu";
import Component_Breadcrumb from "./pages/component/search/Component_Breadcrumb";
import Component_SideNavigation from "./pages/component/search/Component_SideNavigation";
import Component_InPageNavigation from "./pages/component/search/Component_InPageNavigation";
import Component_Pagination from "./pages/component/search/Component_Pagination";

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
            <Route path="/styleguide/color" element={<StyleGuide_Color />} />

            <Route
              path="/styleguide/typography"
              element={<StyleGuide_Typography />}
            />

            <Route path="/styleguide/shape" element={<StyleGuide_Shape />} />
            <Route path="/styleguide/layout" element={<StyleGuide_Layout />} />
            <Route
              path="/styleguide/systemicon"
              element={<StyleGuide_SystemIcon />}
            />
          </Routes>
          <Routes>
            {/* ///////////////identity */}
            <Route path="/component/identity" element={<Component />} />
            <Route
              path="/component/identity/identifier"
              element={<Component_Identifier />}
            />
            <Route
              path="/component/identity/footer"
              element={<Component_Footer />}
            />
            <Route
              path="/component/identity/header"
              element={<Component_Header />}
            />
            {/* ///////////////search */}
            <Route path="/component/search" element={<Component_SkipLink />} />
            <Route
              path="/component/search/mainmenu"
              element={<Component_MainMenu />}
            />
            <Route
              path="/component/search/breadcrumb"
              element={<Component_Breadcrumb />}
            />
            <Route
              path="/component/search/sidenavigation"
              element={<Component_SideNavigation />}
            />
            <Route
              path="/component/search/inpagenavigation"
              element={<Component_InPageNavigation />}
            />
            <Route
              path="/component/search/pagination"
              element={<Component_Pagination />}
            />
            {/* ///////////////layout */}
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
