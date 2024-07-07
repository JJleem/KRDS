import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent_Layout = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>스타일 가이드</span>
          <strong>
            배치 <span className="sub">(Layout)</span>
          </strong>
        </h2>
        <p className="g-desc">
          배치는 화면에 있는 요소들의 시각적 배열을 다양한 디바이스에서도
          일관성을 유지할 수 있도록 도와준다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">Grid</h3>
          <ul className="info-list decimal">
            <li>
              그리드는 UI 구성 시 가장 근간이 되는 기준이다. 요소들의 배치를
              돕는 그리드 시스템의 구성 요소인 Column, Margin, Gutter 값을
              정의한다.
            </li>
            <li>
              그리드를 사용하여 작게는 화면 안에서의 시각적인 일관성을 제공하고,
              크게는 다양한 디바이스에서도 최적의 상태로 통일감 있는 경험을
              제공한다.
            </li>
          </ul>
          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_01.png"
                alt=""
              />
            </div>
          </div>

          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Screen margin</h4>
              <ul className="info-list decimal">
                <li>
                  Desktop, Tablet, Mobile 각 스크린 마진을 지정하여 사용한다.
                </li>
                <li>
                  Screen margin 값은 모바일 최소 16px, PC 최소 24px 이상
                  사용한다.
                </li>
              </ul>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_02.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Column</h4>
              <ul className="info-list decimal">
                <li>
                  PC, Tablet, Mobile 각 디바이스에 최적화된 Column을 사용한다.
                </li>
                <li>
                  Column의 너비는 고정값이 아닌 백분율을 사용하며, 콘텐츠가
                  연속적인 화면 크기에 유연하게 적응할 수 있도록 한다.
                </li>
                <li>
                  Desktop은 12 column을 기본으로 하며 16까지 적용할 수 있다.
                </li>
                <li>
                  Tablet은 8 column을 기본으로 하며 12까지 적용할 수 있다.
                </li>
                <li>Mobile은 4 column을 기본으로 하며 6까지 적용할 수 있다.</li>
              </ul>
              <div className="g-img-wrap">
                <figure>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_03.png"
                    alt=""
                  />
                  <figcaption>12 Column의 레이아웃 적용 예시</figcaption>
                </figure>
              </div>
              <div className="g-img-wrap">
                <figure>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_04.png"
                    alt=""
                  />
                  <figcaption>
                    Desktop은 12 Column을 기본으로 하며 16 Column 까지
                    적용가능하다.
                  </figcaption>
                </figure>
              </div>
              <div className="g-img-wrap">
                <figure>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_05.png"
                    alt=""
                  />
                  <figcaption>
                    Tablet은 8 Column을 기본으로 하며 12 Column까지
                    적용가능하다.
                  </figcaption>
                </figure>
              </div>
              <div className="g-img-wrap">
                <figure>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_06.png"
                    alt=""
                  />
                  <figcaption>
                    Mobile은 4 Column을 기본으로 하며 6 Column 까지
                    적용가능하다.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Gutter</h4>
              <p className="g-desc">
                칼럼과 칼럼 사이의 간격이며, 디바이스별 최소 크기를 정의한다
              </p>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_07.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Sub page layout</h4>
              <ul className="info-list decimal">
                <li>
                  Desktop 에서 서브 페이지는 LNB, SNB 영역이 있는 레이아웃과
                  없는 레이아웃으로 구분한다.
                </li>
                <li>
                  복잡한 정보구조를 가지는 경우 LNB(Local navigation bar) 혹은
                  SNB(Side navigation bar)를 사용한다.
                </li>
                <li>
                  LNB와 SNB를 사용하는 경우는 IA 구성이 많고 Depth가 깊은 화면에
                  적합한 형태의 레이아웃으로, 정보탐색이 용이할 수 있도록 일관성
                  있는 형태를 유지한다.
                </li>
              </ul>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_08.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Responsive layout grid</h3>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Breakpoint</h4>
              <p className="g-desc">
                현재 우리나라에서 가장 많이 사용되는 데스크탑, 태블릿, 모바일
                크기에 기반한 Breakpoint다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_09.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_10.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Contents area</h4>
              <ul className="info-list decimal">
                <li>
                  다양한 디바이스에서 보이는 화면의 최대 콘텐츠 영역을 설정하여
                  사용한다.
                </li>
                <li>
                  정부상징 로고를 사용하는 기관은 디바이스 크기가 커져도 동일한
                  배치를 유지하는 제한된 콘텐츠 영역을 사용하며 최댓값
                  1280px(고정)을 적용한다.
                </li>
                <li>
                  반응형을 기반으로 레이아웃을 구성하며 디바이스 축소 시에는
                  콘텐츠가 재배치된다.
                </li>
              </ul>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_11.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Spacing</h3>
          <p className="g-desc">
            균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와준다. 8-Point
            grid를 원칙으로 하며 작게는 카드나 테이블 등의 컴포넌트부터
            레이아웃까지 적절한 간격을 유지하기 위해 사용한다.
          </p>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Unit</h4>
              <p className="g-desc">
                8px(8-Point grid)의 배수를 사용하며, 상황에 따라 4px의 배수
                간격을 사용할 수 있다.
              </p>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_12.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_12_02.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Layout</h4>
              <ul className="info-list decimal">
                <li>
                  서브 페이지 내의 레이아웃은 크게 GNB 영역, LNB 영역, Body
                  영역, Footer 영역으로 나누어지며 아래와 같이 간격을 준수하여
                  사용한다.
                </li>
                <li>
                  Body 영역은 크게 대타이틀 영역과 Contents 영역으로 구분되며
                  콘텐츠 단락 사이의 간격을 아래와 같이 준수하여 사용한다.
                </li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_13.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_14.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Content area spacing</h4>
              <p className="g-desc">
                • 서브 페이지 내 콘텐츠 영역은 아래와 같은 간격을 유지한다.
                PC에서 Mobile 사이즈로 변화되는 간격에 유의한다.
              </p>
              <div className="g-img-wrap pure left">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_15.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_05_16.png"
                    alt=""
                  />
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

export default Gcontent_Layout;
