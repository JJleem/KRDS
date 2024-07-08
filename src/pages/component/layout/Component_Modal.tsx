import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Modal from "../../../Components/component/layout/modal/Gcontent_Modal";

const Component_Modal = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="모달 (Modal) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Modal />
    </div>
  );
};

export default Component_Modal;
