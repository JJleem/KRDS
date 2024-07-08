import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_DateInput from "../../../Components/component/input/dateinput/Gcontent_DateInput";

const Component_DateInput = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="날짜 입력 필드 (Date input) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_DateInput />
    </div>
  );
};

export default Component_DateInput;
