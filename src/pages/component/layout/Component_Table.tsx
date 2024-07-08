import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Table from "../../../Components/component/layout/table/Gcontent_Table";

const Component_Table = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="표 (Table) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Table />
    </div>
  );
};

export default Component_Table;
