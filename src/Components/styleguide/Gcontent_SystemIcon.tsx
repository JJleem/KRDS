import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent_SystemIcon = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>스타일 가이드</span>
          <strong>
            아이콘 <span className="sub">(System icon)</span>
          </strong>
        </h2>
        <p className="g-desc">
          시스템 아이콘은 간단한 동작, 기능을 나타내거나 사물의 상징을 기호로
          만든 시각 언어로 한정된 공간에서 효율적으로 정보를 전달하는 역할을
          한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">Guidelines</h3>

          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Size</h4>
              <div className="g-desc">
                표준 아이콘의 사이즈는 24px이며, 16px, 20px, 24px, 32px, 48px
                사이즈를 사용한다.
              </div>
              <ul className="info-list decimal">
                <li>1px × 1px를 기준으로 그리드화하여 표현되었다.</li>
                <li>16px, 20px은 대체로 텍스트와 함께 사용한다.(Small size)</li>
                <li>
                  24px은 시스템 아이콘의 기본 사이즈로 대부분의 인터페이스에서
                  사용한다.(Medium size)
                </li>
                <li>
                  32px, 48px은 개념을 강조하거나 공간이 충분할 경우
                  사용한다.(Large size)
                </li>
                <li>
                  아이콘의 사이즈는 4px 또는 8px의 배수로 크기를 정의하며 홀수나
                  소수로 만들지 않도록 주의한다.
                </li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Stroke weight</h4>
              <ul className="info-list decimal">
                <li>모든 아이콘의 Stroke는 크기에 맞는 Weight를 사용한다.</li>
                <li>
                  아이콘 Scaling 시에는 기본 크기(24px)를 베이스로 %로 Scaling
                  하거나 Icon 크기의 비율에 맞는 Weight 값을 정의하여 사용한다.
                </li>
                <li>
                  정부상징 로고를 사용하는 기관의 System icon은 12~16=1px,
                  20=1.4px, 24~32=1.6px, 48=2px의 Weight를 사용한다.
                </li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_02.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Layout</h4>
              <p className="g-desc">
                모든 아이콘은 아이콘이 그려지는 영역인 Live area과 빈 공간인
                Padding으로 구분되며 기관마다 Padding 값을 정의하여 사용한다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Keyline</h4>
              <ul className="info-list decimal">
                <li>
                  같은 크기 아이콘에서 정사각형, 원형, 직사각형의 형태가
                  시각적으로 동일한 면적으로 표현하기 위한 가이드라인이다.
                </li>
                <li>
                  모든 아이콘이 시각적으로 일관된 비율을 유지할 수 있도록
                  keyline shapes를 참고하여 제작한다.
                </li>
                <li>
                  아래 비율은 24x24의 1000% 사이즈 Keyline이며, 사이즈별 비율에
                  맞게 변형하여 사용한다.
                </li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_04.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Corner radius</h3>
          <p className="g-desc">
            시스템 아이콘에 한정된 Radius 값을 정의한다. 둥글기 값 설정에 따라
            아이덴티티를 표현할 수 있다.
          </p>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Basic radius</h4>
              <ul className="info-list decimal">
                <li>기관의 Shape에 맞춰 Icon radius 값을 설정하여 사용한다.</li>
                <li>
                  Radius 값은 낮을수록 정적이고 신뢰감 있는 이미지를, 높을수록
                  친근감 있고 부드러운 인상을 줄 수 있다.
                </li>
                <li>
                  정부상징 로고를 사용하는 기관은 시스템 아이콘 적용 시,
                  전체적인 톤 앤 매너를 맞추기 위해 Radius 값을 0,1,2로제한한다.
                </li>
              </ul>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_11.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_05.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Consistency in Visual</h4>
              <ul className="info-list decimal">
                <li>
                  Radius를 사용할 때 아이콘의 크기에 따라 시각적으로 적절한
                  Radius 값을 맞춰가며 사용한다.
                </li>
                <li>아이콘을 담는 컨테이너가 커질수록 Radius 값도 커진다.</li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_06.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Usage</h3>
          <p className="g-desc">
            단순하고 간결하게 사용되는 System Icon은 일관성 있는 품질 유지와
            효율적인 측면에서 SVG 파일로 사용하는 것을 권장한다.
          </p>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">SVG 파일은</h4>
              <ul className="info-list decimal">
                <li>
                  크기를 줄이거나 늘리더라도 화질에 영향을 받지 않아 다양한
                  해상도에서 품질 유지에 뛰어나다.
                </li>
                <li>
                  마크업 언어로 이루어져 있어 CSS와 JavaScript로 수정할 수
                  있으며 이미지 편집 툴 없이도 색상과 두께 등 스타일의 변경이
                  용이하다.
                </li>
                <li>용량이 적어 출력 속도가 빠르다.</li>
                <li>상호작용을 추가하는 경우 애니메이션 작업이 용이하다.</li>
              </ul>
              <div className="helper-box advice">
                <p className="helper-tit">✅ 주의 사항</p>
                <div className="helper-desc-wrap">
                  <ul className="info-list decimal">
                    <li>
                      대부분 브라우저는 SVG 파일을 지원하지만, 브라우저와
                      브라우저 버전에 따라 SVG 파일을 지원하지 않는
                      경우(익스플로어 8 이하, 안드로이드 2.3 이하 버전 등)
                      이미지가 보이지 않으므로 브라우저 버전별 지원기능과
                      호환성을 고려하여 작업하도록 한다.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="refer-txt">
                호환성 체크 참고 :
                <a
                  href="https://caniuse.com/svg"
                  target="_blank"
                  title="새 창 열림"
                >
                  caniuse.com/svg
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">Do &amp; Don’t</h3>
          <p className="g-desc">시스템 아이콘 제작 시 주의해야 할 사항이다.</p>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">Simple</h4>
              <ul className="info-list decimal">
                <li>
                  기본 크기(24px)에서 이미지가 명확하게 표현되는지 확인해야
                  하며, 작은 크기일수록 의미 전달에 불필요한 표현은 생략한다.
                </li>
                <li>
                  지나친 생략은 지양하며 모두가 한눈에 인지할 수 있는 형태를
                  사용한다.
                </li>
              </ul>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_07.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Stroke width</h4>
              <p className="g-desc">
                너무 굵거나 가는 선은 가독성이 떨어지므로 사용하지 않는다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_08.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Use one type of stroke width</h4>
              <p className="g-desc">
                같은 크기의 아이콘을 표현할 때 한 가지의 두께만 사용한다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_09.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="g-conts-area">
              <h4 className="g-heading-s">Icon type (Line, Fill)</h4>
              <p className="g-desc">
                Line type과 Fill type을 구분하여 사용한다.
              </p>
              <div className="g-img-wrap pure">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/style/style_06_10.png"
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

export default Gcontent_SystemIcon;
