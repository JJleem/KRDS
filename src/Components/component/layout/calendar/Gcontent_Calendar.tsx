import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
import CodeTwo from "./CodeTwo";
const Gcontent_Calendar = () => {
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
            달력 <span className="sub">(Calendar)</span>
          </strong>
        </h2>
        <p className="g-desc">
          달력은 날짜와 관련된 정보와 기능을 제공하는 데 사용한다.
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
                    날짜별로 신청 가능한 서비스가 정기적으로 제공되는 경우
                  </strong>
                </li>
                <li>
                  <strong>
                    사용자가 날짜를 입력하는 과정에서 여러 가지 날짜 정보를
                    비교하여 선택해야 하는 경우
                  </strong>
                </li>
                <li>
                  <strong>
                    사용자가 현재와 가까운 날짜 관련 정보를 확인하거나 선택해야
                    하는 경우
                  </strong>
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
                    정기적으로 업데이트되는 정보가 아니거나 한 달에 2개 이하의
                    이벤트만 있는 경우
                  </strong>
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
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>연/월: </strong>달력의 연도, 월 정보 달력 유형에 따라
                연도나 월을 선택하기 위한 컨트롤이 제공될 수 있음
              </li>
              <li>
                <span className="num">2. </span>
                <strong>연/월 탐색 버튼: </strong>이전 또는 다음 연도, 월을
                탐색하기 위한 버튼
              </li>
              <li>
                <span className="num">3. </span>
                <strong>달력 그리드: </strong>요일과 여러 상태의 날짜 정보를
                표시하는 시각적인 그리드
              </li>
              <li>
                <span className="num">4. </span>
                <strong>요일: </strong>한 주의 요일 정보로 시작 요일은
                주사용자의 지역/언어에 따라 달라질 수 있음
              </li>
              <li>
                <span className="num">5. </span>
                <strong>날짜: </strong>가장 기본적인 상태의 날짜 정보로 따라
                버튼으로 사용될 수 있음
              </li>
              <li>
                <span className="num">6. </span>
                <strong>오늘 날짜: </strong>현재 날짜로 다른 상태의 날짜와
                구분하기 위한 별도의 식별자와 함께 사용됨
              </li>
              <li>
                <span className="num">7. </span>
                <strong>선택된 날짜(선택): </strong>사용자가 선택한 날짜로 다른
                상태의 날짜와 구분하기 위한 별도의 식별자와 함께 사용됨
              </li>
              <li>
                <span className="num">8. </span>
                <strong>선택할 수 없는 날짜(선택): </strong>사용자가 선택할 수
                없는 날짜
              </li>
              <li>
                <span className="num">9. </span>
                <strong>활성화되지 않은 날짜: </strong> 이전 달 또는 다음 달에
                속한 날짜로 사용자가 선택할 수 있음
              </li>
              <li>
                <span className="num">10. </span>
                <strong>이벤트(선택): </strong>날짜와 관련하여 사용자에게
                안내하고자 하는 데이터로 텍스트, 식별자, 텍스트와 식별자가
                조합된 형태로 사용할 수 있음
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
                  날짜의 여러 가지 상태, 정보의 범례는 일관성 있게 표현한다.
                </strong>
                <p className="info-txt">
                  달력이 여러 개의 섹션이나 페이지에 반복적으로 사용될 경우
                  날짜의 여러 가지 상태 정보(오늘 날짜, 선택된 날짜, 활성화되지
                  않은 날짜, 선택할 수 없는 날짜), 날짜에 표현된 정보의 범례(예
                  - 휴관일, 공휴일 등)를 시각적, 구조적으로 일관성 있게 표현하여
                  사용자가 학습 없이 효율적으로 콘텐츠를 확인할 수 있도록 해야
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  날짜의 여러 가지 상태 정보가 서로 명확하게 구분되도록
                  표현한다.
                </strong>
                <p className="info-txt">
                  날짜의 상태를 표현하는 경우 여러 가지 상태는 날짜의 텍스트,
                  배경색으로만 구분하지 않고 텍스트 굵기, 밑줄, 배경의 형태,
                  부가적인 식별자를 제공하여 명확하게 구분해야 한다. 오늘 날짜,
                  사용자가 선택한 날짜에는 별도의 텍스트 설명을 제공하여 보다
                  직관적으로 다른 날짜와 구분할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_03_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  이벤트 정보가 복잡한 경우 정보를 손실 없이 확인할 수 있는
                  수단을 제공한다.
                </strong>
                <p className="info-txt">
                  하나의 날짜에 여러 개의 이벤트가 존재하는 경우 이벤트 제목이
                  유사하여 구분이 어려울 수 있으며, 달력과 날짜 영역의 공간적
                  제약으로 인해 복잡한 이벤트 정보는 텍스트가 생략될 수 있다. 이
                  경우, 표나 목록 컴포넌트를 활용한 별도의 이벤트 목록을
                  제공하여 사용자가 정보를 정확하게 인지할 수 있도록 해야 한다.
                  달력의 표시 단위를 월이 아닌 주 또는 일로 변경하여 이벤트 정보
                  표시 영역을 확장하는 방법도 활용할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_04_03_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  달력 그리드에 헤딩(요일) 정보를 반드시 제공한다.
                </strong>
                <p className="info-txt">
                  달력에 헤딩 없이 날짜 정보만 제공하게 되면 콘텐츠가 날짜임을
                  직관적으로 이해하기 어려우며, 한 주의 시작 요일을 명확하게
                  인지하기 어렵다.
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
                <strong>
                  날짜 및 관련 정보의 의미를 색상으로만 구분하지 않는다.
                </strong>
                <p className="info-txt">
                  여러 가지 날짜 및 관련 정보에 대한 의미를 색상 이외의 수단으로
                  구분할 수 있는 시각적 단서를 제공해야 한다. 밑줄 제공, 1px
                  이상의 테두리 차이, 식별자 제공 등의 방법으로 크기나 형태
                  차원에서 정보를 구분하는 방법을 사용할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 색에 무관한 콘텐츠 인식</li>
                  <li>WCAG 2.1 Use of Color (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  날짜 및 관련 정보의 의미를 스크린 리더에서 확인할 수 있도록
                  한다.
                </strong>
                <p className="info-txt">
                  시각적으로 표현된 날짜 관련 여러 가지 상태 정보(오늘 날짜,
                  선택된 날짜, 활성화되지 않은 날짜, 선택할 수 없는 날짜),
                  날짜에 표현된 정보의 범례(예 - 일정 있음, 휴관일, 공휴일 등)에
                  대한 대체 텍스트를 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  달력에서 제공되는 모든 기능을 키보드로 실행할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  달력에서 제공되는 모든 기능은 마우스뿐만 아니라 키보드, 터치
                  인터페이스로 실행할 수 있어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  달력에서 제공되는 모든 기능에 키보드 초점이 명확하게
                  표시되도록 한다.
                </strong>
                <p className="info-txt">
                  달력에서 제공되는 모든 사용자 인터페이스(버튼, 링크)는 초점을
                  받은 상태가 시각적으로 명확하게 구분되어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동과 표시</li>
                  <li>WCAG 2.1 Focus Visible (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">날짜 링크 탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 날짜 링크 탐색에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Tab, Shift + Tab 로 구성되어있음
                </caption>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tab, Shift + Tab</th>
                    <td>달력 내 인터페이스 요소를 순차적으로 탐색한다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기능 실행 또는 이동</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 기능 실행 또는 이동에 대한 표로 이동에
                  대한 표로 구분/설명으로 구성되어있으며 구분 항목은 Click,
                  Enter 로 구성되어있음
                </caption>
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
                      달력 내 액션 버튼의 기능이 실행되거나 링크 목적지로
                      이동한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter</th>
                    <td>
                      달력 내 액션 버튼의 기능이 실행되거나 링크 목적지로
                      이동한다.
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
                <div className="form-group">
                  <div className="form-tit">날짜선택</div>
                  <div className="form-conts datepicker-conts">
                    <div className="datepicker-input">
                      <input
                        type="number"
                        className="form-control datepicker cal"
                        placeholder="YYYY.MM.DD"
                      />
                      <button type="button" className="form-btn-datepicker">
                        <span className="sr-only">달력 열기</span>
                      </button>
                    </div>
                    <div className="datepicker-area">
                      <div
                        className="datepicker-wrap bottom single"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="datepicker-head">
                          <button type="button" className="btn-cal-move prev">
                            <span className="sr-only">이전 달</span>
                          </button>
                          <div className="datepicker-switch-wrap">
                            <button
                              type="button"
                              className="btn-cal-switch year"
                            >
                              2023년
                            </button>
                            <button
                              type="button"
                              className="btn-cal-switch month"
                            >
                              12월
                            </button>
                          </div>
                          <button type="button" className="btn-cal-move next">
                            <span className="sr-only">다음 달</span>
                          </button>
                        </div>
                        <div className="datepicker-body">
                          <div
                            className="datepicker-conts datepicker-tbl-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <table className="datepicker-tbl">
                              <thead>
                                <tr>
                                  <th>Su</th>
                                  <th>Mo</th>
                                  <th>Tu</th>
                                  <th>We</th>
                                  <th>Th</th>
                                  <th>Fr</th>
                                  <th>Sa</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      30
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      2
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      6
                                    </button>
                                  </td>
                                  <td className="period start end">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      7
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      8
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      9
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      10
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      11
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      12
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      13
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      14
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      15
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      16
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      17
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      18
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      19
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      20
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      21
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      22
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      23
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      24
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      25
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      30
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      31
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      2
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      6
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="datepicker-conts datepicker-year-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <ul className="sel year">
                              <li>
                                <button type="button" className="btn sm">
                                  2001
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm active">
                                  2002
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2003
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2004
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2005
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2006
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2007
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2008
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2009
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2010
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2011
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2012
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2013
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2014
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2015
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2016
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2017
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2018
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2019
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2020
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2021
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2022
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2023
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="datepicker-conts datepicker-mon-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <ul className="sel month">
                              <li>
                                <button type="button" className="btn sm">
                                  01월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  02월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  03월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm active">
                                  04월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  05월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  06월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  07월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  08월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  09월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  10월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  11월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  12월
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader04_03_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse04_03_01"
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
            <h4 className="g-heading-s">Date Range</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                <div className="form-group">
                  <div className="form-tit">기간선택</div>
                  <div className="form-conts datepicker-conts">
                    <div className="datepicker-input">
                      <ul className="input-group range set">
                        <li>
                          <input
                            type="number"
                            className="form-control datepicker"
                            placeholder="시작날짜"
                          />
                        </li>
                        <li className="mark">-</li>
                        <li>
                          <input
                            type="number"
                            className="form-control datepicker"
                            placeholder="종료날짜"
                          />
                        </li>
                      </ul>
                      <button type="button" className="form-btn-datepicker">
                        <span className="sr-only">달력 열기</span>
                      </button>
                    </div>

                    <div className="datepicker-area range">
                      <div
                        className="datepicker-wrap bottom"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="datepicker-head">
                          <button type="button" className="btn-cal-move prev">
                            <span className="sr-only">이전 달</span>
                          </button>
                          <div className="datepicker-switch-wrap">
                            <button
                              type="button"
                              className="btn-cal-switch year"
                            >
                              2023년
                            </button>
                            <button
                              type="button"
                              className="btn-cal-switch month"
                            >
                              12월
                            </button>
                          </div>
                          <button type="button" className="btn-cal-move next">
                            <span className="sr-only">다음 달</span>
                          </button>
                        </div>
                        <div className="datepicker-body">
                          <div
                            className="datepicker-conts datepicker-tbl-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <table className="datepicker-tbl">
                              <thead>
                                <tr>
                                  <th>Su</th>
                                  <th>Mo</th>
                                  <th>Tu</th>
                                  <th>We</th>
                                  <th>Th</th>
                                  <th>Fr</th>
                                  <th>Sa</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td className="old">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      30
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      2
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      6
                                    </button>
                                  </td>
                                  <td className="period start">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      7
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      8
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      9
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      10
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      11
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      12
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      13
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      14
                                    </button>
                                  </td>
                                  <td className="period">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      15
                                    </button>
                                  </td>
                                  <td className="period end">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      16
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      17
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      18
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      19
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      20
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      21
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      22
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      23
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      24
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      25
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      30
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      31
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      2
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td className="new">
                                    <button
                                      type="button"
                                      className="btn-set-date"
                                    >
                                      6
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="datepicker-btn-wrap">
                              <button type="button" className="btn tertiary sm">
                                취소
                              </button>
                              <button type="button" className="btn primary sm">
                                확인
                              </button>
                            </div>
                          </div>
                          <div
                            className="datepicker-conts datepicker-year-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <ul className="sel year">
                              <li>
                                <button type="button" className="btn sm">
                                  2001
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm active">
                                  2002
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2003
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2004
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2005
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2006
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2007
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2008
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2009
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2010
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2011
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2012
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2013
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2014
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2015
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2016
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2017
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2018
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2019
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2020
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2021
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2022
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  2023
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="datepicker-conts datepicker-mon-wrap"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <ul className="sel month">
                              <li>
                                <button type="button" className="btn sm">
                                  01월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  02월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  03월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm active">
                                  04월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  05월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  06월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  07월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  08월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  09월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  10월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  11월
                                </button>
                              </li>
                              <li>
                                <button type="button" className="btn sm">
                                  12월
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div
                  className={`accordion-item ${isClickedTwo ? "active" : ""}`}
                >
                  <h2 id="accordionHeader04_03_02" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedTwo ? "active" : ""
                      }`}
                      onClick={handleClickTwo}
                      aria-controls="accordionCollapse04_03_02"
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

export default Gcontent_Calendar;
