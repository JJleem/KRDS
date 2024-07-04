import React from "react";
import { Link } from "react-router-dom";
const VisualArea = () => {
  return (
    <div className="main-area visual-area">
      <div className="inner">
        <h2 className="tit">
          디지털 정부서비스
          <br />
          UI/UX 가이드라인
        </h2>
        <p className="desc">
          누구나 쉽고 편리하게 이용할 수 있도록
          <br />
          사용자 중심의 공공 웹·앱을 구축, 운영 및 관리 하도록 지원합니다
        </p>
        <div className="btn-wrap">
          <Link to="/guideline" className="btn tertiary xlg">
            시작하기
          </Link>
          <Link to="/styleguide" className="btn tertiary xlg">
            스타일 가이드
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisualArea;
