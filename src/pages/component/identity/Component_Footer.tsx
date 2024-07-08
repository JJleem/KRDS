import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Footer from "../../../Components/component/identity/footer/Gcontent_Footer";
const Component_Footer = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="공식 배너 (Masthead) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Footer />
    </div>
  );
};

export default Component_Footer;
