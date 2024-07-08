import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Accordion from "../../../Components/component/layout/accordion/Gcontent_Accordion";
const Component_Accordion = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="아코디언 (Accordion) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Accordion />
    </div>
  );
};

export default Component_Accordion;
