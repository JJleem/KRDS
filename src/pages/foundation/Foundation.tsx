import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent from "../../Components/foundation/Gcontent";
const Foundation = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="사용자 중심의 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default Foundation;
