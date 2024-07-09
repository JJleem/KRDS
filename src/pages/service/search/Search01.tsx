import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Search01 from "../../../Components/service/search/Gcontent_Search01";

const Search01 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 검색 - KRDS" />
      <Gaside />
      <Gcontent_Search01 />
    </div>
  );
};

export default Search01;
