import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search04 from "../../../Components/service/search/Gcontent_Search04";

const Search04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="검색 결과 확인 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search04 />
    </div>
  );
};

export default Search04;
