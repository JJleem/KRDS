import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_RadioButton from "../../../Components/component/select/radiobutton/Gcontent_RadioButton";

const Component_RadioButton = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="라디오 버튼 (Radio button) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_RadioButton />
    </div>
  );
};

export default Component_RadioButton;
