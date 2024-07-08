import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Select from "../../../Components/component/select/select/Gcontent_Select";

const Component_Select = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="체크박스 (Checkbox) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Select />
    </div>
  );
};

export default Component_Select;
