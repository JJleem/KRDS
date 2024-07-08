import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_StepIndicator from "../../../Components/component/feedback/stepindicator/Gcontent_StepIndicator";

const Component_StepIndicator = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="단계 표시기 (Step indicator) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_StepIndicator />
    </div>
  );
};

export default Component_StepIndicator;
