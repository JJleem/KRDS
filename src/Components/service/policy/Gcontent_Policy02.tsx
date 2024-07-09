import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Policy02 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>정책 정보 확인</em>
          </span>
          <strong>정책 탐색</strong>
        </h2>
        <p className="g-desc">
          정책 정보 확인은 디지털 서비스에 개제된 정부/기관의 행동 방침, 계획,
          법률에 관한 정보를 사용자가 확인하는 과업이다.
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>필터링·정렬 컨트롤: </strong>신청 서비스 목록을
                필터링·정렬하는 데 사용되는 컨트롤
              </li>
              <li>
                <span className="num">2. </span>
                <strong>페이지네이션: </strong>신청 서비스 목록을 탐색하는 데
                사용되는 컨트롤
              </li>
              <li>
                <span className="num">3. </span>
                <strong>항목: </strong>정보를 식별하기 위한 콘텐츠 집합으로 개별
                항목에 대해 실행할 기능 관련 버튼, 상세 정보를 확인할 수 있는
                탐색 링크가 포함될 수 있음 <br />
                <strong>a. 제목: </strong>서비스명을 보여주는 텍스트. 상세
                화면으로 이동하기 위한 링크로 사용됨 <br />
                <strong>b. 미리보기/요약: </strong>서비스에 대한 기본적인 정보를
                요약하여 보여주는 텍스트 <br />
                <strong>c. 꺾쇠/화살표: </strong>제목이 링크로 작동함을 안내하는
                시각적 단서 <br />
                <strong>d. 배지: </strong>서비스의 이용 가능 상태에 대한 메타
                데이터를 표시하여 다음 중 하나의 상태를 가질 수 있음 <br />
                <strong>e. 메타 데이터: </strong>신청 서비스에 부여된 여러
                데이터 속성(예 - 분야, 연령, 소득 등)을 표시하는 텍스트 <br />
                <strong>f. 저장 컨트롤: </strong>관심 있는 신청 정보를 모아보기
                위해 개인화된 기록을 저장하는 데 사용되는 컨트롤
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
                  모든 정책을 하나의 목록에서 탐색할 수 있는 수단을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  분류별 정책을 개별 목록으로만 제공하게 되면 사용자는 다양한
                  조건에 따라 정책을 탐색할 수 없어 필요한 정책 정보를 발견하는
                  데 어려움을 겪게 된다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_02_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  필터링 또는 검색 기능을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  목록에 필터링 또는 검색 기능을 제공하여 사용자가 여러 분류
                  체계에 해당하는 정책을 조회하는 과정을 통해 빠르게 원하는
                  정책을 찾을 수 있도록 한다.
                </p>
              </li>
              <li>
                <strong>
                  정책의 대상/분야 등의 분류 체계를 표시한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  제공 유형, 지원 주기 등 정책의 분류 체계를 배지와 기타 메타
                  데이터로 제공하여 사용자가 참고할 수 있도록 해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_02_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>새로운 정책 및 자료를 명확하게 구분한다.</strong>
                <p className="info-txt">
                  새로 시행되는 정책이나 중요 정책에 "신규", "중요"와 같은 메타
                  데이터를 배지로 제공함으로써 사용자가 시의성 있는 정책 정보를
                  탐색할 수 있도록 도와야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_02_05.png"
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
                  공유/저장 컨트롤과 액션 버튼에 명확한 접근 가능한 이름을
                  제공한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 컨트롤 요소를 단위로 탐색을 시도하는
                  경우, 목록에 동일한 레이블을 가진 컨트롤 요소가 다수
                  제공되었을 때 각 컨트롤 요소를 통해 기능을 실행하는 대상
                  정보를 명확하게 파악하기 어려울 수 있다. 각 컨트롤 요소에
                  title 속성 또는 aria-describedby 속성을 활용하여 접근 가능한
                  이름이 변별될 수 있도록 해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                  <li>WCAG 2.1 Label in Name (A)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">컴포넌트</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">구조화 목록</span>
              <span className="btn-chip-outline">페이지네이션</span>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">목록 탐색</span>
              <span className="btn-chip-outline">필터링·정렬</span>
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
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">정책정보</td>
                      <td>목록</td>
                      <td className="file">
                        <Link
                          to="/service/policy_02"
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

export default Gcontent_Policy02;
