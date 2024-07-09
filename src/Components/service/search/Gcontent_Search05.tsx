import React from "react";
import { Link } from "react-router-dom";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Search05 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>상세 검색</strong>
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
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 검색</h4>
            <p className="info-txt">
              기본 정렬, 필터 컨트롤만을 사용한 검색으로, 필터/정렬 컨트롤은
              화면 너비가 허용하는 한 목록 상단에 막대 형태로 제공하여 모든
              컨트롤이 시각적으로 드러나 있어야 한다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">복합 검색</h4>
            <p className="info-txt">
              기본 검색에 비해 복잡한 검색을 수행하기 위해 기본 정렬, 필터
              컨트롤에 더 많은 유형과 속성의 필터를 제공한다. 세부 필터 유형과
              수에 따라 목록 상단에 배치되는 막대나 사이드 패널에 제공한다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">고급 검색</h4>
            <p className="info-txt">
              여러 개의 키워드를 조합하거나 검색 조건을 다중으로 설정할 수 있는
              유형이다. 사용자가 검색 조건을 설정하는 행동에 집중할 필요가 있는
              경우, 검색 조건에 대한 부가적 설명이 필요한 경우, 데이터 조회에 긴
              시간이 소요되는 경우에 사용하기 적합하다. <br />
              고급 검색은 복합 검색과 다르게 세부 검색 조건을 모달이나 별도
              화면에서 설정한다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">유형 선택 방법</h4>
            <div className="g-cont-in">
              {/* table list */}
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <caption>
                    유형 선택 방법에 대한 표로 이동에 대한 표로 구분/기본
                    검색/복합 검색/고급 검색 구성되어있으며 구분 항목은 검색
                    범위, 메타 데이터 복잡성 , 검색 결과 정확도, 사용할 필터
                    유형 로 구성되어있음
                  </caption>
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">구분</th>
                      <th scope="col">기본 검색</th>
                      <th scope="col">복합 검색</th>
                      <th scope="col">고급 검색</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">검색 범위</th>
                      <td>
                        웹사이트 또는 애플리케이션 전체 <br />
                        소규모 웹사이트, 단일 화면 서비스, 특정 정보 목록, 표
                      </td>
                      <td>웹사이트 또는 애플리케이션 전체</td>
                      <td>
                        웹사이트 또는 애플리케이션 전체 <br />
                        아카이브와 같은 대량의 정보
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">메타 데이터 복잡성</th>
                      <td>
                        메타 데이터 유형의 수와 사용자가 필요로 하는 검색 주제의
                        수가 적음
                      </td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">검색 결과 정확도</th>
                      <td>
                        사용자가 결과 목록 1~2페이지 내에서 원하는 결과를 발견할
                        수 있음
                      </td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">사용할 필터 유형</th>
                      <td>-</td>
                      <td>-</td>
                      <td>쿼리 연산자가 필요한 텍스트 필터를 사용해야 함</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* //table list */}
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_01.png"
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
              <li>
                <span className="num">3. </span>
                <strong>고급 검색 버튼/링크: </strong> 정렬, 필터 컨트롤에서
                제공되지 않는 보다 복잡한 검색 조건 설정에 접근할 수 있는 수단
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
                  기본 정렬, 필터 컨트롤을 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자가 간단한 정렬, 필터 옵션을 활용하여 결과를 좁힐 수
                  있도록 가장 기본적인 속성에 대한 정렬, 필터 컨트롤을 제공해야
                  한다. 통합검색의 경우, 검색 기간 필터, 기본 정렬 컨트롤을
                  제공한다. <br />각 컨트롤 요소에 기본으로 제공해야 하는 옵션은
                  다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>
                    검색 기간 필터: 1일/일주일/1개월 선택 옵션 및 사용자 정의
                    컨트롤
                  </li>
                  <li>기본 정렬: 정확도/관련도순, 최신순, 인기순</li>
                </ul>
              </li>
              <li>
                <strong>
                  기본 검색에서 정렬, 필터 컨트롤은 일정한 순서로 제공되어야
                  한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  기본 정렬, 필터 컨트롤의 상대적인 배치 순서를 검색 기간 필터,
                  기본 정렬순으로 제공한다. 필요한 경우 필터 컨트롤과 정렬
                  컨트롤 사이에 부가적인 필터/정렬 컨트롤이 제공될 수 있으나
                  필터와 정렬 컨트롤은 군집화되어야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  스코프 필터를 사용하는 경우 결과 페이지 상단에 설정된 범위를
                  명시적으로 표시한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  검색 결과의 제한 사항에 대해 사용자가 명확하게 인지할 수
                  있도록 사용자가 값을 변경하기 전까지는 기본으로 선택된 스코프
                  필터가 유지되도록 하거나 검색 결과 화면의 제목에 설정된 옵션
                  정보를 포함하여 제공할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  정렬, 필터 적용 결과는 가능한 한 사용자가 값을 선택하였을 때
                  적용한다. <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  데이터의 수가 많지 않고 성능에 문제가 없는 경우, 필터의
                  적용/해제를 통해 결과 목록을 비교하여 원하는 결과를 더 빠르게
                  발견할 수 있게 한다.
                </p>
              </li>
              <li>
                <strong>
                  조건이 적용되었음을 확인할 수 있는 명확한 시각적 단서를
                  제공한다. <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  상세 검색 조건이 적용되어 전체 검색 결과 수가 변경되었을 때,
                  상태가 변경된 상황을 사용자가 빠르고 직관적으로 인지할 수
                  있도록 제공해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 3]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_05_03_03.png"
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
                  조건이 적용되었음을 확인할 수 있는 명확한 프로그램적 단서를
                  제공한다.
                </strong>
                <p className="info-txt">
                  전체 검색 결과 수 안내 텍스트에 live-region을 적용하고 값이
                  변경되자마자 해당 정보가 스크린 리더로 전달될 수 있도록
                  aria-live=”polite”를 사용해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Status Messages (AA)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">도움</span>
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
                      <td className="name">통합검색</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/search_05"
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
                          to="/service/search_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name">서비스 신청</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/search_05"
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
                          to="/service/search_05"
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
                          to="/service/search_05"
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

export default Gcontent_Search05;
