import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search05 from "../../../Components/service/search/Gcontent_Search05";

const Search05 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="상세 검색 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search05 />
    </div>
  );
};

export default Search05;
