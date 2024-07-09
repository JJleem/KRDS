import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search08 from "../../../Components/service/search/Gcontent_Search08";

const Search08 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="검색 종료 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search08 />
    </div>
  );
};

export default Search08;
