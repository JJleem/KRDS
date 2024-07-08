import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Spinner from "../../../Components/component/feedback/spinner/Gcontent_Spinner";

const Component_Spinner = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="스피너 (Spinner) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Spinner />
    </div>
  );
};

export default Component_Spinner;
