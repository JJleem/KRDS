import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./code/Code";
import CodeTwo from "./code/CodeTwo";
import CodeThree from "./code/CodeThree";
import CodeFour from "./code/CodeFour";
import CodeFive from "./code/CodeFive";
import CodeSix from "./code/CodeSix";
import CodeSeven from "./code/CodeSeven";
import { useState } from "react";
const Gcontent_Checkbox = () => {
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
  const [isClickedSix, setIsClickedSix] = useState(false);
  const handleClickSix = () => {
    setIsClickedSix(!isClickedSix);
  };
  const [isClickedSeven, setIsClickedSeven] = useState(false);
  const handleClickSeven = () => {
    setIsClickedSeven(!isClickedSeven);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            체크박스 <span className="sub">(Checkbox)</span>
          </strong>
        </h2>
        <p className="g-desc">
          체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수
          있도록 하는 경우에 사용한다. 즉, 체크박스 옵션의 선택은
          상호배타적이므로 한 개의 옵션을 선택하는 것은 다른 옵션의 선택에
          영향을 미치지 않는다.
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
                    사용자가 옵션 목록에서 여러 개의 값을 선택할 수 있는 경우
                  </strong>
                  <p className="info-txt">
                    필터링 <br />
                    약관, 조건 선택 등
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
                    사용자가 한 개의 옵션을 선택할 수 있도록 하는 경우
                  </strong>
                  <p className="info-txt">라디오 버튼을 사용해야 한다.</p>
                </li>
                <li>
                  <strong>옵션을 선택하자마자 적용되는 경우</strong>
                  <p className="info-txt">
                    토글 스위치를 사용을 고려한다. 체크박스는 적용, 제출과 같은
                    별도의 확정 행위가 필요한 하나의 큰 과업 플로(Flow) 내에서
                    부분적으로 옵션을 선택하는 경우에 사용하기 적합하다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">
              한 그룹 내 모든 옵션을 독립적으로 선택할 수 있도록 할 때
            </h4>
            <p className="info-txt">
              가장 기본적인 체크박스 유형으로 체크박스 양식은 선택됨, 선택안됨
              두 가지 상태로 표현된다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">전체 옵션을 선택할 수 있을 때</h4>
            <p className="info-txt">
              체크박스의 양식은 선택됨, 선택안됨, 중간의 세 가지 상태로
              표현된다. 옵션이 의미적으로 상하 관계로 구성되어 있어 상위 옵션의
              선택, 선택 해제를 통해 모든 하위 옵션을 선택, 선택 해제할 수 있다.
              이때 하위 옵션의 일부만을 선택할 수 있으므로 이 경우에는 상위
              옵션이 중간 상태로 설정된다. 사용자가 한 그룹 내의 모든 옵션을
              개별적으로 선택하도록 할 수 있으나, 전체 선택 옵션을 제공할 경우
              사용자는 모든 옵션을 선택할 수 있음을 분명하게 인지할 수 있고
              효율적으로 값을 선택할 수 있다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_04.png"
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
                <strong>체크박스 양식: </strong>체크박스의 현재 선택 상태를
                보여줌
              </li>
              <li>
                <span className="num">3. </span>
                <strong>체크박스 레이블: </strong>선택하거나 선택 해제할 정보를
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
                  기본적으로 체크박스의 옵션은 가나다순으로 정렬한다.
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
                  체크박스는 수직으로, 체크박스 레이블은 양식의 오른쪽에
                  배치한다.
                </strong>
                <p className="info-txt">
                  가독성과 옵션 간 명확한 구분을 위하여 체크박스는 수직으로
                  배치하는 것이 좋다. 이때, 레이블은 양식의 오른쪽에 배치해
                  일관된 위치에서 텍스트를 읽을 수 있도록 해야 한다. 만약
                  체크박스를 수평으로 배치해야 한다면 레이블의 텍스트 길이가
                  지나치게 길지 않아야 한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_01.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_01_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>체크박스의 레이블은 분명하고 정확하게 제공한다</strong>
                <p className="info-txt">
                  사용자가 어떤 옵션을 선택하는 것인지 이해할 수 있도록
                  체크박스의 레이블은 분명하고 정확하게 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  전체 선택 옵션이 제공되는 경우 중간 상태를 명확하게 표현한다.
                </strong>
                <p className="info-txt">
                  하위 옵션의 일부만 선택되었음에도 불구하고 상위 옵션이 선택
                  상태로 유지되면 사용자에게 혼동을 줄 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_02_02.png"
                      alt=""
                    />
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
                  체크박스, 아이콘과 인접 배경 간 명도대비를 3:1 이상으로
                  표현한다.
                </strong>
                <p className="info-txt">
                  체크박스의 배경과 체크 아이콘은 체크박스의 선택 상태와 해당
                  요소가 체크박스 컴포넌트임을 인지할 수 있게 도와주는 중요한
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
                  체크박스의 선택 상태를 색상으로만 구분하지 않는다.
                </strong>
                <p className="info-txt">
                  체크박스의 선택 상태를 색상 이외의 수단으로 구분할 수 있는
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
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_03.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_06_02_03_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  체크박스를 키보드로 탐색하고 실행할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  사용자 에이전트에서 제공되는 기본 체크박스가 아니라 커스텀
                  디자인을 사용하는 경우에 기본 체크박스에 display:none,
                  visibility:hidden, opacity:0과 같은 스타일을 하면 스크린
                  리더에서 체크박스의 역할을 인지할 수 없으며 키보드로 옵션을
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
                  체크박스에 키보드 초점이 명확하게 표시되도록 한다.
                </strong>
                <p className="info-txt">
                  사용자 에이전트에서 제공되는 기본 체크박스가 아니라 커스텀
                  디자인을 사용하는 경우 키보드 초점이 시각적으로 표시되도록
                  스타일을 제공해야 한다. 체크박스 요소를 시각적으로 숨기는
                  경우, 시각적으로 표시되고 있는 체크박스 양식과 숨겨진 요소의
                  크기와 위치를 일치시켜 포커스링이 적절하게 표시되도록 구현해야
                  한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동</li>
                  <li>WCAG 2.1 Focus Visible (AA)</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>체크박스에 접근 가능한 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더 사용자가 체크박스의 용도를 확인할 수 있도록
                  &lt;label&gt;, title, aria-label, aria-labelledby 중 1가지
                  방식을 이용하여 레이블을 제공해야 한다. 이때, 가능하면
                  &lt;label&gt;을 이용하여 사용자가 레이블을 클릭하였을 때에도
                  값을 선택할 수 있도록 구현하는 것이 좋다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  스크린 리더에서 그룹 레이블과 체크박스 그룹의 관계를 확인할 수
                  있도록 한다.
                </strong>
                <p className="info-txt">
                  &lt;fieldset&gt;, &lt;legend&gt;를 사용하여 스크린 리더
                  사용자에게 체크박스 그룹에서 값을 선택하는 목적을 보다
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
            <h4 className="g-heading-s">옵션 탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 옵션 탐색에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Tab, Shift + Tab 로 구성되어있음
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
                      모든 체크박스는 Tab, Shift + Tab 키를 눌렀을 때 접근할 수
                      있어야 한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">옵션 선택 및 선택 해제</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 옵션 선택 및 선택 해제에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 Click,
                  Space 로 구성되어있음
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
                      사용자는 체크박스 양식 또는 체크박스 레이블을 눌러 옵션을
                      선택하거나 선택 해제할 수 있다. 일반적으로 체크박스 양식은
                      조작하기에 크기가 충분하지 않으므로 레이블로 상호작용이
                      확장될 수 있도록 구현해야 한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space</th>
                    <td>
                      체크박스 양식에 초점이 있는 상태에서 Space 키를 누르면
                      값이 선택된다.
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
                    <input type="checkbox" name="chk_1" id="chk_1" />
                    <label htmlFor="chk_1">기본</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="chk_1" id="chk_2" checked />
                    <label htmlFor="chk_2">선택됨</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="chk_1" id="chk_3" disabled />
                    <label htmlFor="chk_3">비활성화</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="chk_1"
                      id="chk_4"
                      disabled
                      checked
                    />
                    <label htmlFor="chk_4">선택된 비활성화</label>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader06_02_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse06_02_01"
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
              <div className="g-example ex-full">
                <div className="chk-area">
                  <div className="form-check sm">
                    <input type="checkbox" id="chk_1-1a" />
                    <label htmlFor="chk_1-1a">사이즈 : sm</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="chk_1-2a" />
                    <label htmlFor="chk_1-2a">사이즈 : md</label>
                  </div>
                  <div className="form-check lg">
                    <input type="checkbox" id="chk_1-3a" />
                    <label htmlFor="chk_1-3a">사이즈 : lg</label>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedTwo ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_02" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedTwo ? "active" : ""
                      }`}
                      onClick={handleClickTwo}
                      aria-controls="accordionCollapse06_02_02"
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
                            type="checkbox"
                            name="save_id"
                            id="chk_01"
                            disabled
                          />
                          <label htmlFor="chk_01">
                            <p className="tit">장애아동수당</p>
                            <p className="conts-desc">
                              장애로 인하여 생활이 어려운 장애아동이 보다 편안한
                              생활을 할 수 있도록 지원합니다.
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <a href="#" className="btn sm btn-txt ico-arr">
                          자세히보기
                        </a>
                      </div>
                    </li>
                    <li className="checked">
                      <div className="form-group chk-area chk-column">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="save_id"
                            id="chk_02"
                            checked
                          />
                          <label htmlFor="chk_02">
                            <p className="tit">
                              청소년 발달장애인 방과후활동서비스
                            </p>
                            <p className="conts-desc">
                              만 6세 이상~만 18세 미만의 청소년이 방과후에도
                              돌봄을 지원받을 수 있도록 방과후활동 이용권을
                              지급합니다.
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <a href="#" className="btn sm btn-txt ico-arr">
                          자세히보기
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="form-group chk-area chk-column">
                        <div className="form-check">
                          <input type="checkbox" name="save_id" id="chk_03" />
                          <label htmlFor="chk_03">
                            <p className="tit">
                              아동발달지원계좌(디딤씨앗통장)지원
                            </p>
                            <p className="conts-desc">
                              취약계층 아동의 사회진출 시
                              학자금･취업･창업･주거마련 등에 소요되는 초기비용
                              마련을 위한 자산형성을 지원합니다.
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <a href="#" className="btn sm btn-txt ico-arr">
                          자세히보기
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedThree ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_03" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedThree ? "active" : ""
                      }`}
                      onClick={handleClickThree}
                      aria-controls="accordionCollapse06_02_03"
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
            <h4 className="g-heading-s">Switch</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <div className="form-switch">
                  <input type="checkbox" id="switch" />
                  <i></i>
                  <label htmlFor="switch">switch : default</label>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="switch_checked" checked />
                  <i></i>
                  <label htmlFor="switch_checked">switch : checked</label>
                </div>
                <div className="form-switch">
                  <input type="checkbox" id="switch_disabled_1" disabled />
                  <i></i>
                  <label htmlFor="switch_disabled_1">switch : disabled</label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedFour ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_04" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedFour ? "active" : ""
                      }`}
                      onClick={handleClickFour}
                      aria-controls="accordionCollapse06_02_04"
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
            <h4 className="g-heading-s">Switch - 사이즈 별</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <div className="form-switch">
                  <input type="checkbox" id="switch_lg_1" />
                  <i></i>
                  <label htmlFor="switch_lg_1">switch size : lg</label>
                </div>

                <div className="form-switch md">
                  <input type="checkbox" id="switch_lg_md" />
                  <i></i>
                  <label htmlFor="switch_lg_md">switch size : md</label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedFive ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_05" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedFive ? "active" : ""
                      }`}
                      onClick={handleClickFive}
                      aria-controls="accordionCollapse06_02_05"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeFive />
                </div>
              </div>
            </div>
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">Chips</h4>
            <div className="g-example-wrap">
              <div className="g-example flex ex-full">
                <div className="form-chip">
                  <input type="checkbox" className="checkbox" id="chk_chip_1" />
                  <label className="form-chip-outline" htmlFor="chk_chip_1">
                    chip 상태 : default
                  </label>
                </div>
                <div className="form-chip">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="chk_chip_2"
                    checked
                  />
                  <label className="form-chip-outline" htmlFor="chk_chip_2">
                    chip 상태 : checked
                  </label>
                </div>
                <div className="form-chip">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="chk_chip_3"
                    disabled
                  />
                  <label className="form-chip-outline" htmlFor="chk_chip_3">
                    chip 상태 : disabled
                  </label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedSix ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_06" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedSix ? "active" : ""
                      }`}
                      onClick={handleClickSix}
                      aria-controls="accordionCollapse06_02_06"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeSix />
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
                    type="checkbox"
                    className="checkbox"
                    id="chk_chip_lg_1"
                  />
                  <label className="form-chip-outline" htmlFor="chk_chip_lg_1">
                    chip size : lg
                  </label>
                </div>
                <div className="form-chip md">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="chk_chip_md_1"
                  />
                  <label className="form-chip-outline" htmlFor="chk_chip_md_1">
                    chip size : md
                  </label>
                </div>
                <div className="form-chip sm">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="chk_chip_sm_1"
                  />
                  <label className="form-chip-outline" htmlFor="chk_chip_sm_1">
                    chip size : sm
                  </label>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedSeven ? "active" : ""}`}
                >
                  <h2 id="accordionHeader06_02_07" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedSeven ? "active" : ""
                      }`}
                      onClick={handleClickSeven}
                      aria-controls="accordionCollapse06_02_07"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeSeven />
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

export default Gcontent_Checkbox;
