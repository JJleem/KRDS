import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Pagination from "../../../Components/component/search/pagination/Gcontent_Pagination";
const Component_Pagination = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="페이지네이션 (Pagination) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Pagination />
    </div>
  );
};

export default Component_Pagination;
