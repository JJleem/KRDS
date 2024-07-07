import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_SkipLink from "../../../Components/component/search/Gcontent_SkipLink";
const Component_SkipLink = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="건너뛰기 링크 (Skip link) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_SkipLink />
    </div>
  );
};

export default Component_SkipLink;
