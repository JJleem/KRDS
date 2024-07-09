import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";
import Code from "./Code";
import { useState } from "react";
const Gcontent_CoachMark = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            코치마크 <span className="sub">(Coach mark)</span>
          </strong>
        </h2>
        <p className="g-desc">
          코치마크는 사용자에게 새로 도입된 기능을 안내하거나, 여러 단계를 거쳐
          수행해야 하는 복잡한 과업을 사용자가 보다 쉽게 완료할 수 있도록 세부
          수행 단계별로 고맥락적 도움말을 제공하는 컴포넌트이다.
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
                    사용자를 안내하고 플로우 단계의 전체적인 순서를 학습시키기
                    위해 사용하는 경우
                  </strong>
                </li>
                <li>
                  <strong>
                    사용자가 사용 가능한 기능에 대한 개요를 파악할 수 있도록
                    하기 위해 사용하는 경우
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_04_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>스포트라이트: </strong>지시 사항 제공을 위해 주의를
                집중시키고자 하는 사용자 인터페이스 또는 콘텐츠 섹션. 사용자
                인터페이스 또는 콘텐츠 섹션 주변을 둘러싼 외곽선과 애니메이션을
                통해 주목도를 높임
              </li>
              <li>
                <span className="num">2. </span>
                <strong>코치마크 팝오버: </strong> <br />
                <strong>a. 제목: </strong>과업 수행 단계 번호와 과업 명칭
                텍스트를 제공함 <br />
                <strong>b. 지시사항: </strong>과업 수행을 위해 사용자가
                확인하거나 따라야 할 사항을 안내하는 텍스트 <br />
                <strong>c. 단계 식별자: </strong>전체 단계와 현재 수행 중인 단계
                번호를 분수 형식으로 표시함 <br />
                <strong>d. 액션 버튼: </strong> 건너뛰기, 이전, 다음 버튼이
                제공됨
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
                  코치마크는 정보를 제공하고자 하는 요소 주변에 배치한다.
                </strong>
                <p className="info-txt">
                  정보를 제공하고자 하는 사용자 인터페이스 또는 콘텐츠 섹션 옆에
                  배치하여 관련 요소와의 연관성이 명확하게 인지될 수 있도록
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  팝오버 영역이 본문의 중요 콘텐츠를 가리지 않도록 표현한다.
                </strong>
                <p className="info-txt">
                  팝오버 영역이 안내를 제공하고자 하는 본문 콘텐츠 요소를 가리지
                  않도록 적절한 표시 방향을 설정한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>팝오버 영역의 너비를 일관되게 유지한다.</strong>
                <p className="info-txt">
                  코치마크 팝오버 영역의 너비는 최대 지시 사항 텍스트 길이를
                  고려하여 결정한다. 하나의 과업에 대해 제공되는 모든 코치마크
                  팝오버는 동일한 너비를 갖도록 표현해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  코치마크의 제목과 지시 사항은 간결하고 명확하게 작성한다.
                </strong>
                <p className="info-txt">
                  코치마크는 관련 요소에 대한 간결한 설명을 제공하여 사용자의
                  부담을 줄이고 과업의 완수를 격려해야 한다. 가능한 한 제목은
                  1줄을 유지하고 지시 사항은 3줄 이내로 작성한다.
                </p>
              </li>
              <li>
                <strong>지나치게 많은 코치마크를 사용하지 않는다.</strong>
                <p className="info-txt">
                  한 페이지에 4개 이하의 코치마크를 사용하는 것이 가장
                  이상적이며, 최대 15단계를 넘지 않도록 한다. 최적의 코치마크
                  수를 유지하기 위해 각 코치마크가 사용자에게 도움 되는 정보를
                  포함하고 있는지 점검해야 한다. 불필요한 코치마크는 삭제하고
                  가능한 경우 메시지를 합치되, 사용자가 거쳐야 하는 핵심적인
                  과업 단계가 누락되지 않도록 유의한다.
                </p>
              </li>
              <li>
                <strong>
                  코치마크는 전체 과업 플로우를 고려하여 논리적인 순서로
                  제공한다.
                </strong>
                <p className="info-txt">
                  사용자의 실제 이용 플로우를 반영하여 논리적인 순서에 따라
                  단계가 진행될 수 있도록 구성해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  한 화면에 여러 개의 코치마크가 표시되지 않도록 한다.
                </strong>
                <p className="info-txt">
                  여러 개의 코치마크가 동시에 표시되는 것은 코치마크의 제공
                  목적과 이용 흐름에 적합하지 않다.
                </p>
              </li>
              <li>
                <strong>
                  코치마크가 표시된 상태에서 다른 메시지가 표시되지 않도록 한다.
                </strong>
                <p className="info-txt">
                  코치마크가 제공될 때 페이지에 다른 알림이나 배너 등의 레이어가
                  실행되지 않도록 구성하여 사용자가 코치마크에서 안내하고 있는
                  과업에 집중할 수 있도록 한다.
                </p>
              </li>
              <li>
                <strong>지시 사항 내부 링크는 새 창으로 실행한다.</strong>
                <p className="info-txt">
                  지시 사항에 참고 링크가 포함되어 있는 경우에는 항상 새 창으로
                  링크를 실행시켜 사용자의 현재 과업 맥락이 중단되지 않도록
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  모든 단계에서 액션 버튼을 일관성 있는 순서로 배치하고 동일한
                  레이블을 사용한다.
                </strong>
                <p className="info-txt">
                  모든 단계에서 액션 버튼은 왼쪽부터 ’그만보기’, ‘이전’, ‘다음’
                  순서로 제공한다. <br />
                  단일 단계의 코치마크에서 ‘다음’ 버튼의 레이블은 ‘확인’으로
                  사용한다. 여러 단계의 코치마크에서 첫 번째 단계는 ‘이전’
                  버튼을 사용하지 않으며, 마지막 단계에서 ‘다음’ 버튼의 레이블은
                  ‘마치기’로 제공한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_04_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>액션 버튼을 적절한 강조 수준으로 표현한다.</strong>
                <p className="info-txt">
                  ’그만보기’, ‘이전’ 버튼은 텍스트 버튼 스타일을, ‘다음’,
                  ‘마치기’ 버튼은 고스트 버튼 스타일을 사용한다. ‘다음’,
                  ‘마치기’ 버튼은 본문 액션 버튼의 강조 수준보다 낮아야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/component/component_08_04_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자의 특정 행동 이후 다음 단계의 코치마크에 접근 가능한
                  경우, 사용자의 행동 완수 여부를 시스템이 확인하도록 한다.
                </strong>
                <p className="info-txt">
                  코치마크에서 사용자가 지시 사항에 따라 특정 행동을 하도록
                  요구하는 경우, 사용자가 해당 행동을 완수했을 때 자동으로 다음
                  단계의 코치마크로 넘어가도록 한다. 사용자 스스로가 해당 행동을
                  수행하였음을 확인하는 것이 아니라 시스템에서 사용자가 정확한
                  행동을 수행하였는지 확인함으로써 사용자가 부적절하게 다음
                  단계에 접근하는 오류를 방지해야 한다. 이 경우 ‘그만보기’
                  버튼을 제공하는 한, 다음 버튼을 제공하지 않아도 된다.
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
                  모든 화면 크기에서 팝오버 영역이 완전히 표시되는지 확인한다.
                </strong>
                <p className="info-txt">
                  특정 너비에서 코치마크 팝오버 영역이 시각적으로 확인할 수 없는
                  화면 밖의 영역에 배치되지 않는지 확인하여 문제가 발견된 경우
                  적절한 영역으로 배치를 변경해야 한다.
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
                  스포트라이트와 인접 배경 간 명도 대비를 3:1 이상으로 제공한다.
                </strong>
                <p className="info-txt">
                  사용자가 집중해야 할 요소를 명확하게 인지할 수 있도록
                  스포트라이트와 인접 배경의 명도 대비를 3:1 이상으로 제공해야
                  한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 텍스트 콘텐츠의 명도 대비</li>
                  <li>WCAG 2.1 Non-text Contrast (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  코치마크는 사용자가 요청한 경우에만 실행되어야 한다.
                </strong>
                <p className="info-txt">
                  페이지가 로딩되자마자 특정 코치마크가 활성화되는 등 사용자가
                  의도하지 않는 상황에서 자동으로 실행되어서는 안된다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 사용자 요구에 따른 실행</li>
                  <li>WCAG 2.1 On Focus (A)</li>
                  <li>WCAG 2.1 On Input (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  관련 요소와 코치마크 팝오버 콘텐츠를 적절한 순서로 제공한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 코치마크 팝오버 콘텐츠에 논리적인 순서로
                  접근할 수 있도록 관련 있는 요소의 바로 다음 요소로 제공해야
                  한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 콘텐츠의 선형화</li>
                  <li>WCAG 2.1 Meaningful Sequence (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">상호작용 가이드라인</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">팝오버 내부 콘텐츠 탐색</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 팝오버 내부 콘텐츠 탐색에 대한 표로
                  구분/설명으로 구성되어있으며 구분 항목은 Tab 로 구성되어있음
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
                      코치마크 팝오버가 활성화된 상태에서 내부 컨트롤 요소를
                      순차적으로 탐색한다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">코치마크 비활성화</h4>

            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  상호작용 가이드라인 코치마크 비활성화에 대한 표로 이동에 대한
                  표로 구분/설명으로 구성되어있으며 구분 항목은 Click, Enter,
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
                      그만보기 버튼을 Click 하면 코치마크 팝오버가 숨겨진다.{" "}
                      <br />
                      키보드 초점은 따라하기 패널에서 따라하기를 실행하는
                      버튼으로 이동한다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Enter, Space</th>
                    <td>
                      그만보기 버튼이 초점을 가진 상태에서 Enter 또는 Space 키를
                      누르면 코치마크 팝오버가 숨겨진다. <br />
                      키보드 초점은 따라하기 패널에서 따라하기를 실행하는
                      버튼으로 이동한다.
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
              <div className="g-example ex-full" style={{ padding: "20px" }}>
                <div className="txt-box bg-white coach-highligt">
                  <div className="coach-balloon">
                    <h5 className="sr-only">따라하기 가이드</h5>
                    <h6 className="coach-tit">1단계 : 이사 전 살던 곳</h6>
                    <p className="desc">
                      이사 전에 살던 곳의 주소를 선택 후 ‘주소 조회'를 해주세요
                    </p>
                    <div className="coach-controls">
                      <div className="num">
                        <span className="sr-only">현재 단계</span>
                        <strong>1</strong>
                        <span className="sr-only">총 단계</span>
                        <span>4</span>
                      </div>
                      <div className="btn-wrap">
                        <button type="button" className="btn sm btn-txt">
                          <span>그만보기</span>
                        </button>
                        <button type="button" className="btn sm tertiary">
                          <span>다음으로</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <h4 className="box-tit1">이사 전 살던 곳</h4>
                  <div className="box-cnt">
                    <div className="box-sec">
                      <h5 className="box-tit2">
                        이사 전에 살던 곳 주소(전출지)
                      </h5>
                      <div className="form-group">
                        <div className="form-conts">
                          <div className="input-group m-column">
                            <select className="form-select" title="시 선택">
                              <option value="">시 선택</option>
                              <option value="">서울특별시</option>
                            </select>
                            <select className="form-select" title="구 선택">
                              <option value="">구 선택</option>
                              <option value="">성동구</option>
                            </select>
                            <button type="button" className="btn secondary">
                              주소 조회
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="form-addr-result"
                        id="sch-result-addr"
                        style={{ display: "none" }}
                      >
                        <ul className="info-ul">
                          <li>
                            <span className="key">기본주소</span>
                            <span className="value">
                              서울특별시 성동구 아차산로17길 49, 성수 생각공장
                              데시앙플렉스
                            </span>
                          </li>
                          <li>
                            <span className="key">상세주소</span>
                            <span className="value">1609, 1610호</span>
                          </li>
                        </ul>
                        <ul className="info-ul">
                          <li>
                            <span className="key">
                              관할 읍·면사무소/동 주민센터
                            </span>
                            <span className="value">화양제1동</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader08_04_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse08_04_01"
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
            <div className="g-cont-in">
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "25%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hr">
                      <td className="name">코치마크</td>
                      <td>단계적 실습패널-선택 단계</td>
                      <td className="file">
                        <Link
                          to="/component/help/coachmark"
                          className="btn sm btn-txt link text-primary"
                        >
                          [코치마크]
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>단계적 실습패널-1단계</td>
                      <td className="file">
                        <Link
                          to="/component/help/coachmark"
                          className="btn sm btn-txt link text-primary"
                        >
                          [코치마크]
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>단계적 실습패널-2단계</td>
                      <td className="file">
                        <Link
                          to="/component/help/coachmark"
                          className="btn sm btn-txt link text-primary"
                        >
                          [코치마크]
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>단계적 실습패널-3단계</td>
                      <td className="file">
                        <Link
                          to="/component/help/coachmark"
                          className="btn sm btn-txt link text-primary"
                        >
                          [코치마크]
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>단계적 실습패널-4단계</td>
                      <td className="file">
                        <Link
                          to="/component/help/coachmark"
                          className="btn sm btn-txt link text-primary"
                        >
                          [코치마크]
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent_CoachMark;
