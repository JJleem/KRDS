import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_FileUpload from "../../../Components/component/input/fileupload/Gcontent_FileUpload";

const Component_FileUpload = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="파일 업로드 (File upload) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_FileUpload />
    </div>
  );
};

export default Component_FileUpload;
