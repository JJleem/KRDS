import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login01 from "../../../Components/service/login/Gcontent_Login01";

const Login01 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login01 />
    </div>
  );
};

export default Login01;
