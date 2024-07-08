import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Textarea from "../../../Components/component/input/textarea/Gcontent_Textarea";

const Component_Textarea = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="텍스트 영역 (Textarea) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Textarea />
    </div>
  );
};

export default Component_Textarea;
