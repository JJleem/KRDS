import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent02 from "../../Components/foundation/Gcontent02";
const Foundation02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="모든 사용자를 포용하는 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent02 />
    </div>
  );
};

export default Foundation02;
