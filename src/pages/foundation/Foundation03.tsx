import React from "react";
import Gaside from "../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent03 from "../../Components/foundation/Gcontent03";
const Foundation03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="공통된 경험 안에서 개별 특성을 고려한 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent03 />
    </div>
  );
};

export default Foundation03;
