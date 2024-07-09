import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";

import Gcontent07 from "../../Components/global/global07/Gcontent07";

const Global07 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="오류  | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent07 />
    </div>
  );
};

export default Global07;
