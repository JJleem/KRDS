import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_MainMenu from "../../../Components/component/search/mainmenu/Gcontent_MainMenu";

const Component_MainMenu = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="메인 메뉴 (Main menu) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_MainMenu />
    </div>
  );
};

export default Component_MainMenu;
