import React from "react";
import Gaside from "../../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent_Badge from "../../../Components/component/layout/badge/Gcontent_Badge";

const Component_Badge = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="배지 (Badge) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Badge />
    </div>
  );
};

export default Component_Badge;
