import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Tab from "../../../Components/component/layout/tab/Gcontent_Tab";

const Component_Tab = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="탭 (Tab) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Tab />
    </div>
  );
};

export default Component_Tab;
