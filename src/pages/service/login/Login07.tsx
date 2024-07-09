import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login07 from "../../../Components/service/login/Gcontent_Login07";

const Login07 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="서비스 이용 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login07 />
    </div>
  );
};

export default Login07;
