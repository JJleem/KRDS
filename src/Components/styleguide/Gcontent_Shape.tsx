import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent_Shape = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>스타일 가이드</span>
          <strong>
            형태 <span className="sub">(Shape)</span>
          </strong>
        </h2>
        <p className="g-desc">
          컴포넌트들의 형태를 radius로 정의할 수 있으며 각 기관의 아이텐티티를
          표현할 수 있다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">Corner radius</h3>
          <ul className="info-list decimal">
            <li>
              각 기관의 아이덴티티를 표현할 수 있는 Shape의 둥글기를 설정한다.
            </li>
            <li>
              Radius 값을 최대 10가지 정도로 구성한 후 각 컴포넌트 크기에 따라
              대응하여 사용한다.
            </li>
          </ul>
          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_04_01.png"
                alt=""
              />
            </div>
          </div>
          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_04_02.png"
                alt=""
              />
            </div>
          </div>

          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Components by Level</h4>
              <ul className="info-list decimal">
                <li>
                  컴포넌트에서 Radius1 이상의 값을 사용할 경우
                  Xsmall-Small-Medium-Large-Xlarge의 계층 구조에 맞는 Radius
                  값을 설정하여 사용한다.
                </li>
                <li>
                  기관별 Radius 값은 Container size가 커질수록 Radius 값도
                  커지도록 사용한다.
                </li>
                <li>중앙행정기관은 Radius 값을 아래와 같이 제한한다.</li>
              </ul>
              <div className="helper-box advice">
                <p className="helper-tit">
                  ✅ 정부상징 로고를 사용하는 기관은 Radius 값 적용시 Xlarge
                  level 기준 최대 12px까지만 사용
                </p>
                <div className="helper-desc-wrap">
                  <ul className="info-list decimal">
                    <li>
                      정부상징 로고를 사용하는 기관은 전체적인 톤 앤 매너를
                      맞추기 위해 Radius 값을 제한한다.
                    </li>
                    <li>
                      Xsmall level 최대 2px, Xlarge level 최대 12px까지
                      적용한다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopBtn />
    </div>
  );
};

export default Gcontent_Shape;
