import React from "react";
import { Link } from "react-router-dom";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Policy04 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>정책 정보 확인</em>
          </span>
          <strong>정책 자료 탐색</strong>
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_04_01.png"
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
                <strong>a. 제목: </strong>자료명을 보여주는 텍스트. 상세
                화면으로 이동하기 위한 링크로 사용됨 <br />
                <strong>b. 미리보기/요약: </strong>자료에 기본적인 정보를
                요약하여 보여주는 텍스트 <br />
                <strong>c. 꺾쇠/화살표: </strong>헤딩이 링크로 작동함을 안내하는
                시각적 단서 <br />
                <strong>d. 배지: </strong>자료의 주요 분류 체계를 나타내는 메타
                데이터 <br />
                <strong>e. 메타 데이터: </strong>배지 외에 항목에 부여된 여러
                데이터 속성을 표시하는 텍스트
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
                  필터링 또는 검색 기능을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 주로 찾는 자료의 특성을 고려하여 목록에 필터링, 정렬
                  방식, 상세 검색(기간, 자료 유형 등) 기능을 제공하여 사용자가
                  여러 분류 체계에 해당하는 정보를 효과적으로 조회할 수 있도록
                  만든다.
                </p>
              </li>
              <li>
                <strong>
                  새로운 자료, 변경이 있는 자료를 명확하게 구분한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  새로 등록된 정책 자료나 중요 자료에 "신규", "중요"와 같은 메타
                  데이터를 배지로 제공함으로써 사용자가 시의성 있는 정책 정보
                  자료를 탐색할 수 있도록 도와야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  정책 관련 간행물의 발행 주기에 대한 정보를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  정기적으로 정책 동향을 확인하고자 하는 사용자를 고려하여
                  간행물 자료의 발행 주기 정보를 본문의 부제목이나 별도 안내
                  영역에 제공해야 한다. 발행 주기가 일시적으로 변경되거나 발행이
                  일시적·영구적으로 중단되었다면 이러한 상황에 대한 정보도
                  반드시 제공되어야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_04_03.png"
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
            <h4 className="g-heading-s">컴포넌트</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">배지</span>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">목록 탐색</span>
              <span className="btn-chip-outline">첨부파일</span>
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
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">정책정보</td>
                      <td>정책목록</td>
                      <td className="file">
                        <Link
                          to="/service/policy_04"
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

export default Gcontent_Policy04;
