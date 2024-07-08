import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Disclosure from "../../../Components/component/layout/disclosure/Gcontent_Disclosure";

const Component_Disclosure = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="디스클로저 (Disclosure) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Disclosure />
    </div>
  );
};

export default Component_Disclosure;
