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
import StyleGuide_Shape from "./pages/styleguide/StyleGuide_Shape";
import StyleGuide_Layout from "./pages/styleguide/StyleGuide_Layout";
import StyleGuide_SystemIcon from "./pages/styleguide/StyleGuide_SystemIcon";
//Component
import Component from "./pages/component/identity/Component";
import Component_Footer from "./pages/component/identity/Component_Footer";
import Component_Identifier from "./pages/component/identity/Component_Identifier";
import Component_Header from "./pages/component/identity/Component_Header";
import Component_SkipLink from "./pages/component/search/Component_SkipLink";
import Component_MainMenu from "./pages/component/search/Component_MainMenu";
import Component_Breadcrumb from "./pages/component/search/Component_Breadcrumb";
import Component_SideNavigation from "./pages/component/search/Component_SideNavigation";
import Component_InPageNavigation from "./pages/component/search/Component_InPageNavigation";
import Component_Pagination from "./pages/component/search/Component_Pagination";
import Component_StructuredList from "./pages/component/layout/Component_StructuredList";
import Component_CriticalAlerts from "./pages/component/layout/Component_CriticalAlerts";
import Component_Calendar from "./pages/component/layout/Component_Calendar";
import Component_Disclosure from "./pages/component/layout/Component_Disclosure";
import Component_Modal from "./pages/component/layout/Component_Modal";
import Component_Badge from "./pages/component/layout/Component_Badge";
import Component_Accordion from "./pages/component/layout/Component_Accordion";
import Component_Image from "./pages/component/layout/Component_Image";
import Component_Carousel from "./pages/component/layout/Component_Carousel";
import Component_Tab from "./pages/component/layout/Component_Tab";
import Component_Table from "./pages/component/layout/Component_Table";
import Component_Link from "./pages/component/action/Component_Link";
import Component_Button from "./pages/component/action/Component_Button";
import Component_RadioButton from "./pages/component/select/Component_RadioButton";
import Component_CheckBox from "./pages/component/select/Component_CheckBox";
import Component_Select from "./pages/component/select/Component_Select";
import Component_Tag from "./pages/component/select/Component_Tag";
import Component_StepIndicator from "./pages/component/feedback/Component_StepIndicator";
import Component_Spinner from "./pages/component/feedback/Component_Spinner";
import Component_HelpPanel from "./pages/component/help/Component_HelpPanel";
import Component_TutorialPanel from "./pages/component/help/Component_TutorialPanel";
import Component_ContextualHelp from "./pages/component/help/Component_ContextualHelp";
import Component_CoachMark from "./pages/component/help/Component_CoachMark";
import Component_DateInput from "./pages/component/input/Component_DateInput";
import Component_Textarea from "./pages/component/input/Component_Textarea";
import Component_TextInput from "./pages/component/input/Component_TextInput";
import Component_FileUpload from "./pages/component/input/Component_FileUpload";
//Global
import Global from "./pages/global/Global";
import Global02 from "./pages/global/Global02";
import Global03 from "./pages/global/Global03";
import Global04 from "./pages/global/Global04";
import Global05 from "./pages/global/Global05";
import Global06 from "./pages/global/Global06";
import Global07 from "./pages/global/Global07";
import Global08 from "./pages/global/Global08";
import Global09 from "./pages/global/Global09";
import Global10 from "./pages/global/Global10";
import Global11 from "./pages/global/Global11";
//Service
import Visit01 from "./pages/service/visit/Visit01";
import Visit02 from "./pages/service/visit/Visit02";

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
            <Route
              path="/component/layout/structuredlist"
              element={<Component_StructuredList />}
            />
            <Route
              path="/component/layout/criticalalerts"
              element={<Component_CriticalAlerts />}
            />
            <Route
              path="/component/layout/calendar"
              element={<Component_Calendar />}
            />
            <Route
              path="/component/layout/disclosure"
              element={<Component_Disclosure />}
            />
            <Route
              path="/component/layout/modal"
              element={<Component_Modal />}
            />
            <Route
              path="/component/layout/badge"
              element={<Component_Badge />}
            />
            <Route
              path="/component/layout/accordion"
              element={<Component_Accordion />}
            />
            <Route
              path="/component/layout/image"
              element={<Component_Image />}
            />
            <Route
              path="/component/layout/carousel"
              element={<Component_Carousel />}
            />
            <Route path="/component/layout/tab" element={<Component_Tab />} />
            <Route
              path="/component/layout/table"
              element={<Component_Table />}
            />
            {/* ///////////////action */}
            <Route path="/component/action/link" element={<Component_Link />} />
            <Route
              path="/component/action/button"
              element={<Component_Button />}
            />
            {/* ///////////////select */}
            <Route
              path="/component/select/radiobutton"
              element={<Component_RadioButton />}
            />
            <Route
              path="/component/select/checkbox"
              element={<Component_CheckBox />}
            />
            <Route
              path="/component/select/select"
              element={<Component_Select />}
            />
            <Route path="/component/select/tag" element={<Component_Tag />} />
            {/* ///////////////feedback */}
            <Route
              path="/component/feedback/stepindicator"
              element={<Component_StepIndicator />}
            />
            <Route
              path="/component/feedback/spinner"
              element={<Component_Spinner />}
            />
            {/* ///////////////help */}
            <Route
              path="/component/help/helppanel"
              element={<Component_HelpPanel />}
            />
            <Route
              path="/component/help/tutorialpanel"
              element={<Component_TutorialPanel />}
            />
            <Route
              path="/component/help/contextualhelp"
              element={<Component_ContextualHelp />}
            />
            <Route
              path="/component/help/coachmark"
              element={<Component_CoachMark />}
            />
            {/* ///////////////input */}
            <Route
              path="/component/input/dateinput"
              element={<Component_DateInput />}
            />
            <Route
              path="/component/input/textarea"
              element={<Component_Textarea />}
            />
            <Route
              path="/component/input/textinput"
              element={<Component_TextInput />}
            />
            <Route
              path="/component/input/fileupload"
              element={<Component_FileUpload />}
            />
          </Routes>
          {/* ///////////////global */}
          <Routes>
            <Route path="/global/global_1" element={<Global />} />
            <Route path="/global/global_2" element={<Global02 />} />
            <Route path="/global/global_3" element={<Global03 />} />
            <Route path="/global/global_4" element={<Global04 />} />
            <Route path="/global/global_5" element={<Global05 />} />
            <Route path="/global/global_6" element={<Global06 />} />
            <Route path="/global/global_7" element={<Global07 />} />
            <Route path="/global/global_8" element={<Global08 />} />
            <Route path="/global/global_9" element={<Global09 />} />
            <Route path="/global/global_10" element={<Global10 />} />
            <Route path="/global/global_11" element={<Global11 />} />
          </Routes>
          {/* ///////////////global */}
          <Routes>
                    {/* ///////////////visit */}
            <Route path="/service/visit_01" element={<Visit01 />} />
            <Route path="/service/visit_02" element={<Visit02 />} />
          </Routes>
          <Footer />
        </Wrap>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
