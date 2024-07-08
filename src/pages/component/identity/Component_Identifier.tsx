import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Identifier from "../../../Components/component/identity/Identifier/Gcontent_Identifier";
const Component_Identifier = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="운영기관 식별자 (Idenrifier) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Identifier />
    </div>
  );
};

export default Component_Identifier;
