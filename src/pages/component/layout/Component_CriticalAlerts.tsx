import React from "react";
import Gaside from "../../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent_CriticalAlerts from "../../../Components/component/layout/criticalalerts/Gcontent_CriticalAlerts";

const Component_CriticalAlerts = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="긴급 공지 (Critical alerts) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_CriticalAlerts />
    </div>
  );
};

export default Component_CriticalAlerts;
