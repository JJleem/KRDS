import React, { useState } from "react";
import Code from "./code/Code";
import HeaderTop from "../common/Header-top/HeaderTop";
const Gcontent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            공식 배너 <span className="sub">(Masthead)</span>
          </strong>
        </h2>
        <p className="g-desc">
          공식 배너는 사용자가 대한민국 정부 조직 및 관련 기관에서 운영 및
          관리하는 디지털 정부서비스임을 식별할 수 있도록 제공하는 정보
          배너이다.
        </p>
      </div>

      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="	https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>컨테이너: </strong>배너 정보가 제공되는 영역
              </li>
              <li>
                <span className="num">2. </span>
                <strong>텍스트: </strong>공식 디지털 서비스임을 안내하는 문구
              </li>
              <li>
                <span className="num">3. </span>
                <strong>드롭다운: </strong>설명을 확인할 수 있는 영역을
                확장/축소하는 데 사용하는 컨트롤
              </li>
              <li>
                <span className="num">4. </span>
                <strong>설명: </strong>공식 디지털 서비스에 대한 확인 방법 또는
                디지털 공공 브랜드에 대한 안내 콘텐츠/링크를 제공함
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>배너는 모든 화면의 최상단에 제공한다.</strong>
                <p className="info-txt">
                  공식 정부 배너 영역은 사용자가 해당 디지털 서비스를 신뢰할 수
                  있는 기준이 되며, 디지털 공공 서비스에 대한 일관성 있는 사용자
                  경험의 출발점이므로 모든 서비스에서 동일한 위치에 동일한
                  형태와 스타일로 제공한다. <br />
                  배너의 위치가 일관성 없거나 특정 화면에만 제공될 경우
                  사용자에게 혼동을 줄 수 있다.
                </p>
              </li>
              <li>
                <strong>배너가 지나치게 주의를 끌지 않도록 표현한다.</strong>
                <p className="info-txt">
                  서비스의 디자인 주제에 적합한 컨테이너 배경색을 사용한다. 화면
                  상단 영역에서 사용자가 가장 먼저 집중해야 하는 정보는 헤더
                  내부의 내비게이션과 기능 버튼이다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>배너 텍스트와 스타일을 변형하지 않는다.</strong>
                <p className="info-txt">
                  모든 디지털 정부서비스에서 공식 배너가 일관성 있게 제공되었을
                  때 신뢰할 수 있다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_03.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_03_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  공식 디지털 정부서비스가 아닌 사이트에서는 배너를 사용하지
                  않아야 한다.
                </strong>
                <p className="info-txt">
                  정부의 공식 서비스가 아닌 곳에서 배너를 사용하게 될 경우
                  사용자에게 혼동을 줄 수 있으므로 배너를 사용하지 않아야 한다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>건너뛰기 링크는 공식 배너 이전에 제공한다.</strong>
                <p className="info-txt">
                  공식 배너는 모든 페이지에서 반복되는 영역이므로 스크린 리더
                  사용자와 키보드 사용자가 이를 건너뛸 수 있도록 건너뛰기 링크를
                  가장 첫 요소로 제공해야 한다.
                </p>
                <div className="g-img-wrap">
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_01_04.png"
                      alt=""
                    />
                  </div>
                </div>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 반복 영역 건너뛰기</li>
                  <li>WCAG 2.1 Bypass Blocks (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example img-wrap">
                <HeaderTop />
              </div>

              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader02_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse02_01_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn tertiary sm go-top" type="button">
        TOP
      </button>
    </div>
  );
};

export default Gcontent;
