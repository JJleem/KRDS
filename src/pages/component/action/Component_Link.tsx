import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Link from "../../../Components/component/action/link/Gcontent_Link";

const Component_Link = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="링크 (Link) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Link />
    </div>
  );
};

export default Component_Link;
