import React from "react";
import Gaside from "../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent04 from "../../Components/foundation/Gcontent04";
const Foundation04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="빠르고 간단한 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent04 />
    </div>
  );
};

export default Foundation04;
