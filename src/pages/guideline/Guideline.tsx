import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent from "../../Components/guideline/Gcontent";
const Guideline = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 가이드라인 소개 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default Guideline;
