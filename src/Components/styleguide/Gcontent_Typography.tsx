import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent_Typography = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>스타일 가이드</span>
          <strong>
            서체 <span className="sub">(Typography)</span>
          </strong>
        </h2>
        <p className="g-desc">
          서체는 정보를 전달하고 일관된 경험을 제공하는 중요한 요소다. 글꼴,
          크기, 두께, 계층 등을 정의하여 텍스트의 내용과 중요도를 시각적으로
          표현하고 다양한 화면에서 동일하게 경험할 수 있도록 한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">Typeface</h3>
          <p className="g-desc">
            중앙행정기관 사이트에서는 기본 글꼴로 국문과 영문 모두 Pretendard
            GOV를 사용한다.
          </p>
          <div className="helper-box advice">
            <p className="helper-tit">
              ✅ 독자적인 로고를 사용하며 자체 개발 폰트가 있는 기관의 경우
            </p>
            <div className="helper-desc-wrap">
              <ul className="info-list decimal">
                <li>
                  개발된 폰트가 고딕 계열의 글꼴이 아니라면 자체 개발 폰트는
                  디스플레이(혹은 헤딩)에만 적용을 권장하며, 본문 텍스트로는
                  작은 크기에도 읽기 쉬운 산스 계열(고딕 계열) 글꼴을 사용하도록
                  한다. (고딕 계열 글꼴 예: 노토 산스, 나눔 고딕, 스포카 한 산스
                  등) <br />
                  <p className="refer-txt">
                    Pretendard GOV:
                    <a
                      href="https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov"
                      target="_blank"
                      title="새 창 열림"
                    >
                      https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_01.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Type scale</h3>
          <ul className="info-list decimal">
            <li>
              다양한 크기의 텍스트를 일관되게 사용할 수 있도록 스타일에 따라
              구분하여 정의한다.
            </li>
            <li>
              반응형에 대응하기 위하여 폰트 규격은 개발 시 코드상에서는 rem 값을
              사용한다.
            </li>
            <li>
              rem 기본값은 개발의 용이함을 위해 html 루트 요소의 폰트 크기를
              기준으로 10px or 62.5%를 기준점으로 px로 환산하여 사용한다.
            </li>
          </ul>
          <div className="g-img-wrap pure left">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_02.png"
                alt=""
              />
            </div>
          </div>
          <div className="helper-box advice">
            <p className="helper-tit">
              ✅ 독자적인 로고를 사용하는 기관의 Display 스타일 적용에 대해
            </p>
            <div className="helper-desc-wrap">
              <ul className="info-list decimal">
                <li>
                  키 비주얼 영역 혹은 마케팅 배너 영역에 사용되는 Display
                  스타일의 경우 Size와 Font weight를 변경하여 사용할 수 있다.
                  단, Small/Medium/Large처럼 일정한 규칙을 가질 수 있도록 한다.
                </li>
              </ul>
            </div>
          </div>
          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_03.png"
                alt=""
              />
            </div>
          </div>

          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Font weight</h4>
              <p className="g-desc">
                텍스트의 두께는 Regular, Bold 2가지로 사용한다. Body, Detail,
                Label에서는 강조가 필요할 때 Bold를 사용한다.
              </p>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_04.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Line height</h4>
              <p className="g-desc">
                가독성을 위해 폰트 사이즈의 1.5배를 권장한다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_05.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Hierarchy</h3>
          <p className="g-desc">
            Heading, Body, Detail 등 기본이 되는 텍스트 계층을 정의한다.
          </p>
          <div className="g-img-wrap pure">
            <figure>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_03_06.png"
                alt=""
              />
              <figcaption>[텍스트 계층 적용 예시]</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <TopBtn />
    </div>
  );
};

export default Gcontent_Typography;
