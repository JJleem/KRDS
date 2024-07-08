import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Button from "../../../Components/component/action/button/Gcontent_Button";

const Component_Button = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="버튼 (Button) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Button />
    </div>
  );
};

export default Component_Button;
