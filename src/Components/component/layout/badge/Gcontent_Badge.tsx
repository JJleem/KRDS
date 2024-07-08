import React from "react";
import Code from "./Code";
import TopBtn from "../../../common/topbtn/TopBtn";
import { useState } from "react";
const Gcontent_Badge = () => {
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
            배지 <span className="sub">(Badge)</span>
          </strong>
        </h2>
        <p className="g-desc">
          컴포넌트에 대한 빠른 인지와 탐색을 돕기 위해 컴포넌트 근처에 표시되는
          작은 문자 또는 숫자 데이터이다. 컴포넌트의 분류 체계, 구조화된 정보,
          상태 정보, 기타 메타 데이터를 표시할 수 있으며 사용자의 주의를 끌기
          위해 색상을 활용할 수 있다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>
                    새로 등록된 콘텐츠, 읽지 않은 알림을 안내할 때
                  </strong>
                  <p className="info-txt">
                    배지를 사용함으로써 사용자의 주의를 끌어 중요한 정보를
                    확인하도록 행동을 유도할 수 있다.
                  </p>
                </li>
                <li>
                  <strong>
                    데이터의 상태 정보를 사용자가 알고 있는 것이 좋을 때
                  </strong>
                  <p className="info-txt">
                    데이터에 2개 이상의 상태 정보가 존재하며, 이를 사용자가
                    명확하게 인지하는 것이 중요한 경우 배지를 이용한다. <br />
                    예) 신청 서비스의 진행 상태(접수 중, 마감됨, 모집 완료) 등
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합하지 않은 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>대화형으로 사용하고자 할 때</strong>
                  <p className="info-txt">태그를 사용하는 것이 적합하다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_06_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>레이블: </strong>배지를 통해 전달하고자 하는 메타 데이터
              </li>
              <li>
                <span className="num">2. </span>
                <strong>컨테이너: </strong>배지를 배경과 구분하는 윤곽선
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>레이블은 정확한 내용으로 간결하게 제공한다.</strong>
                <p className="info-txt">
                  사용자가 배지를 통해 정보를 빠르게 파악할 수 있도록 핵심
                  정보를 간결하게 요약하고 텍스트에 줄바꿈이 발생하지 않도록
                  해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  레이블과 컨테이너의 색상은 일반적인 의미 체계, 일관성을
                  고려하여 선택한다.
                </strong>
                <p className="info-txt">
                  배지 레이블이 전달하는 정보가 특정 색상이 가진 일반적인 의미
                  체계와 일치하는 경우, 적절한 색상의 사용은 사용자가 더 빠르게
                  정보를 처리하는 데 도움된다(예 - 중요, 경고, 반대와 같은
                  정보에 빨간색 사용). 그러나 과도한 색상 사용은 오히려 사용자의
                  주의를 분산시킬 수 있다.
                </p>
              </li>
              <li>
                <strong>배지를 대화형 요소로 사용하지 않는다.</strong>
                <p className="info-txt">
                  배지를 대화형 요소로 마크업(&lt;a&gt;, &lt;button&gt; 등) 또는
                  역할(role=link, role=button 등)을 부여하거나 부적절한 속성(0
                  이상의 속성값을 가진 tabindex 속성)을 적용하여 키보드 사용자,
                  스크린 리더 사용자가 배지의 용도와 목적을 혼동하지 않도록 해야
                  한다.
                </p>
              </li>
              <li>
                <strong>하나의 요소에 한 개의 배지를 사용한다.</strong>
                <p className="info-txt">
                  배지는 사용자가 빠르게 정보를 훑어 보는 과정을 돕기 위해
                  사용된다. 만약 한 항목에 여러 개의 배지가 사용된다면 지나치게
                  많은 정보가 강조되어 있어 배지의 사용 효과를 감소시킨다.
                  배지는 데이터와 관련된 가장 중요한 특성을 표현하는 데 한 번만
                  사용하는 것이 적절하다.
                </p>
              </li>
              <li>
                <strong>
                  배지의 배경색으로 서비스의 주조색을 사용하지 않는다.
                </strong>
                <p className="info-txt">
                  배지의 배경색으로 주조색을 이용하게 되면 사용자는 배지를
                  버튼으로 오인할 수 있다.
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
                <strong>텍스트 레이블을 제공한다.</strong>
                <p className="info-txt">
                  배지는 접근성과 명확한 이해를 위해 항상 텍스트 레이블을
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  텍스트 레이블의 색상은 배경과 4.5:1 이상의 명도 대비를 갖도록
                  표현한다.
                </strong>
                <p className="info-txt">
                  대부분의 사용자가 텍스트 콘텐츠를 문제없이 인지할 수 있도록
                  텍스트 색상, 배지의 배경 색상 선정에 유의해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Contrast (Minimum) (AA)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
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
              <div className="g-example ex-full">
                <button type="button" className="btn btn-txt ico-filter h-auto">
                  <span className="span">필터</span>
                  <span className="num">10</span>
                </button>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader04_06_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse04_06_01"
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

      <TopBtn />
    </div>
  );
};

export default Gcontent_Badge;
