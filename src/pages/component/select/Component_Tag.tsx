import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Tag from "../../../Components/component/select/tag/Gcontent_Tag";

const Component_Tag = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="체크박스 (Checkbox) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Tag />
    </div>
  );
};

export default Component_Tag;
