import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent02 from "../../Components/global/global02/Gcontent02";

const Global02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="도움 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent02 />
    </div>
  );
};

export default Global02;
