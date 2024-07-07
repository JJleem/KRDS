import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_SideNavigation from "../../../Components/component/search/Gcontent_SideNavigation";
const Component_SideNavigation = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="사이드 메뉴 (Side navigation) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_SideNavigation />
    </div>
  );
};

export default Component_SideNavigation;
