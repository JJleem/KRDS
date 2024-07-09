import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search07 from "../../../Components/service/search/Gcontent_Search07";

const Search07 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="재검색 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search07 />
    </div>
  );
};

export default Search07;
