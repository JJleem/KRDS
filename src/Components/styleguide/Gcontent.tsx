import React from "react";
import { Link } from "react-router-dom";
import TopBtn from "../common/topbtn/TopBtn";
const Gcontent = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>스타일 가이드</span>
          <strong>적용 범위 및 구분</strong>
        </h2>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">기관 적용 범위 및 항목</h3>
          <div className="g-img-wrap pure">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_01_02.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">스타일 가이드의 방향성</h3>
          <div className="g-img-wrap pure">
            <div>
              <img
                src="	https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_01_01.png"
                alt=""
              />
            </div>
            <p className="refer-txt">
              <Link to={"/"} target="_blank" title="새 창 열림">
                ✅ 접근성 : W3C 웹 콘텐츠 접근성 지침(WCAG) 참고
              </Link>
            </p>
          </div>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent;
