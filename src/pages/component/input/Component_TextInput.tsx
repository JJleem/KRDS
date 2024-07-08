import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_TextInput from "../../../Components/component/input/textinput/Gcontent_TextInput";

const Component_TextInput = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="텍스트 입력 필드 (Text input) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_TextInput />
    </div>
  );
};

export default Component_TextInput;
