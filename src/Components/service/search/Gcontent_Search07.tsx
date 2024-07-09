import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Search07 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>재검색</strong>
        </h2>
        <p className="g-desc">
          검색은 사용자가 큰 데이터 집합에서 원하는 정보를 찾을 수 있도록
          도와주는 기능이다. 사용자가 무엇을 찾고 싶은지 알고 있는 경우에는
          일차적인 정보 탐색 수단으로 사용될 수 있으며, 탐색 수단을 통해 원하는
          콘텐츠를 찾지 못하는 상황에는 특정 정보와 관련된 단서를 제공함으로써
          사용자가 필요한 콘텐츠를 쉽게 찾을 수 있도록 해준다.
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_07_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>정렬 컨트롤: </strong>검색 결과 목록의 순서를 변경하는
                데 사용되는 컨트롤
              </li>
              <li>
                <span className="num">2. </span>
                <strong>필터 컨트롤: </strong>검색 결과 목록을 특정 주제, 범주,
                속성으로 제한하는 데 사용되는 컨트롤
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
                  상세 검색 컨트롤을 숨기지 않는다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  화면 너비로 인해 상세 검색 컨트롤이 모달에서 제공되지 않는 한
                  상세 검색 컨트롤은 사용자가 검색 과정을 반복하는 동안 항상
                  표시되어야 한다. 상세 검색 컨트롤을 숨기면 재검색 과정에서
                  상세 검색 수단을 발견하지 못하거나, 설정한 조건을 기억하지
                  못해 실수할 가능성이 높아진다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_07_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_07_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 설정한 상세 검색 조건을 유지한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자가 의도적으로 설정을 해제하기 전까지 재검색 전 과정 동안
                  상세 검색 조건을 유지하여 사용자가 필요한 맥락 내에서
                  연속적으로 검색을 수행할 수 있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  상세 검색 조건의 적용을 일괄적으로 해제할 수 있는 수단을
                  제공하고 직관적으로 인지할 수 있도록 표현한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  기본 검색 외에 복합 검색, 고급 검색이 사용되는 경우 사용자가
                  여러 개의 범주와 속성별로 조건을 설정할 수 있으므로 재검색
                  과정에서 조건 전체를 변경하고자 하는 경우 일괄 해제 기능을
                  제공하여 사용자의 행동을 단축시켜야 한다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
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
              {/* table */}
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
                      <td className="name">탐색</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/search_07"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td className="file">
                        <Link
                          to="/service/search_07"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>타입2</td>
                      <td className="file">
                        <Link
                          to="/service/search_07"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* //table */}
            </div>
          </div>
        </div>
      </div>
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Search07;
