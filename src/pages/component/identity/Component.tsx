import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent from "../../../Components/component/identity/masthead/Gcontent";
const Component = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="공식 배너 (Masthead) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default Component;
