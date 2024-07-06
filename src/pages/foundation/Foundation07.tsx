import React from "react";
import Gaside from "../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent07 from "../../Components/foundation/Gcontent07";
const Foundation07 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="신뢰할 수 있는 서비스 | 디자인 원칙 - KRDS" />
      <Gaside />
      <Gcontent07 />
    </div>
  );
};

export default Foundation07;
