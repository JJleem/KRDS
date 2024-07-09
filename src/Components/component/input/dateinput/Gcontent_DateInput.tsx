import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent_DateInput = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            날짜 입력 필드 <span className="sub">(Date input)</span>
          </strong>
        </h2>
        <p className="g-desc">
          날짜 입력 필드는 사용자가 특정 날짜 또는 기간을 입력하거나 선택하는 데
          사용되는 요소이다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합하지 않은 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>
                    특정 날짜로부터의 상대적인 날짜의 입력을 요청할 때
                  </strong>
                  <p className="info-txt">
                    특정 날짜로부터 ‘5일 이내’, ‘1일 후’와 같은 상대적인 날짜의
                    입력이 필요한 경우에는 짧은 텍스트 입력 컴포넌트를 사용하여
                    사용자가 직접 값을 입력하도록 하거나 셀렉트 컴포넌트로 선택
                    가능한 날짜 옵션을 제시해야 한다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">다중 입력 필드</h4>
            <p className="info-txt">
              년, 월, 일 정보를 개별 입력 필드를 통해 입력하는 방식으로 필요한
              날짜 데이터 유형에 따라 년이나 일 입력 필드가 생략될 수 있다.{" "}
              <br />
              대부분의 상황에서 사용할 수 있으나 연속된 입력 필드 간 이동 동작이
              필요하기 때문에 가장 효율성이 낮은 입력 방식이다. 날짜 정보를
              정확하게 입력해야 하거나 문서에 표시된 날짜 형식과 일치하는
              형식으로 작성이 필요한 경우에 사용한다. <br />
              예) 카드 유효기간, 여권 발급 일자, 생년월일
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단일 입력 필드</h4>
            <p className="info-txt">
              하나의 입력 필드에 전체 날짜 데이터를 입력하는 방식으로 다중 입력
              필드에 비해 유연하다. 사용자가 이미 알고 있는 날짜를 입력받는 데
              유용하며, 사용자가 기억하지 못하는 과거나 미래의 날짜를 요청해야
              한다면 날짜 선택기를 함께 제공해야 한다. <br />
              예) 주민등록번호 앞자리, 생년월일
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">범위 입력 필드</h4>
            <p className="info-txt">
              단일 입력 필드를 2개를 사용하여 시작일과 종료일을 입력할 때
              사용한다. 날짜의 범위 정보가 필요한 상황 외에도 사용자가 대략적인
              날짜만 알고 있는 상황에서 유용하다. 단일 입력 필드와 마찬가지로
              사용자가 기억하지 못하는 날짜 범위의 입력을 요청해야 한다면 날짜
              선택기를 함께 제공해야 한다. <br />
              예) 필터링/조회 패턴에서 표시할 날짜 메타 데이터 범위를 설정할 때
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">날짜 선택기가 있는 입력 필드</h4>
            <p className="info-txt">
              단일 입력 필드, 범위 입력 필드는 날짜 선택기와 함께 이용할 수
              있다. 서비스 이용 시점으로부터 멀리 떨어진 과거 날짜나 미래 날짜를
              입력해야 하거나, 요일 정보가 중요한 상황, 인접한 날짜를 비교하여
              선택해야 하는 상황에 사용하기 적합하다. <br />
              예) 예약일, 방문/관람일
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>레이블: </strong>사용자가 어떤 텍스트를 입력해야
                하는지를 안내하는 문구
              </li>
              <li>
                <span className="num">2. </span>
                <strong>입력 필드: </strong>날짜 텍스트가 입력되는 영역으로
                배경과 입력 필드를 구분하여 사용자가 날짜 입력 필드임을 인지할
                수 있게 함
              </li>
              <li>
                <span className="num">3. </span>
                <strong>달력 아이콘 버튼(선택): </strong>날짜 선택을 위한 달력
                컴포넌트 레이어 표시/숨기기에 사용되는 아이콘 버튼
              </li>
              <li>
                <span className="num">4. </span>
                <strong>도움말(선택): </strong>입력 방식에 대한 도움말 또는 오류
                메시지를 제공함
              </li>
              <li>
                <span className="num">5. </span>
                <strong>플레이스홀더(선택): </strong>날짜를 어떤 양식으로
                입력해야 하는지에 대한 힌트 또는 예시를 제공함
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
                  입력 필드에 레이블을 제공하고 어떤 날짜를 입력해야 하는지
                  명확하게 설명한다.
                </strong>
                <p className="info-txt">
                  모든 날짜 입력 필드에는 입력 내용을 적절하게 설명하는 레이블을
                  제공해야 한다. <br />
                  다중 입력 필드에는 ‘년’, ‘월’, ‘일’이라는 레이블을 제공하고
                  입력 필드 상단에 입력이 필요한 날짜에 대한 설명을 제공하면
                  된다.
                </p>
              </li>
              <li>
                <strong>
                  도움말 텍스트를 활용하여 날짜 입력 형식을 안내한다.
                </strong>
                <p className="info-txt">
                  입력 필드 하단의 도움말 텍스트를 사용하여 입력해야 할 날짜의
                  양식을 정확하게 안내해야 한다. 플레이스홀더는 사용자가 입력을
                  시작하면 사라지기 때문에 입력 필드 하단의 도움말 텍스트를
                  사용하는 것이 바람직하다. 플레이스홀더에는 ’YYYY-MM-DD’와 같은
                  형식에 대한 자리 표시자를 제공하고 도움말 텍스트에는 입력
                  자릿수에 대한 안내 문구와 작성 예시를 제공한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  문서에 표시된 날짜를 정확하게 요청할 때 입력 필드의 구성을
                  원본 형식과 일치시킨다.
                </strong>
                <p className="info-txt">
                  여권, 신용카드 유효 기간 등 원본이 존재하는 날짜는 원본의
                  형식과 입력 필드를 일치시켜 사용자가 혼동을 느끼지 않도록 하고
                  필요한 경우 날짜 텍스트를 복사하여 쉽게 붙여넣을 수 있도록
                  한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_03.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_03_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>사용자가 대략적인 날짜를 입력할 수 있도록 한다.</strong>
                <p className="info-txt">
                  사용자가 기억하기 어려운 날짜나 특정일을 지정하기 어려운
                  정보를 요청할 때, 범위로 날짜를 입력할 수 있도록 입력 필드를
                  구성해야 한다. 예를 들어, '여권 분실 일자’는 특정일이 아니라
                  '2023년 12월’과 같이 달을 범위로 입력할 수 있도록 입력 필드를
                  구성할 수 있다. 신청 결과 목록에서 사용자가 신청 일자를
                  기억하지 못하는 상황을 고려하여 범위 입력 필드를 통해 목록
                  조회의 기간을 설정할 수 있도록 구성해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_04.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_09_01_04_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 자주, 반복적으로 입력하는 날짜는 자동 완성될 수
                  있도록 구현한다.
                </strong>
                <p className="info-txt">
                  사용자에게 개인 정보를 입력받는 입력 필드(생년월일 등)에
                  프로그램(웹 브라우저)을 통해 사용자가 기존에 입력한 정보를
                  활용할 수 있는 기술을 적용한다. 이를 통해 정보 입력에 필요한
                  사용자의 인지적, 신체적 노력을 최소화할 수 있다.
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
                  키보드를 이용하여 조회 날짜를 선택하거나 입력할 수 있도록
                  제공한다.
                </strong>
                <p className="info-txt">
                  날짜 선택기를 사용하는 경우에도 입력 필드를 사용 불가나
                  읽기전용 상태로 변경하지 않고 키보드를 이용하여 사용자가 직접
                  날짜를 입력할 수 있도록 한다. 날짜 선택기의 접근성이 보장되어
                  있지 않거나 달력 링크를 탐색하기 어려운 사용자에게는 직접 입력
                  필드가 필요할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>입력 필드에 레이블을 명확하게 지정한다.</strong>
                <p className="info-txt">
                  일, 월, 연도와 같이 날짜 입력 필드의 레이블은 정확한 내용으로
                  제공해야 하며 프로그램적으로 입력 필드와 적절하게 연결되어
                  있어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  날짜 입력 형식이 지정되어 있는 경우 사용자에게 입력 방식을
                  명확하게 안내한다.
                </strong>
                <p className="info-txt">
                  입력 필드 하단의 도움말 텍스트를 사용하여 입력해야 할 날짜의
                  양식을 정확하게 안내한다. 이를 통해 콘텐츠 이해, 정보 입력에
                  어려움을 겪는 사용자가 날짜를 정확하게 입력하는 것을 도울 수
                  있다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Labels or Instructions (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">데이터 입력</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 데이터 입력에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Click, Tab, Shift + Tab 로
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
                      레이블 또는 입력 필드를 Click 하면 입력 필드에 커서가
                      활성화되면서 텍스트를 입력할 수 있게 된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tab, Shift + Tab</th>
                    <td>
                      입력 필드는 사용 불가인 상태를 제외하고 Tab, Shift + Tab
                      키를 눌렀을 때 접근할 수 있어야 한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                {/* 폼그룹 */}
                <div className="form-group">
                  <div className="form-tit">레이블</div>
                  <div className="form-conts">
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
                                  <button
                                    type="button"
                                    className="btn sm active"
                                  >
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
                                  <button
                                    type="button"
                                    className="btn sm active"
                                  >
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
                  <p className="form-hint">도움말</p>
                </div>
                {/* //폼그룹 */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader09_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse09_01_01"
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

export default Gcontent_DateInput;
