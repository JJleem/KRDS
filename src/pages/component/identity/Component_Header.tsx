import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Header from "../../../Components/component/identity/header/Gcontent_Header";
const Component_Header = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="헤더 (Header) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Header />
    </div>
  );
};

export default Component_Header;
