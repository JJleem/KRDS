import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Breadcrumb from "../../../Components/component/search/Gcontent_Breadcrumb";

const Component_Breadcrumb = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="브레드크럼 (Breadcrumb) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Breadcrumb />
    </div>
  );
};

export default Component_Breadcrumb;
