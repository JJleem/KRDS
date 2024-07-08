import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_ContextualHelp from "../../../Components/component/help/contextualhelp/Gcontent_ContextualHelp";

const Component_ContextualHelp = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="맥락적 도움말 (Contextual help) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_ContextualHelp />
    </div>
  );
};

export default Component_ContextualHelp;
