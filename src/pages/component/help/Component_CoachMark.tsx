import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_CoachMark from "../../../Components/component/help/coachmark/Gcontent_CoachMark";

const Component_CoachMark = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="코치마크 (Coach mark) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_CoachMark />
    </div>
  );
};

export default Component_CoachMark;
