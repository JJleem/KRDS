import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Policy03 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>정책 정보 확인</em>
          </span>
          <strong>정보 확인</strong>
        </h2>
        <p className="g-desc">
          정책 정보 확인은 디지털 서비스에 개제된 정부/기관의 행동 방침, 계획,
          법률에 관한 정보를 사용자가 확인하는 과업이다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        {/*<div className="g-conts-area">
      <h3 className="g-heading-m">구조</h3>
      <div className="g-conts-area">
        <div className="g-img-wrap">
          <div><img src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_03_01.png"
              alt=""/></div>
        </div>
        <ol className="info-list ordered fraction">
          <li><span className="num">1. </span><strong>제목: </strong>본문 제목으로 신청 서비스명이 텍스트로 제공됨</li>
          <li><span className="num">2. </span><strong>요약 정보: </strong>신청 서비스의 특징이나 목적을 요약하여 설명하는 2~3줄의
            텍스트</li>
          <li><span className="num">3. </span><strong>개요 정보: </strong>신청 서비스의 핵심 정보에 대한 개요 목록</li>
          <li><span className="num">4. </span><strong>상세 정보: </strong>신청 서비스 상세 정보를 전달하기 위한 콘텐츠 섹션
          </li>
          <li><span className="num">5. </span><strong>부가 정보: </strong>서비스나 신청 과정 진입 전에 반드시 확인해야 할 정보는
            아니지만 서비스에 대한 이해를
            돕기 위해 제공되는 콘텐츠 섹션</li>
          <li><span className="num">6. </span><strong>콘텐츠 변경 이력: </strong>정보의 업로드일, 변경일, 변경된 내용에 대한 로그
            기록</li>
          <li><span className="num">7. </span><strong>콘텐츠 내 탐색: </strong>본문의 콘텐츠 섹션의 구조를 파악하고 원하는 섹션으로
            이동할 수 있도록 도와주는 탐색 수단</li>
          <li><span className="num">8. </span><strong>액션 버튼: </strong>신청 단계로 이동하거나 신청할 수 있는 외부 서비스 채널로
            이동할 수 있는 링크</li>
          <li><span className="num">9. </span><strong>목록 이동 버튼: </strong>신청 대상을 탐색하기 위한 목록으로 이동하기 위한
            링크
          </li>
        </ol>
      </div>

    </div>*/}

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  화면 제목을 정책명으로 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  정확히 어떤 항목에 대한 상세 정보인지 사용자가 명확하게 파악할
                  수 있도록 정책명을 화면 제목으로 제공하고 본문에서 가장 강조된
                  형태로 표현해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  상세 정보 콘텐츠는 간결하며 이해하기 쉽게 작성한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  가능한 한 모든 사용자가 이해하기 쉬운 단어를 사용하고 문장의
                  구조를 단순화하여 정보를 제공해야 한다. 정책의 특성으로 인해
                  불가피하게 전문 용어, 외국어 등이 사용되어야 한다면 도움 관련
                  컴포넌트를 활용하여 설명을 제공해야 한다.
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
                  채널보다 우선적으로 내용을 최신화하여 디지털 정부 서비스에
                  대한 신뢰를 확보해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  내용이 없는 콘텐츠 섹션과 섹션 제목은 표시되지 않도록 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  상세 내용에서 세부 제목은 제공되고 있으나 하위에 아무런 정보가
                  제공되지 않은 채로 비어 있는 영역이 노출되면 사용자는 정보가
                  제대로 작성되지 않은 것으로 오인할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  인포그래픽, 사진, 동영상 등의 콘텐츠를 적절하게 활용한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  시각적 정보를 활용하면 텍스트에만 의존하는 것보다 말하고자
                  하는 바를 효과적으로 전달할 수 있으며 사용자의 흥미를
                  유발한다.
                </p>
              </li>
              <li>
                <strong>
                  사용자에게 도움을 줄 수 있는 다양한 부가 정보를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  정책과 관련하여 사용자가 참고할 수 있는 유용한 부가 정보를
                  충분히 제공하여 사용자가 별도의 메뉴 탐색, 검색을 시도하지
                  않도록 해야 한다. 정책과 관련하여 제공할 수 있는 부가 정보의
                  예시는 다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>
                    정책에 대한 문의처: 담당자 이름과 전화번호 또는 이메일 주소
                  </li>
                  <li>
                    관련 정책 링크 목록, 관련 자료 다운로드 링크, 관련 자료
                    게시판
                  </li>
                  <li>관련 웹사이트 링크, 정책 관련 신청 링크</li>
                </ul>
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
              </li>
              <li>
                <strong>
                  모든 링크는 실행하였을 때, 링크 레이블에 명시된 적절한
                  화면으로 이동해야 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  링크의 목적지를 부적절하게 설정하면 사용자는 예측하지 않은
                  화면으로 이동하여 당황할 수 있고 도착한 페이지/사이트에서
                  원하는 정보를 찾기 위해 추가적인 정보 탐색을 시도해야 한다.
                  정책에 대해 보다 구체적인 정보를 확인할 수 있는 링크를
                  클릭하면 게시판 목록이나 외부 서비스의 메인 화면이아닌 관련
                  상세 화면으로 연결되어 사용자가 의도한 행동을 수행할 수 있게
                  설계한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_03_04.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_03_05.png"
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
                      <th scope="col">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">서비스 신청</td>
                      <td>상세</td>
                      <td>일반형</td>
                      <td className="file">
                        <a
                          href="../../pattern/sample_appl_02.html"
                          target="_blank"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>탭형</td>
                      <td className="file">
                        <Link
                          to="/service/policy_03"
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

export default Gcontent_Policy03;
