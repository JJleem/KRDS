import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search03 from "../../../Components/service/search/Gcontent_Search03";

const Search03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="검색어 입력 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search03 />
    </div>
  );
};

export default Search03;
