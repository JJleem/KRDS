import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent03 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>기본 패턴</span>
          <strong>동의</strong>
        </h2>
        <p className="g-desc">
          동의는 웹사이트의 이용 조건 및 절차 등을 명시한 내용을 읽고 동의
          여부나 안내 사항의 확인 여부를 확인하는 데 사용되는 패턴이다. 대개
          동의가 필요한 약관은 일반적으로 잘 사용되지 않는 용어로 작성되며 양이
          매우 방대하므로 사용자의 이해를 도울 수 있도록 요소들을 알기 쉽게
          구조화해야 한다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_03_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>일괄 동의 옵션</strong> <br />
                <strong>a. 체크박스: </strong>동의 목록의 전체 항목의 동의 옵션
                선택 상태를 토글하는 데 사용됨
                <br />
                <strong>b. 설명: </strong>동의하는 항목 전체에 대한 정보와 선택
                동의 항목에 대한 설명이 제공됨
              </li>
              <li>
                <span className="num">2. </span>
                <strong>목록</strong> <br />
                <strong>a. 컨테이너: </strong>항목을 다른 항목과 구분하는 시각적
                구분자 <br />
                <strong>b. 제목: </strong>동의 목록의 각 항목 제목으로 본문에
                제공되고 있는 콘텐츠의 제목에 해당하는 텍스트 <br />
                <strong>c. 본문: </strong> 약관 등에 대한 상세 설명 <br />
                <strong>d. 동의 옵션: </strong>항목에 대한 동의 여부를 선택하기
                위한 라디오 버튼 또는 체크박스
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>동의하지 않음 옵션을 제공한다.</strong>
                <p className="info-txt">
                  대안을 선택할 수 있는 기회를 제공받은 것으로 인해, 사용자는
                  약관에 동의하는 행동이 더욱 의미 있다고 느끼게 된다.
                </p>
              </li>
              <li>
                <strong>
                  동의함/동의하지 않음 옵션은 구분하기 쉽게 표현한다.
                </strong>
                <p className="info-txt">
                  선택 옵션이 다른 요소들과 잘 구분되지 않으면, 사용자는 동의
                  여부 선택 옵션을 인지하지 못해, 선택 과정 없이 다음 단계로
                  넘어가려는 시도를 하게 되고 결국 오류가 발생할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  필수 항목과 선택 항목 정보를 제공하고 명확하게 구분될 수
                  있도록 표현한다.
                </strong>
                <p className="info-txt">
                  사용자가 동의하지 않아도 서비스를 이용하는 데 문제가 없는
                  선택적 동의 항목과 필수 동의 항목은 명확하게 구분되어야 한다.
                  동의 항목의 제목에 ‘필수’ ,’선택’ 텍스트를 표시하고 필수
                  항목은 동의 항목 목록의 상단에 그루핑하여 배치한다.
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
                  키보드를 이용하여 약관 내용을 확인할 수 있도록 제공한다.
                </strong>
                <p className="info-txt">
                  약관 내용 영역에 생성된 스크롤은 키보드를 이용하여 조작할 수
                  있도록 제공하여, 키보드 사용자가 스크롤 하단에 숨겨진 내용을
                  확인할 수 있어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                </ul>
              </li>
              <li>
                <strong>약관 내용을 적절하게 구조화하여 제공한다.</strong>
                <p className="info-txt">
                  웹 문서에서 약관 내용을 제목, 문단 등으로 적절히 구조화하여
                  제공하면 보조 기기 사용자가 콘텐츠를 탐색하고 이해하기
                  쉬워진다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>동의함/동의하지 않음 옵션에 설명을 제공한다.</strong>
                <p className="info-txt">
                  동의함, 동의하지 않음 라디오 버튼 양식의 레이블은 양식
                  오른쪽에 배치한다. 동의 항목이 여러 개 제공되는 상황을
                  고려하여 스크린 리더 사용자가 각 라디오 버튼이 어떤 항목에
                  대한 동의 옵션인지 명확하게 확인할 수 있도록 aria-describedby
                  속성을 이용하여 상응하는 동의 항목의 제목과 연결한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
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
            <h4 className="g-heading-s">목록 탐색</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 목록 탐색에 대한 표로 구분/설명으로
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
                    <th scope="row">Tab</th>
                    <td>
                      목록 내 다음 인터페이스 요소로 키보드 초점이 이동하고
                      초점을 받은 요소에 키보드 포커스링이 표시된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Shift + Tab</th>
                    <td>
                      목록 내 이전 인터페이스 요소로 키보드 초점이 이동하고
                      초점을 받은 요소에 키보드 포커스링이 표시된다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">동의 옵션 선택</h4>
            <div className="g-conts-area">
              <h5 className="g-heading-xs">일괄 선택</h5>
              <p className="info-txt">
                개별 선택 항목 중 단 하나라도 '동의 안 함' 옵션이 선택되어
                있다면 일괄 선택 체크박스는 선택 해제 상태가 유지되어야 한다.
              </p>
              {/* table list */}
              <div className="tbl-wrap">
                <table className="tbl col data">
                  <caption>
                    상호작용 가이드라인 동의 옵션 선택 일괄 선택에 대한 표로
                    구분/설명으로 구성되어있으며 구분 항목은 Click, Space 로
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
                        일괄 선택 체크박스를 Click 하여 값이 선택되면 모든 동의
                        옵션의 ‘동의함’ 값이 선택된다. 체크박스를 Click 하여
                        값의 선택이 해제되면서 모든 동의 옵션의 ‘동의 안 함’
                        값이 선택된다. <br />
                        초점은 체크박스에 유지되어야 한다.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Space</th>
                      <td>
                        일괄 선택 체크박스가 초점을 가진 상태에서 Space 키에
                        대한 Keyup 이벤트가 발생하면 체크박스가 선택 상태로
                        전환되면서 모든 동의 옵션의 ‘동의함’ 값이 선택된다. 이
                        상태에서 다시 체크박스에 동일한 이벤트가 발생하면 값의
                        선택이 해제되면서 모든 동의 옵션의 ‘동의 안 함’ 값이
                        선택된다. 초점은 체크박스에 유지되어야 한다.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* //table list */}
            </div>
            <div className="g-conts-area">
              <h5 className="g-heading-xs">개별 선택</h5>
              <p className="info-txt">
                라디오 버튼과 체크박스 컴포넌트의 가이드라인을 따른다.
              </p>
            </div>
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
                {/* contents */}
                <div className="conts-area">
                  {/* 약관 전체 동의 */}
                  <div className="terms-agree-all">
                    <div className="form-check">
                      <input type="checkbox" id="check-agree-all" />
                      <label htmlFor="check-agree-all">모두 동의합니다.</label>
                    </div>
                    <p className="conts-desc">
                      민감정보 수집이용, 개인정보의 수집 및 이용, 온라인신청
                      서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두
                      동의합니다
                      <br className="m-hide" />각 사항에 대한 동의 여부를
                      개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한
                      동의를 거부하여도 서비스를 이용하실 수 있습니다.
                    </p>
                  </div>
                  {/* //약관 전체 동의 */}

                  {/* 약관동의 선택 */}
                  <div className="txt-box bg-white mgt0">
                    <ul className="terms-agree-ul">
                      <li>
                        <h4 className="agree-tit">
                          [필수] 민감정보 수집이용{" "}
                          <button type="button" className="btn secondary xsm">
                            약관읽기
                          </button>
                        </h4>
                        <div className="agree-box">
                          <span className="txt">
                            민감정보 수집 및 이용에 대한 안내 사항을 읽고
                            동의합니다.
                          </span>
                          <div className="chk-area">
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo1"
                                id="terms_rdo1-1"
                              />
                              <label htmlFor="terms_rdo1-1">동의안함</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo1"
                                id="terms_rdo1-2"
                              />
                              <label htmlFor="terms_rdo1-2">동의함</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h4 className="agree-tit">
                          [필수] 개인정보의 수집 및 이용
                          <button type="button" className="btn secondary xsm">
                            약관읽기
                          </button>
                        </h4>
                        <div className="agree-box">
                          <span className="txt">
                            개인정보 수집 및 이용에 대한 약관을 읽고 동의합니다.
                          </span>
                          <div className="chk-area">
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo2"
                                id="terms_rdo2-1"
                              />
                              <label htmlFor="terms_rdo2-1">동의안함</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo2"
                                id="terms_rdo2-2"
                              />
                              <label htmlFor="terms_rdo2-2">동의함</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h4 className="agree-tit">
                          [필수] 온라인신청 서비스 정책
                          <button type="button" className="btn secondary xsm">
                            약관읽기
                          </button>
                        </h4>
                        <div className="agree-box">
                          <span className="txt">
                            온라인신청 서비스 정책에 대한 동의서를 읽고
                            동의합니다.
                          </span>
                          <div className="chk-area">
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo3"
                                id="terms_rdo3-1"
                              />
                              <label htmlFor="terms_rdo3-1">동의안함</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                name="terms_rdo3"
                                id="terms_rdo3-2"
                              />
                              <label htmlFor="terms_rdo3-2">동의함</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h4 className="tit">
                          [선택] 고유식별정보 수집 및 이용
                        </h4>
                        <div>
                          <button type="button" className="btn secondary xsm">
                            약관읽기
                          </button>
                        </div>
                        <div className="agree-box">
                          <span className="txt">
                            고유식별정보 수집 및 이용에 대한 안내 사항을 읽고
                            이해했습니다.
                          </span>
                          <div className="chk-area">
                            <div className="form-check">
                              <input type="checkbox" id="terms_check" />
                              <label htmlFor="terms_check">확인함</label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* //약관동의 선택 */}
                </div>
                {/* //contents */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader03_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse03_01_01"
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
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent03;
