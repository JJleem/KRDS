import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Search06 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>검색 결과 이용</strong>
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_06_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>주제 탐색 탭: </strong>별도 필터나 고급 검색 동작 없이
                검색 결과 목록을 검색 주제별로 탐색할 수 있는 수단
              </li>
              <li>
                <span className="num">2. </span>
                <strong>배지(선택): </strong>검색 결과의 주제와 같은 범주 관련
                메타 데이터를 표시하기 위한 문자
              </li>
              <li>
                <span className="num">3. </span>
                <strong>날짜: </strong>결과 정보의 등록 일자 또는 최종 업데이트
                일자
              </li>
              <li>
                <span className="num">4. </span>
                <strong>제목: </strong>결과 정보의 본문 제목, 첨부 파일명,
                메뉴명 등의 메타 정보로 결과 식별에 사용됨
              </li>
              <li>
                <span className="num">5. </span>
                <strong>설명: </strong>결과 정보에 대한 설명
              </li>
              <li>
                <span className="num">6. </span>
                <strong>인덱스: </strong>결과 정보의 정보 구조 위계를 표시함
              </li>
              <li>
                <span className="num">7. </span>
                <strong>URL(선택): </strong>결과 정보가 제공되는 링크 주소로
                결과가 외부 사이트로 연결되는 경우에 표시함
              </li>
              <li>
                <span className="num">8. </span>
                <strong>액션 버튼 또는 링크(선택): </strong>결과 화면으로
                이동하거나 화면 이동 없이 관련 기능을 실행하는 데 이용되는 요소
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
                  사용자가 필요로 하는 주제별로 검색 결과가 제공되도록 설계한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자가 빈번하게 검색하는 주제별로 검색 결과를 구조화하여
                  제공하게 되면 사용자는 원하는 정보에 더 빠르고 정확하게 접근할
                  수 있다. 일반적인 디지털 서비스의 통합 검색에서 제공할 수 있는
                  검색 주제는 다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>메뉴</li>
                  <li>자주 묻는 질문</li>
                  <li>뉴스, 공지, 소식</li>
                  <li>첨부 파일 등 자료</li>
                  <li>정책, 고시, 법령</li>
                  <li>이미지, 동영상 등의 미디어</li>
                  <li>직원</li>
                </ul>
              </li>
              <li>
                <strong>
                  검색 주제 분류는 7개를 초과하지 않도록 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  지나치게 많은 검색 분류는 사용자의 인지적 부담을 증가시키므로
                  주제별 탐색 탭 패널은 최대 7개만 사용한다. 더 많은 분류가
                  필요한 경우 검색 필터나 고급 검색에서 분류를 제공한다.
                </p>
              </li>
              <li>
                <strong>
                  주제별 탐색 탭을 사용하는 경우 전체 목록이 가장 첫 번째 탭으로
                  제공되어야 한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  전체 목록을 제공하지 않으면 검색 결과의 정확도나 관련도에
                  상관없이 고정된 주제별 탭 순서로 정보를 탐색해야 하므로
                  사용자는 원하는 결과에 빠르게 접근할 수 없다.
                </p>
              </li>
              <li>
                <strong>
                  전체 결과 목록은 주제별 섹션 구분 없이 결과의 정확도나 관련도
                  순으로 정렬한다. <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  전체 목록에서 주제별로 모든 섹션을 구분하는 레이아웃은 검색
                  주제가 이미지, 동영상과 같이 텍스트가 아닌 형태이거나,
                  주제별로 독특하게 구성된 레이아웃이 항목을 탐색하는 데 도움이
                  된다는 명확한 근거가 있는 경우에만 사용해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_06_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_06_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  제목과 설명은 명확하고 간결하게 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  제목과 설명은 2줄 이내로 제공하여 사용자가 결과 목록을
                  효율적으로 탐색할 수 있도록 해야 한다. 2줄을 초과하는 텍스트는
                  말줄임표를 사용해 잘라 표현함으로써 상세 화면에서 추가로
                  정보가 제공되고 있음이 드러나야 한다.
                </p>
              </li>
              <li>
                <strong>
                  항목에 검색 결과 범주 정보가 명확하게 드러나도록 표현한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  항목이 검색 주제와 같은 범주 정보로 구분되어 있는 경우
                  직관적으로 인지할 수 있는 방식으로 표현하여 원하는 결과 탐색에
                  걸리는 시간을 최소화해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_06_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  검색어와 일치하는 항목을 강조 표시한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  검색 결과를 표시할 때는 사용자가 입력했던 검색어와 일치하는
                  항목을 강조 표시하여, 인지의 흐름에 단절이 생기지 않도록 해야
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  기본 검색 결과 목록에 표시되는 항목의 수를 10개 이상으로
                  제공한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  한 화면에서 확인할 수 있는 검색 결과를 적절한 수로 제공하여
                  부가적인 탐색 행동 없이 결과 목록을 탐색할 수 있도록 해야
                  한다. 결과 목록에 표시되는 메타 데이터의 수가 적어 항목이
                  간결하거나 검색 대상 데이터 규모가 큰 경우 사용자가 표시할
                  항목 수를 원하는 대로 조정할 수 있도록 옵션을 제공하는 것이
                  좋다.
                </p>
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
              <span className="btn-chip-outline">배지</span>
              <span className="btn-chip-outline">태그</span>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">목록 탐색</span>
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
                          to="/service/search_06"
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
                          to="/service/search_06"
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

export default Gcontent_Search06;
