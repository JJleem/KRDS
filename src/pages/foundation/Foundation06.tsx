import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent06 from "../../Components/foundation/Gcontent06";
const Foundation06 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="사용자의 다양한 상황을 고려하는 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent06 />
    </div>
  );
};

export default Foundation06;
