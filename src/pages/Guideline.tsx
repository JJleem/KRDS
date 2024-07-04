import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../Components/common/aside/Gaside";
const Guideline = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 가이드라인 소개" />
      <Gaside />
    </div>
  );
};

export default Guideline;
