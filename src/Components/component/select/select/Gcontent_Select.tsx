import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./code/Code";
import CodeTwo from "./code/CodeTwo";
import { useState } from "react";
const Gcontent_Select = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const handleClickTwo = () => {
    setIsClickedTwo(!isClickedTwo);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            셀렉트 <span className="sub">(Select)</span>
          </strong>
        </h2>
        <p className="g-desc">
          셀렉트는 사용자에게 여러 개의 옵션 목록을 팝업으로 제공하여 그 중 한
          개의 값을 선택할 수 있도록 하는 경우에 사용한다.
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
                    사용자에게 제공할 옵션 목록이 7개 이상, 20개 이하인 경우
                  </strong>
                </li>
                <li>
                  <strong>입력폼에서 값을 선택해야 하는 경우</strong>
                </li>
                <li>
                  <strong>
                    옵션 목록을 표시할 영역이 충분하지 않거나 모바일 웹이 더
                    중요한 경우
                  </strong>
                  <p className="info-txt">
                    사용자의 웹브라우저와 화면 크기에 맞추어 별도의 스타일
                    적용이 필요한 드롭다운이나 콤보상자와 달리 셀렉트는 기본
                    컨트롤 요소를 사용하므로 더 쉽게 조작할 수 있다.
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
                  <strong>
                    사용자가 목록에서 옵션을 비교하는 것이 중요한 경우
                  </strong>
                  <p className="info-txt">
                    사용자가 옵션을 선택하기 위해 여러 옵션을 비교해야 하거나
                    선택 과정의 효율성이 중요한 경우에는 셀렉트보다 라디오
                    버튼이 적합하다.
                  </p>
                </li>
                <li>
                  <strong>한 번에 여러 개의 값을 선택해야 하는 경우</strong>
                  <p className="info-txt">
                    체크박스 또는 다중 선택이 가능한 드롭다운 컴포넌트를
                    사용한다.
                  </p>
                </li>
                <li>
                  <strong>옵션의 개수가 20개를 초과하는 경우</strong>
                  <p className="info-txt">
                    사용자가 좁은 목록 영역에서 옵션을 탐색하는 것이 어려울 수
                    있다. 셀렉트 대신 사용자가 직접 값을 입력하여 옵션 목록에서
                    일치하는 옵션을 제안받을 수 있는 콤보상자를 사용하거나, 여러
                    개의 셀렉트 요소로 분할하는 방법을 고려해야 한다.
                  </p>
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
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>레이블: </strong>옵션 목록의 카테고리에 대한 설명 또는
                옵션 선택에 대한 도움말을 제공함
              </li>
              <li>
                <span className="num">2. </span>
                <strong>컨테이너: </strong>콤보박스와 배경을 구분하는 시각적인
                수단으로 면 또는 선으로 표현됨
              </li>
              <li>
                <span className="num">3. </span>
                <strong>아이콘: </strong>옵션 목록의 확장/축소 상태를 나타냄
              </li>
              <li>
                <span className="num">4. </span>
                <strong>선택값: </strong>사용자가 옵션 목록에서 선택한 값을
                보여줌
              </li>
              <li>
                <span className="num">5. </span>
                <strong>옵션: </strong>사용자가 선택할 수 있는 값 또는
                사용자에게 제안된 값의 목록
              </li>
              <li>
                <span className="num">6. </span>
                <strong>도움말(선택): </strong>입력 내용, 입력 방식에 대한
                도움말 또는 오류 메시지를 제공함
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>옵션 텍스트를 간결하게 제공한다.</strong>
                <p className="info-txt">
                  옵션 텍스트는 컨테이너와 옵션 목록 영역에 표현될 수 있는
                  적절한 길이로 제공해야 한다. 옵션 텍스트의 길이가 셀렉트의
                  너비를 벗어나게 되면 사용자는 선택하고자 하는 옵션의 정확한
                  내용을 파악할 수 없다. 불가피한 경우 해당 옵션에 툴팁을
                  제공하여 옵션에 마우스 또는 키보드가 접근했을 때 전체 내용이
                  표시되도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>모든 셀렉트에는 레이블을 제공한다.</strong>
                <p className="info-txt">
                  셀렉트에 레이블이 제공되지 않으면 어떤 값을 선택해야 하는
                  것인지 알 수 없다. 레이블을 생략하고자 하는 경우에는 레이블
                  없이도 사용자가 값을 선택하는 데 문제가 없다는 근거가 명확해야
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  셀렉트에 값을 변경하였을 때 폼이 제출되어서는 안 된다.
                </strong>
                <p className="info-txt">
                  입력폼에 별도의 제출 버튼을 제공하여 사용자가 입력폼의 제출을
                  확정하는 경우에만 데이터가 전송되어야 한다. 사용자는
                  입력폼에서 입력한 데이터를 수정하거나 다음 항목의 데이터를
                  입력하게 되는데, 이때 셀렉트의 옵션 변경만으로도 폼이 제출되어
                  버리면 기존에 입력한 정보가 삭제되거나 의도하지 않게 제출되어
                  당황하게 된다. 특히 키보드, 스크린 리더 사용자는 데이터를 다시
                  입력하는 과정에서 이 같은 변화의 맥락을 인지하는 데 어려움이
                  따르므로 유의해야 한다.
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
                <strong>셀렉트에 접근 가능한 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 셀렉트의 용도를 확인할 수 있도록{" "}
                  <label>
                    , title, aria-label, aria-labelledby 중 1가지 방식을
                    이용하여 레이블을 제공해야 한다.
                  </label>
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  셀렉트 아이콘과 인접 배경 간 명도대비를 3:1 이상으로 표현한다.
                </strong>
                <p className="info-txt">
                  셀렉트의 꺾쇠 아이콘은 옵션 목록의 확장/축소 상태를 나타내며
                  요소가 셀렉트 컴포넌트임을 인지할 수 있게 도와주는 중요한
                  시각적 정보이므로 인접 배경과의 명도대비를 최소 3:1 이상으로
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">목록 확장 및 축소</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 목록 확장 및 축소에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, Enter, Space,
                  Esc 로 구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Click</th>
                    <td>
                      컨테이터를 Click 했을 때, 옵션 목록이 확장되거나 축소된다.{" "}
                      <br />
                      옵션 목록이 확장된 상태에서 셀렉트의 레이블, 컨테이너,
                      옵션 목록이 아닌 영역을 Click 하면 옵션 목록은 축소되어야
                      한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter, Space</th>
                    <td>
                      컨테이너에 초점이 있는 경우, 옵션 목록이 확장되거나
                      축소된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Esc</th>
                    <td>
                      옵션 목록을 축소하고 컨테이터로 초점이 이동해야 한다
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 탐색에 대한 표로 이동에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Tab, Shift + Tab,
                  Scroll 로 구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tab, Shift + Tab</th>
                    <td>
                      모든 셀렉트는 Tab, Shift + Tab 키를 눌렀을 때 접근할 수
                      있어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Scroll</th>
                    <td>
                      옵션 목록에 스크롤이 생성된 경우 목록이 상/하로 이동한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">옵션 선택</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 옵션 선택에 대한 표로 이동에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, Enter, 방향키
                  ↑, ↓ 로 구성되어있음
                </caption>
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Click</th>
                    <td>
                      옵션 목록에서 특정 옵션을 Click 하면 해당 옵션으로
                      선택값이 변경된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter</th>
                    <td>
                      옵션에 초점이 있는 경우, 해당 옵션 값이 선택된 후 목록이
                      축소된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">방향키 ↑, ↓</th>
                    <td>
                      컨테이너에 초점이 있고 옵션 목록이 축소된 경우, 이전/다음
                      옵션으로 선택값이 변경된다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <select className="form-select">
                  <option value="">항목1</option>
                  <option value="">항목2</option>
                  <option value="">항목3</option>
                  <option value="">항목4</option>
                </select>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader06_03_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse06_03_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 - 사이즈 별</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <select className="form-select">
                  <option value="">Size : lg</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                </select>
                <select className="form-select md">
                  <option value="">Size : md</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                </select>
                <select className="form-select sm">
                  <option value="">Size : sm</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                  <option value="">항목</option>
                </select>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedTwo ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_03_02" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedTwo ? "active" : ""
                      }`}
                      onClick={handleClickTwo}
                      aria-controls="accordionCollapse06_03_02"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeTwo />
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

export default Gcontent_Select;
