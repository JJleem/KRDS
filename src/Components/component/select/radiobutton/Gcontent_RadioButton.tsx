import React from "react";
import Code from "./Code";
import CodeTwo from "./CodeTwo";
import CodeThree from "./CodeThree";
import CodeFour from "./CodeFour";
import CodeFive from "./CodeFive";
import TopBtn from "../../../common/topbtn/TopBtn";
import { useState } from "react";
const Gcontent_RadioButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const handleClickTwo = () => {
    setIsClickedTwo(!isClickedTwo);
  };
  const [isClickedThree, setIsClickedThree] = useState(false);
  const handleClickThree = () => {
    setIsClickedThree(!isClickedThree);
  };
  const [isClickedFour, setIsClickedFour] = useState(false);
  const handleClickFour = () => {
    setIsClickedFour(!isClickedFour);
  };
  const [isClickedFive, setIsClickedFive] = useState(false);
  const handleClickFive = () => {
    setIsClickedFive(!isClickedFive);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            라디오 버튼 <span className="sub">(Radio button)</span>
          </strong>
        </h2>
        <p className="g-desc">
          라디오 버튼은 사용자가 여러 개의 옵션 중 한 개의 값을 선택할 수 있도록
          하는 경우에 사용한다. 사용자가 옵션 목록에서 새로운 옵션을 선택했을
          때, 기존에 선택되었던 옵션은 자동으로 선택이 해제되어야 한다.
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
                    사용자가 옵션 목록에서 한 개의 값만 선택할 수 있는 경우
                  </strong>
                  <p className="info-txt">
                    사용자가 여러 개의 옵션을 선택할 수 있도록 하는 경우에는
                    체크박스를 사용해야 한다.
                  </p>
                </li>
                <li>
                  <strong>
                    사용자가 옵션을 선택하기 위해 여러 옵션을 비교해야 하거나
                    선택 과정의 효율성이 중요한 경우
                  </strong>
                  <p className="info-txt">
                    셀렉트나 콤보 상자보다 라디오 버튼이 적합하다. <br />예 -
                    설문조사 응답 문항
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
                    사용자가 여러 개의 옵션을 선택할 수 있도록 하는 경우
                  </strong>
                  <p className="info-txt">체크박스를 사용해야 한다.</p>
                </li>
                <li>
                  <strong>옵션의 개수가 많은 경우</strong>
                  <p className="info-txt">
                    옵션의 개수가 7개를 초과하며 사용자가 옵션 목록에 친숙한
                    경우에 라디오 버튼이 아니라 셀렉트나 콤보 상자를 사용하면
                    사용자의 인지적 부담을 줄이고 활용할 수 있는 공간을 확보하는
                    데 도움이 된다.
                  </p>
                </li>
                <li>
                  <strong>모바일 플랫폼</strong>
                  <p className="info-txt">
                    옵션을 확인하기 위해 전체 화면을 스크롤 하는 것보다 별도의
                    옵션 목록을 탐색하는 것이 더 효율적이므로 셀렉트나 콤보
                    상자의 사용을 우선적으로 고려해야 한다.
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
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>그룹 레이블(선택): </strong>옵션 목록의 카테고리에 대한
                설명 또는 옵션 선택에 대한 도움말을 제공함
              </li>
              <li>
                <span className="num">2. </span>
                <strong>버튼 양식: </strong>버튼의 현재 선택 상태를 보여줌
              </li>
              <li>
                <span className="num">3. </span>
                <strong>버튼 레이블: </strong>선택하거나 선택 해제할 정보를
                나타냄
              </li>
              <li>
                <span className="num">4. </span>
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
                <strong>
                  기본적으로 라디오 버튼의 옵션은 가나다순으로 정렬한다.
                </strong>
                <p className="info-txt">
                  사용자가 가장 많이 선택하는 옵션을 먼저 배치할 경우 옵션을
                  빠르게 선택하는 데 도움이 될 수 있다. 그러나 특정한 기준에
                  따른 옵션 정렬이 편견이나 차별을 강화할 수 있으므로 유의해서
                  사용해야 한다. 정렬 기준에 대한 명확한 근거나 이유가 없는
                  경우에는 가나다순으로 정렬하는 것이 가장 안전하다.
                </p>
              </li>
              <li>
                <strong>
                  라디오 버튼은 수직으로, 라디오 버튼의 레이블은 양식의 오른쪽에
                  배치한다.
                </strong>
                <p className="info-txt">
                  가독성과 옵션 간 명확한 구분을 위하여 라디오 버튼은 수직으로
                  배치하는 것이 좋다. 이때, 레이블은 양식의 오른쪽에 배치해
                  일관된 위치에서 텍스트를 읽을 수 있도록 해야 한다. 만약 라디오
                  버튼을 수평으로 배치해야 한다면 레이블의 텍스트 길이가
                  지나치게 길지 않아야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  라디오 버튼을 수평으로 배치하는 경우 버튼 간 간격을 충분히
                  제공한다.
                </strong>
                <p className="info-txt">
                  각 라디오 버튼의 간격을 양식과 레이블 간 간격과 동일하게
                  제공하는 경우 사용자에게 혼동을 줄 수 있으므로 유의해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  라디오 버튼의 레이블은 분명하고 정확하게 제공한다.
                </strong>
                <p className="info-txt">
                  사용자가 어떤 옵션을 선택하는 것인지 이해할 수 있도록 라디오
                  버튼의 레이블은 분명하고 정확하게 제공해야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_04.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_04_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 정확한 값을 입력하는 것이 중요한 경우 라디오 버튼의
                  특정 옵션을 기본 선택값으로 제공하지 않아야 한다.
                </strong>
                <p className="info-txt">
                  사용자가 어떤 질문이나 선택을 해야 하는지를 놓치거나 잘못된
                  옵션값을 제출하는 실수를 할 수 있으므로 유의해야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_05.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_05_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>‘해당 없음’, ‘잘 모름’ 옵션 제공을 고려한다.</strong>
                <p className="info-txt">
                  일단 라디오 버튼 옵션 목록에서 하나의 옵션을 선택하고 나면
                  화면을 새로 고침하기 전까지 선택을 되돌릴 수 없다. 필수 입력
                  항목이 아닌 경우와 같이 아무 값도 선택하지 않아도 되는 상황을
                  고려하여 ‘해당 없음’, 잘 모름’, ‘선택 안 함’과 같은 옵션을
                  제공하는 것이 좋다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_06.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_06_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  버튼 양식과 인접 배경 간 명도대비를 3:1 이상으로 표현한다.
                </strong>
                <p className="info-txt">
                  원형의 라디오 버튼 양식은 라디오 버튼의 선택 상태와 해당
                  요소가 라디오 버튼 컴포넌트임을 인지할 수 있게 도와주는 중요한
                  시각적 정보이므로 인접 배경과의 명도대비를 최소 3:1 이상으로
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  버튼 양식의 선택 상태를 색상으로만 구분하지 않는다.
                </strong>
                <p className="info-txt">
                  버튼 양식의 선택 상태를 색상 이외의 수단으로 구분할 수 있는
                  시각적 단서를 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Use of Color (A)</li>
                </ul>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_07.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_01_07_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  라디오 버튼을 키보드로 탐색하고 실행할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  사용자 에이전트에서 제공되는 기본 버튼 양식이 아니라 커스텀
                  양식 디자인을 사용하는 경우에 기본 버튼 양식에 display:none,
                  visibility:hidden, opacity:0과 같은 스타일을 하면 스크린
                  리더에서 라디오 버튼의 역할을 인지할 수 없으며 키보드로 옵션을
                  선택할 수 없게 된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  라디오 버튼에 키보드 초점이 명확하게 표시되도록 한다.
                </strong>
                <p className="info-txt">
                  사용자 에이전트에서 제공되는 기본 버튼 양식이 아니라 커스텀
                  양식 디자인을 사용하는 경우 키보드 초점이 시각적으로
                  표시되도록 스타일을 제공해야 한다. 라디오 버튼 요소를
                  시각적으로 숨기는 경우, 시각적으로 표시되고 있는 버튼 양식과
                  숨겨진 요소의 크기와 위치를 일치시켜 포커스링이 적절하게
                  표시되도록 구현해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동</li>
                  <li>WCAG 2.1 Focus Visible (AA)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>라디오 버튼에 접근 가능한 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 라디오 버튼의 용도를 확인할 수 있도록
                  &lt;label&gt;, title, aria-label, aria-labelledby 중 1가지
                  방식을 이용하여 레이블을 제공해야 한다. 이때, 가능하면
                  &lt;label&gt;을 이용하여 사용자가 레이블을 클릭하였을 때에도
                  값을 선택할 수 있도록 구현하는 것이 좋다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  스크린 리더에서 그룹 레이블과 라디오 버튼 그룹의 관계를 확인할
                  수 있도록 한다.
                </strong>
                <p className="info-txt">
                  &lt;fieldset&gt;, &lt;legend&gt;를 사용하여 스크린 리더
                  사용자에게 라디오 버튼 그룹에서 값을 선택하는 목적을 보다
                  명확하게 전달할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Labels or Instructions (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 탐색에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Tab, Shift + Tab, 방향키 ↑, ↓ 로
                  구성되어있음
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
                      모든 라디오 버튼은 Tab, Shift + Tab 키를 눌렀을 때 접근할
                      수 있어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">방향키 ↑, ↓</th>
                    <td>
                      방향키 ↑, ↓를 눌렀을 때 다음/이전 라디오 버튼 양식으로
                      초점이 이동하고 값이 선택되어야 한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">실행</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 실행에 대한 표로 이동에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Click, 방향키 ↑, ↓ 로
                  구성되어있음
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
                      버튼 양식 또는 버튼 레이블을 Click 하였을 때 값이
                      선택되어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space</th>
                    <td>
                      라디오 버튼 양식에 초점이 있는 상태에서 Space 키를 누르면
                      값이 선택되어야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">방향키 ↑, ↓</th>
                    <td>
                      방향키 ↑, ↓를 눌렀을 때 다음/이전 라디오 버튼 양식으로
                      초점이 이동하고 값이 선택되어야 한다.
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
                <div className="chk-area">
                  <div className="form-check">
                    <input type="radio" name="rdo_1" id="rdo_1" />
                    <label htmlFor="rdo_1">기본</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" name="rdo_1" id="rdo_2" checked />
                    <label htmlFor="rdo_2">선택됨</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" name="rdo_1" id="rdo_3" disabled />
                    <label htmlFor="rdo_3">비활성화</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="rdo_1a"
                      id="rdo_4"
                      disabled
                      checked
                    />
                    <label htmlFor="rdo_4">선택된 비활성화</label>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader06_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse06_01_01"
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
              <div className="g-example  ex-full">
                <div className="chk-area">
                  <div className="form-check sm">
                    <input type="radio" name="rdo_1-1" id="rdo_1-1" />
                    <label htmlFor="rdo_1-1">사이즈 : sm</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" name="rdo_1-1" id="rdo_1-2" />
                    <label htmlFor="rdo_1-2">사이즈 : md</label>
                  </div>
                  <div className="form-check lg">
                    <input type="radio" name="rdo_1-1" id="rdo_1-3" />
                    <label htmlFor="rdo_1-3">사이즈 : lg</label>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedTwo ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_01_02" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedTwo ? "active" : ""
                      }`}
                      onClick={handleClickTwo}
                      aria-controls="accordionCollapse06_01_02"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeTwo />
                </div>
              </div>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">박스형</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                <div className="chk-group-area">
                  <ul className="chk-group-wrap">
                    <li className="disabled">
                      <div className="form-group chk-area chk-column">
                        <div className="form-check">
                          <input
                            type="radio"
                            name="save_id"
                            id="chk_01"
                            disabled
                          />
                          <label htmlFor="chk_01">비활성화</label>
                        </div>
                      </div>
                    </li>
                    <li className="checked">
                      <div className="form-group chk-area chk-column">
                        <div className="form-check">
                          <input
                            type="radio"
                            name="save_id"
                            id="chk_02"
                            checked
                          />
                          <label htmlFor="chk_02">선택됨</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="form-group chk-area chk-column">
                        <div className="form-check">
                          <input type="radio" name="save_id" id="chk_03" />
                          <label htmlFor="chk_03">기본</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedThree ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_01_03" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedThree ? "active" : ""
                      }`}
                      onClick={handleClickThree}
                      aria-controls="accordionCollapse06_01_03"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeThree />
                </div>
              </div>
            </div>
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">Chips</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <div className="form-chip">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip"
                    id="rdo_chip_1"
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_1">
                    chip 상태 : default{" "}
                  </label>
                </div>
                <div className="form-chip">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip"
                    id="rdo_chip_2"
                    checked
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_2">
                    chip 상태 : checked{" "}
                  </label>
                </div>
                <div className="form-chip">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip"
                    id="rdo_chip_3"
                    disabled
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_3">
                    chip 상태 :disabled{" "}
                  </label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedFour ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_01_04" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedFour ? "active" : ""
                      }`}
                      onClick={handleClickFour}
                      aria-controls="accordionCollapse06_01_04"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeFour />
                </div>
              </div>
            </div>
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">Chips - 사이즈 별</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <div className="form-chip">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip_size"
                    id="rdo_chip_lg"
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_lg">
                    chip size : lg
                  </label>
                </div>
                <div className="form-chip md">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip_size"
                    id="rdo_chip_md"
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_md">
                    chip size : md
                  </label>
                </div>
                <div className="form-chip sm">
                  <input
                    type="radio"
                    className="radio"
                    name="rdo_chip_size"
                    id="rdo_chip_sm"
                  />
                  <label className="form-chip-outline" htmlFor="rdo_chip_sm">
                    chip size :sm
                  </label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedFive ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_01_05" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedFive ? "active" : ""
                      }`}
                      onClick={handleClickFive}
                      aria-controls="accordionCollapse06_01_05"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeFive />
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

export default Gcontent_RadioButton;
