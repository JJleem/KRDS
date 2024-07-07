import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_InPageNavigation from "../../../Components/component/search/Gcontent_InPageNavigation";
const Component_InPageNavigation = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="콘텐츠 내 탐색 (In-page navigation) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_InPageNavigation />
    </div>
  );
};

export default Component_InPageNavigation;
