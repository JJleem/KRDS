import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent_SystemIcon from "../../Components/styleguide/Gcontent_SystemIcon";
const StyleGuide_SystemIcon = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="아이콘 (System icon) | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent_SystemIcon />
    </div>
  );
};

export default StyleGuide_SystemIcon;
