import React from "react";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_HelpPanel from "../../../Components/component/help/helppanel/Gcontent_HelpPanel";
import { Helmet } from "react-helmet";

const Component_HelpPanel = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="도움 패널 (Help panel) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_HelpPanel />
    </div>
  );
};

export default Component_HelpPanel;
