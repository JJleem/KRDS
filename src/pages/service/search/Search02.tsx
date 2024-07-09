import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search02 from "../../../Components/service/search/Gcontent_Search02";

const Search02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="검색 기능 찾기 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search02 />
    </div>
  );
};

export default Search02;
