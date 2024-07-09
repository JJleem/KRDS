import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Request03 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>서비스 정보 확인</strong>
        </h2>
        <p className="g-desc">
          신청은 사용자가 서비스 제공 기관에 요구 사항을 알리기 위해 서식을
          작성하는 과업으로 관련 법률에 명시된 종류의 민원 외에 사용자가 특정한
          내용을 요청하는 모든 행동을 포함한다.
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>본문 제목으로 신청 서비스명이 텍스트로
                제공됨
              </li>
              <li>
                <span className="num">2. </span>
                <strong>요약 정보: </strong>신청 서비스의 특징이나 목적을
                요약하여 설명하는 2~3줄의 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>개요 정보: </strong>신청 서비스의 핵심 정보에 대한 개요
                목록
              </li>
              <li>
                <span className="num">4. </span>
                <strong>상세 정보: </strong>신청 서비스 상세 정보를 전달하기
                위한 콘텐츠 섹션
              </li>
              <li>
                <span className="num">5. </span>
                <strong>부가 정보: </strong>서비스나 신청 과정 진입 전에 반드시
                확인해야 할 정보는 아니지만 서비스에 대한 이해를 돕기 위해
                제공되는 콘텐츠 섹션
              </li>
              <li>
                <span className="num">6. </span>
                <strong>콘텐츠 변경 이력: </strong>정보의 업로드일, 변경일,
                변경된 내용에 대한 로그 기록
              </li>
              <li>
                <span className="num">7. </span>
                <strong>콘텐츠 내 탐색(in-page navigation): </strong>본문의
                콘텐츠 섹션의 구조를 파악하고 원하는 섹션으로 이동할 수 있도록
                도와주는 탐색 수단
              </li>
              <li>
                <span className="num">8. </span>
                <strong>액션 버튼: </strong>신청 단계로 이동하거나 신청할 수
                있는 외부 서비스 채널로 이동할 수 있는 링크
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
                  본문 콘텐츠의 제목을 신청 서비스명으로 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  정확히 어떤 항목에 대한 상세 정보인지 사용자가 명확하게 파악할
                  수 있도록 신청 서비스명을 본문 콘텐츠의 제목으로 제공하고
                  본문에서 가장 강조된 형태로 표현해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  상세 정보 콘텐츠는 간결하며 이해하기 쉽게 작성한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  가능한 한 모든 사용자가 이해하기 쉬운 단어를 사용하고 문장의
                  구조를 단순화하여 정보를 제공해야 한다. 신청 서비스의 특성으로
                  인해 불가피하게 전문 용어, 외국어 등이 사용되어야 한다면 도움
                  관련 컴포넌트를 활용하여 설명을 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  상세 정보는 정확하고 최신화된 상태로 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  모든 상세 정보 텍스트에는 오탈자가 없도록 하고 공식적인 용어와
                  명칭을 사용해야 한다. 또한 정보에 변경이 필요한 경우 다른
                  채널보다 우선적으로 내용을 최신화하여 서비스에 대한 신뢰를
                  확보해야 한다. <br />
                  정보의 정확도와 최신화에 각별히 유의해야 하는 정보의 유형은
                  다음 목록과 같다. 이 중 신청 기간, 상태, 지원 금액, 문의처와
                  관련된 정보는 신청 과업 자체의 목표 완수에 필수적이며 잘못
                  제공되었을 때 치명적인 결과로 이어질 수 있음을 유념해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>신청 서비스에 대한 상세 정보</li>
                  <li>문의처</li>
                  <li>신청 서식</li>
                  <li>관련 정책, 법령</li>
                  <li>관련 서비스 채널 정보</li>
                </ul>
              </li>
              <li>
                <strong>
                  서비스를 신청할 수 있는 모든 채널과 제약 사항에 대한 정보를
                  제공한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  방문/대면, 전화, 우편, 온라인 등 서비스를 신청할 수 있는 모든
                  채널에 대한 정보를 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  온라인으로 신청할 수 없는 상황에 대해 명확하게 인지 가능하도록
                  표현한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  만약 이용기기, 사용자의 상황, 신청 서비스의 특성에 따라 신청
                  과정에 제약이 발생할 수 있거나 일부 기능만을 사용할 수 있다면
                  사용자가 신청을 시도하기 전에 명확하게 인지할 수 있도록
                  표현해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  사용자가 신청 과업을 완료하는 데 필요한 모든 서식과 서류에
                  대해 안내하고 빠르게 접근할 수 있는 수단을 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  각종 증빙서류, 전자 문서로 대체할 수 없는 서류 등 사용자가
                  신청 과정에서 제출해야 하는 모든 서류를 사전에 안내하여 신청
                  과정에 진입한 이후 사용자의 과업이 중단되지 않도록 한다.
                  사용자가 추가적으로 정보를 탐색하지 않도록 문서 양식은 직접
                  다운로드할 수 있게 제공하고, 증빙서류는 서류 종류에 따라 세부
                  정보를 확인할 수 있는 외부 서비스 또는 온라인 신청을 지원하는
                  서비스 링크를 통해 빠르게 접근할 수 있도록 한다.
                </p>
              </li>
              <li>
                <strong>
                  신청 과정과 처리 절차에 대한 정보를 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  신청 업무에 대한 사용자의 이해를 돕고 상세 정보에 기반하여
                  신청에 필요한 정보를 준비하고 계획할 수 있도록 신청 과정에
                  처리 절차에 대한 정보를 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  일반적으로 신청 과정에 소요되는 기간 정보를 절차별로 안내한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  각 신청 과정에 소요되는 기간 정보를 제공하여, 신청을
                  시도하고자 하는 사용자는 사전에 정보를 예측할 수 있도록 하고
                  신청을 완료한 사용자는 진행 단계와 상태에 대해 가늠할 수
                  있도록 한다.
                </p>
              </li>
              <li>
                <strong>
                  사용자에게 도움을 줄 수 있는 다양한 부가 정보를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  상세 정보에서 이해가 가지 않는 부분, 부족한 내용에 대해
                  사용자가 직접 문제를 해결할 수 있는 방안을 제시한다.
                </p>
                <ul className="info-list dash">
                  <li>서비스에 대한 문의처: 전화, 이메일, 상담 챗봇 등</li>
                  <li>관련된 서비스 링크 목록</li>
                  <li>다른 사용자가 함께 이용한 서비스 링크 목록</li>
                  <li>자주 하는 질문 및 답변 등</li>
                </ul>
              </li>
              <li>
                <strong>
                  기본 정보는 한 화면에 확인 가능하도록 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  기본 정보 섹션을 탭이나 아코디언으로 제공하지 않아야 한다.
                  탭과 아코디언은 각 패널 내부 정보를 확인하는 데 부가적인
                  행동이 필요하며 중요한 정보를 놓치게 되는 사용자의 실수를
                  유발할 수 있다.
                </p>

                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  기본 정보는 첫 번째 탭에서 확인 가능하도록 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  단일 화면에서 콘텐츠를 소구하기에 콘텐츠 내용이 지나치게
                  복잡하거나 콘텐츠 섹션 간 성격이 달라 탭 레이아웃을 사용하는
                  경우, 모든 신청 서비스에 대한 기본 정보는 첫 번째 탭에
                  제공되어야 한다.
                </p>
              </li>
              <li>
                <strong>
                  부가 정보는 사용자가 필요에 따라 상세 내용을 확인할 수 있게
                  제공하는 방안을 고려한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  모든 부가 정보를 노출시지키 않고 각 항목의 콘텐츠를 일부만
                  표시하고 숨긴 다음 해당 정보가 필요한 사용자가 영역을 확장하여
                  내용을 확인할 수 있게 제공할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_05.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  모든 링크는 실행하였을 때, 링크 레이블에 명시된 적절한
                  화면으로 이동해야 한다{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  링크의 목적지를 부적절하게 설정하면 사용자는 예측하지 않은
                  화면으로 이동하여 당황할 수 있고 도착한 화면이나 웹사이트에서
                  원하는 정보를 찾기 위해 추가적인 정보 탐색을 시도해야 한다.{" "}
                  <br />
                  ’신청하기’ 링크를 클릭하면 또 다른 대상 선택 화면 대신 유의
                  사항 및 자격 확인 또는 신청서 작성 양식으로 연결되어 사용자가
                  의도한 행동을 수행할 수 있게 설계해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  목록 이동 버튼을 누르거나 사용자 에이전트에서 뒤로가기 동작을
                  실행하였을 때 사용자의 탐색 맥락이 유지되어야 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  예를 들어, 사용자가 3번째 목록에 있는 항목을 눌러 서비스 정보
                  확인 화면으로 진입했다면 돌아가기 동작을 수행하여 시스템이
                  응답하기 직전의 맥락이 유지되어야 사용자는 추가적인 정보를
                  계속 탐색할 수 있다. 사용자가 적용한 필터링·정렬 옵션도 그대로
                  유지되어야 하는데, 만약 이러한 맥락이 변경된다면 사용자는 상세
                  정보를 확인할 때마다 탐색 중인 목록의 페이지 번호, 항목의
                  위치, 적용한 필터링·정렬 옵션을 기억했다 다시 적용하고 목록을
                  탐색해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_03_06.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">상세 정보 확인</span>
              <span className="btn-chip-outline">첨부파일</span>
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
            <div className="g-cont-in">
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">3Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">서비스 신청</td>
                      <td>상세</td>
                      <td>일반형</td>
                      <td className="file">
                        <Link
                          to="/service/request_03"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>탭형</td>
                      <td className="file">
                        <Link
                          to="/service/request_03"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
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
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Request03;
