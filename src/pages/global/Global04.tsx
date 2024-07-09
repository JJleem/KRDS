import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent04 from "../../Components/global/global04/Gcontent04";

const Global04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="목록 탐색 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent04 />
    </div>
  );
};

export default Global04;
