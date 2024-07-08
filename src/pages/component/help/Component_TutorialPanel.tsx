import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_TutorialPanel from "../../../Components/component/help/tutorialpanel/Gcontent_TutorialPanel";

const Component_TutorialPanel = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="따라하기 패널 (Tutorial panel) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_TutorialPanel />
    </div>
  );
};

export default Component_TutorialPanel;
