import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent05 = () => {
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
          <strong>사용자 피드백</strong>
        </h2>
        <p className="g-desc">
          사용자 피드백은 사용자로부터 특정 페이지나 기능 이용 경험에 대한 평가
          의견, 불편 사항, 제안 사항을 수집하는 데 사용되는 패턴이다. 서비스
          이용 맥락에서 직접적으로 사용자의 의견을 수집할 수 있는 수단이므로
          서비스 운영에 매우 중요한 요소이나, 사용자가 의견을 남기는 것이 의무
          사항이 아니므로 사용자의 과업을 방해하지 않으면서 의견을 남기도록
          유도하는 것이 중요하다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">용례</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">사용하기 적합한 경우</h4>
            <div className="g-conts-wrap">
              <ul className="info-list decimal">
                <li>
                  <strong>
                    페이지별 사용자의 이용 의견을 상시적으로 확인하고자 하는
                    경우
                  </strong>
                </li>
                <li>
                  <strong>
                    새로운 기능이나 정보에 대한 의견을 확인하고자 하는 경우
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
                    서비스 전체에 대한 종합적인 사용자 의견을 수렴하고자 하는
                    경우
                  </strong>
                  <p className="info-txt">
                    다수의 질문으로 구성되어 있고 단계가 필요한 입력폼으로
                    구성되기 때문에 별도의 페이지를 구성하여 의견을 수렴하는
                    것이 적절하다.
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_05_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>사용자에게 의견을 구할 대상을 설명하는
                질문 형식의 간결한 텍스트
              </li>
              <li>
                <span className="num">2. </span>
                <strong>설명(선택): </strong>제목에 대해 부가적으로 설명이
                필요한 경우에 사용하는 선택적 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>평가 </strong> <br />
                <strong>a. 감정 표현: </strong>만족, 불만족 형식으로 사용자의
                감정 정보를 수집함 <br />
                <strong>b. 별점: </strong>1~5점의 점수 체계를 통해 사용자의
                피드백을 정량적으로 수집함
              </li>
              <li>
                <span className="num">4. </span>
                <strong>맞춤 영역(선택) </strong> <br />
                <strong>a. 제목: </strong> 사용자에게 추가적으로 확인하고자 하는
                내용에 대한 간단한 설명 <br />
                <strong>b. 질문: </strong> 1~3개의 추가적인 질문으로 라디오
                버튼, 체크박스, 텍스트 입력 필드와 같은 컴포넌트로 구성됨 <br />
                <strong>c. 액션 버튼: </strong>부가적인 질문에 대해 응답하지
                않기로 선택하거나, 응답 후 최종적으로 피드백을 제출하는 데
                사용되는 버튼 그룹
              </li>
              <li>
                <span className="num">5. </span>
                <strong>완료 메시지: </strong>피드백 제출이 완료되었음을
                사용자에게 알려주는 메시지
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
                  사용자 피드백은 페이지 하단 또는 본문의 사이드 영역에
                  배치한다.
                </strong>
                <p className="info-txt">
                  사용자가 방해 없이 페이지 본문의 정보와 기능을 이용한 후에
                  피드백을 남길 수 있도록 페이지 하단에 배치한다. 만약 본문의
                  너비가 충분하고 화면의 복잡도가 높지 않다면 사용자의 평가를
                  유도하기 위해 사이드 영역에 배치할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  사용자 피드백을 시의적으로 사용하는 경우 사용자의 작업이
                  완료된 후에 유도 메시지를 제공한다.
                </strong>
                <p className="info-txt">
                  새로운 기능이나 정보에 대한 의견을 확인하고자 하는 경우, 웹
                  페이지가 로딩되자마자 사용자 피드백 요소가 강조되어 표현되면
                  사용자에게 방해가 된다. 서비스를 이용하지 않은 상태에서
                  피드백을 제공할 수는 없으므로 의견을 받고자 하는 사용자가
                  정보/기능의 이용을 완료한 후에 사용자 피드백 요소가 출현해야
                  한다.
                </p>
              </li>
              <li>
                <strong>사용자 피드백은 폐쇄형 질문으로 시작한다.</strong>
                <p className="info-txt">
                  사용자가 쉽고 빠르게 사용자 피드백 요소에 접근할 수 있도록
                  선택 가능한 값이 1개로 정해져 있는 폐쇄형 질문을 기본 평가
                  질문으로 제공해야 한다. 사용자가 직접 의견을 작성하도록 하는
                  개방형 질문이 평가의 시작 질문으로 제공되면 사용자는 피드백을
                  남기는 데 많은 노력이 필요하다고 판단하여 의견 남기기를
                  시도하지 않을 수 있다.
                </p>
              </li>
              <li>
                <strong>평가의 선택지를 최소화한다.</strong>
                <p className="info-txt">
                  평가의 선택지 개수가 늘어날수록 사용자가 응답을 선택하는 데
                  걸리는 시간과 함께 의도하지 않은 응답을 선택하는 실수 역시
                  증가한다. 가능한 한 2가지 선택지로 간결하게 구성된 감정 평가
                  방식을 사용하고, 별점을 사용하는 경우에는 선택지가 5개를
                  초과하지 않도록 한다.
                </p>
              </li>
              <li>
                <strong>맞춤 영역의 질문을 간결하게 구성한다.</strong>
                <p className="info-txt">
                  맞춤 영역에 제공되는 추가적인 질문은 최대 3개만 사용한다. 심도
                  깊은 평가나 의견이 필요한 경우 별도 페이지나 채널을 활용해야
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  맞춤 영역의 질문에 대한 응답 방식을 유연하게 구성한다.
                </strong>
                <p className="info-txt">
                  사용자가 서비스 운영자에게 전달하고자 하는 의견을 표현하는 데
                  적합한 질문과 응답 방식을 사용한다. 개방형 질문은 폐쇄형
                  질문에서 미처 표현하지 못한 사용자의 의견을 수집하는 데
                  효과적이다. 그러나 개방형 질문으로 인해 사용자가 부담을 느낄
                  수 있으므로 개방형 질문을 사용하는 경우 가장 마지막 질문으로
                  사용하는 것이 좋다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">플랫폼에 대한 고려 사항</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  화면 너비가 충분하지 않은 경우, 어사이드에 배치된 사용자
                  피드백은 페이지 하단에 배치한다.
                </strong>
                <p className="info-txt">
                  사용자가 방해 없이 페이지 본문의 정보와 기능을 이용한 후에
                  피드백을 남길 수 있도록 사용자 피드백을 버튼으로 축약하여
                  플로팅 시키지 않고 페이지 하단에 배치한다.
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
                <strong>각 입력 필드와 입력폼에 이름을 제공한다.</strong>
                <p className="info-txt">
                  스크린 리더에서 사용자 피드백의 질문을 구성하고 있는 각각의
                  입력 요소의 용도를 이해할 수 있도록 접근 가능한 이름을
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 레이블 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  맞춤 영역, 완료 메시지에 live-region을 적용한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자는 맞춤 영역의 출현이나 피드백 메시지로의
                  전환 상태를 인지하지 못할 수 있으므로 aria-live=”polite”
                  속성을 사용자 피드백 구획에 제공한다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                  <li>WCAG 2.1 Status Messages (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">평가 선택</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 평가 선택에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Click, Enter, Space 로 구성되어있음
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
                      감정 표현이나 별점 버튼을 Click 하였을 때, 맞춤 영역이
                      사용되는 경우 사용자 피드백 컨테이너 높이가 확장되면서
                      하단으로 맞춤 영역이 표시된다. 제춤 영역이 없는 경우
                      평가가 제출되면서 헤딩과 설명은 사라지고 그 자리가 완료
                      메시지로 대체된다
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter, Space</th>
                    <td>
                      감정 표현이나 별점 버튼이 초점을 가진 상태에서 Enter 또는
                      Space 키에 대해 Keyup 이벤트가 발생하였을 때, 맞춤 영역이
                      사용되는 경우 사용자 피드백 컨테이너 높이가 확장되면서
                      하단으로 맞춤 영역이 표시된다. <br />
                      맞춤 영역이 없는 경우 평가가 제출되면서 헤딩과 설명은
                      사라지고 그 자리가 완료 메시지로 대체된다. <br />
                      초점은 사용자가 선택한 평가 버튼에 유지된다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">맞춤 영역의 요소 탐색</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 맞춤 영역의 요소 탐색에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Tab, Shift + Tab 로
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
                      맞춤 영역 내부에 입력 서식 요소, 액션 버튼에 키보드 초점이
                      순차적으로 접근한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">최종 응답 제출</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 최종 응답 제출에 대한 표로 구분/설명으로
                  구성되어있으며 구분 항목은 Click, Space, Enter 로 구성되어있음
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
                      맞춤 영역이 존재하는 경우, 취소 또는 평가완료 버튼을 Click
                      하면 평가 입력폼이 제출 완료되면서 완료 메시지가 제공된다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Space, Enter</th>
                    <td>
                      맞춤 영역이 존재하는 경우, 취소 또는 평가완료 버튼이
                      초점을 가진 상태에서 Enter 또는 Space 키에 대해 Keyup
                      이벤트가 발생하였을 때 평가 입력폼이 제출 완료되면서 완료
                      메시지가 제공된다.
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
                {/* 평가 */}
                <div className="txt-box bg-gray">
                  <div className="assess-question-wrap">
                    <div className="assess-qu">이 페이지에 만족하시나요?</div>
                    <div className="assess-an">
                      <div className="form-chip">
                        <input
                          type="radio"
                          className="radio"
                          name="rdo_chip_size2"
                          id="rdo_chip_lg2-1"
                        />
                        <label
                          className="form-chip-outline"
                          htmlFor="rdo_chip_lg2-1"
                        >
                          네
                        </label>
                      </div>
                      <div className="form-chip">
                        <input
                          type="radio"
                          className="radio"
                          name="rdo_chip_size2"
                          id="rdo_chip_lg2-2"
                        />
                        <label
                          className="form-chip-outline"
                          htmlFor="rdo_chip_lg2-2"
                        >
                          아니오
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="assess-opinion-wrap">
                    <p className="assess-opinion-tit">
                      감사합니다! 이 페이지의 개선을 위해 추가적으로 의견을
                      남기시겠습니까?
                    </p>
                    <ol className="assess-opinion-list">
                      <li className="li">
                        <p className="form-qu">
                          이 페이지의 어떤 점에 만족하셨나요? (선택 입력)
                        </p>
                        <div className="form-group">
                          <div className="form-conts">
                            <div className="chk-area chk-column">
                              <div className="form-check md">
                                <input
                                  type="checkbox"
                                  name="chk1_1"
                                  id="chk1_1"
                                />
                                <label htmlFor="chk1_1">
                                  필요한 정보를 찾음
                                </label>
                              </div>
                              <div className="form-check md">
                                <input
                                  type="checkbox"
                                  name="chk1_1"
                                  id="chk1_2"
                                />
                                <label htmlFor=" chk1_2">
                                  내용이 마음에 듦
                                </label>
                              </div>
                              <div className="form-check md">
                                <input
                                  type="checkbox"
                                  name="chk1_1"
                                  id="chk1_3"
                                />
                                <label htmlFor="chk1_3">
                                  내용을 이해하기 쉬움
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="li">
                        <p className="form-qu">
                          기타 제안 사항이 있다면 작성해주세요. (선택 입력)
                        </p>
                        <div className="form-group full">
                          <div className="form-conts">
                            <div className="textarea-wrap">
                              <textarea
                                name=""
                                id="textareaid"
                                className="form-control"
                                placeholder="내용을 입력해주세요."
                              ></textarea>
                              <p className="textarea-count">
                                <span className="text-primary">22</span>
                                <span className="text-num">/100</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                    <div className="btm-btn-wrap">
                      <button type="button" className="btn secondary md">
                        취소
                      </button>
                      <button type="button" className="btn primary md">
                        평가완료
                      </button>
                    </div>
                  </div>
                </div>
                {/* //평가 */}

                {/* 평가 완메세지 */}
                <div className="assess-end-message">
                  <p className="tit">의견을 남겨주셔서 감사합니다.</p>
                  <p className="txt">
                    보내주신 소중한 의견은 페이지 개선에 도움이 됩니다.
                  </p>
                </div>
                {/* //평가 완메세지 */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader05_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse05_01_01"
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

export default Gcontent05;
