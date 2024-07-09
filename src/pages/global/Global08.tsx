import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent08 from "../../Components/global/global08/Gcontent08";

const Global08 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="입력폼 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent08 />
    </div>
  );
};

export default Global08;
