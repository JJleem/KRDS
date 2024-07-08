import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Checkbox from "../../../Components/component/select/checkbox/Gcontent_Checkbox";

const Component_CheckBox = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="체크박스 (Checkbox) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Checkbox />
    </div>
  );
};

export default Component_CheckBox;
