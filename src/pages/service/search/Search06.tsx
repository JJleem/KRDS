import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search06 from "../../../Components/service/search/Gcontent_Search06";

const Search06 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="검색 결과 이용 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search06 />
    </div>
  );
};

export default Search06;
