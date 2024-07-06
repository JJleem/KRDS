import React from "react";
import Gaside from "../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent05 from "../../Components/foundation/Gcontent05";

const Foundation05 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="쉽게 이해하고 사용할 수 있는 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent05 />
    </div>
  );
};

export default Foundation05;
