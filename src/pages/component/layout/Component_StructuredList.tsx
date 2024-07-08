import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_StructuredList from "../../../Components/component/layout/structuredlist/Gcontent_StructuredList";

const Component_StructuredList = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="구조화 목록 (Structured list) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_StructuredList />
    </div>
  );
};

export default Component_StructuredList;
