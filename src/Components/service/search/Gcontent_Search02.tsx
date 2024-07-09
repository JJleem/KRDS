import React from "react";
import { Link } from "react-router-dom";
const Gcontent_Search02 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>검색</em>
          </span>
          <strong>검색 기능 찾기</strong>
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>돋보기 아이콘: </strong>검색을 실행하거나 검색
                레이어/화면을 실행하는 버튼
              </li>
              <li>
                <span className="num">2. </span>
                <strong>레이블: </strong>돋보기 아이콘에 대한 텍스트 레이블로
                돋보기 아이콘과 함께 버튼으로 작동함
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
                  서비스 내 모든 화면에서 통합 검색 기능을 실행할 수 있도록
                  한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  통합 검색 기능을 실행할 수 있는 버튼이나 링크가 메인 화면 또는
                  일부 화면에서만 제공될 경우, 사용자는 통합 검색 기능이
                  제공되지 않는 것으로 오인하여 필요한 정보를 발견하지 못할 수
                  있다. 만일 사용자가 어떤 화면에서 통합 검색 기능을 사용할 수
                  있는지를 기억하고 있는 상황이라고 할지라도 해당 화면으로
                  이동하는 부가적인 행동이 필요하므로 원하는 기능에 빠르게
                  접근할 수 없다.
                </p>
              </li>
              <li>
                <strong>
                  통합 검색 기능 실행 버튼은 모든 화면에서 헤더 우측에 일관성
                  있게 배치한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  통합 검색 기능 실행 버튼은 화면의 오른쪽 상단에 배치하는 것이
                  일반적인 관행이며 사용자는 통합 검색 기능 실행 버튼이 해당
                  위치에 있기를 기대한다. 사용자가 예측할 수 있는 영역에 통합
                  검색 기능을 제공함으로써 어떤 서비스를 이용하든 기능에 빠르게
                  접근할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  통합 검색 기능은 검색어 입력 필드와 돋보기 버튼의 조합 또는
                  돋보기 버튼 형태로 사용한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  통합 검색 기능은 사용자가 쉽게 찾을 수 있도록 직관적인 형태로
                  표현해야 한다. 첫 번째 방법은 돋보기 버튼과 쌍을 이루는 검색어
                  입력 필드를 기본으로 노출시킴으로써 사용자가 검색 기능을
                  빠르게 인지하고 접근할 수 있도록 하는 것이다. 메인 메뉴의 링크
                  개수가 적거나 텍스트가 간결한 경우에 사용하기 적합하다. 두
                  번째 방법은 검색어 입력 필드 없이 돋보기 버튼을 제공하고 실행
                  시 연결되는 별도의 레이어나 페이지에서 검색어를 입력하는
                  것이다. 이때, 검색의 목적에 따라 ‘검색’, ‘통합검색’이라는
                  텍스트 레이블이 반드시 함께 사용되어야 한다. 메인 메뉴의 링크
                  개수가 많거나 검색어를 입력하는 동안에 부가적인 도움말을
                  풍부하게 제공하고자 하는 경우에 사용하기 적합하다.
                </p>

                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_02_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  부분 검색 기능은 콘텐츠 목록의 수준과 맥락을 고려하여 사용자가
                  예측할 수 있는 영역에 배치한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  기본적으로 검색하고자 하는 목록 레이아웃의 오른쪽 상단에
                  제공한다. 보다 복잡한 검색이 필요한 경우에는 목록 상단 전체
                  영역을 활용할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_02_03.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_02_02_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  검색 기능 주변에 불필요한 요소의 배치를 최소화한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  검색어 입력 필드, 돋보기 아이콘 주변에 다른 기능 버튼, 안내
                  배너 등이 제공되는 경우 검색 관련 인터페이스의 현출성이
                  저하되어 인지가 어려울 수 있다.
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
                  돋보기 아이콘은 키보드 및 스크린 리더로 접근 및 조작할 수
                  있도록 한다.
                </strong>
                <p className="info-txt">
                  검색어 입력 필드 없이 단독으로 사용되는 돋보기 아이콘은
                  상호작용이 가능한 요소로 제공해야 한다. 별도의 검색 페이지로
                  이동하지 않는 한 모든 플랫폼에서 버튼 역할을 가지도록
                  구현한다.
                </p>
                <ul className="info-list dash">
                  <li>㏁ KWCAG 2.2 키보드 사용 보장</li>
                  <li>WCAG 2.1 Keyboard (A)</li>
                  <li>WCAG 2.1 No Keyboard Trap (A)</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>돋보기 아이콘에 적절한 이름을 제공한다.</strong>
                <p className="info-txt">
                  시각적으로 확인 가능한 레이블이 없는 돋보기 아이콘 버튼에 대한
                  접근 가능한 이름은 ‘돋보기’가 아니라 ‘검색’ 또는 ‘통합
                  검색’으로 제공하여 스크린 리더 사용자가 용도를 명확하게 이해할
                  수 있어야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
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
              <span className="btn-chip-outline">헤더</span>
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
                    <col style={{ width: "12%" }} />
                    <col style={{ width: "14%" }} />
                    <col style={{ width: "14%" }} />
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
                      <td>리스트-카드형</td>
                      <td>기본타입</td>
                      <td className="file">
                        <Link
                          to="/service/search_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>선택타입</td>
                      <td className="file">
                        <Link
                          to="/service/search_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>리스트- 목록형</td>
                      <td>기본타입</td>
                      <td className="file">
                        <Link
                          to="/service/search_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>선택타입</td>
                      <td className="file">
                        <Link
                          to="/service/search_02"
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

      <button className="btn tertiary sm go-top" type="button">
        TOP
      </button>
    </div>
  );
};

export default Gcontent_Search02;
