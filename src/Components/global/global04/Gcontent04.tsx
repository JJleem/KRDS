import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
import { Link } from "react-router-dom";
const Gcontent04 = () => {
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
          <strong>목록 탐색</strong>
        </h2>
        <p className="g-desc">
          목록은 의미적으로 관련 있는 다수의 데이터를 연속적으로 배열한
          색인이다. 사용자는 목록에서 특정한 항목을 찾고 항목과 관련된 기능을
          수행한다. 사용자가 목록에서 원하는 정보를 효과적으로 탐색할 수 있도록
          목록의 항목은 일관성 있는 형식과 배치를 유지하고 논리적 순서에 따라
          배열되어야 한다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">표</h4>
            <p className="info-txt">
              표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로
              사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록
              도와준다.{" "}
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">아코디언</h4>
            <p className="info-txt">
              아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수
              있도록 하는 컴포넌트로 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여
              있는 형태로 표현된다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">구조화 목록</h4>
            <p className="info-txt">
              구조화 목록은 유사하거나 관련된 콘텐츠 집합을 표현하기 위한
              형식으로 목록에 제공된 데이터에 대한 상세 정보 탐색 수단 또는 관련
              기능 실행 수단으로 활용된다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>중요한 항목은 목록의 상단에 배치한다.</strong>
                <p className="info-txt">
                  사용자는 목록의 좌측 상단 영역에 먼저 주의를 기울인다.
                  그러므로 먼저 보여주어야 할 중요한 내용은 좌측 상단에
                  배치한다.
                </p>
              </li>
              <li>
                <strong>
                  항목을 의미 있는 단위로 구분하고 논리적인 순서에 따라
                  정렬한다.
                </strong>
                <p className="info-txt">
                  논리적인 순서에 따라 정렬하면 사용자가 내용을 빠르게 훑어보고
                  쉽게 이해할 수 있다.
                </p>
              </li>
              <li>
                <strong>항목을 명확하게 구분한다.</strong>
                <p className="info-txt">
                  목록을 구성하고 있는 항목들이 서로 명확하게 구분될 수 있도록
                  항목 간에 충분한 간격을 제공해야 한다. 필요한 경우 구분선
                  사용하거나 항목 컨테이너에 외곽선, 배경면을 표현할 수 있으나
                  목록 유형, 데이터 복잡성에 따라 시각적 복잡성을 증가시킬 수
                  있으므로 유의한다.
                </p>
              </li>
              <li>
                <strong>
                  강조를 위한 시각적 표현을 과도하게 사용하지 않는다.
                </strong>
                <p className="info-txt">
                  아이콘, 배지, 태그 등의 컴포넌트를 적절하게 사용하면 사용자의
                  효율적인 정보처리를 도울 수 있지만 지나치면 오히려 주의가
                  분산될 수 있다.
                </p>
              </li>
              <li>
                <strong>긴 목록은 페이지 등으로 단위를 나누어 제공한다.</strong>
                <p className="info-txt">
                  긴 목록은 페이지로 구분하는 등 적절하게 단위를 나누어, 한 번에
                  지나치게 많은 정보를 제공하지 않아야 한다. 긴 페이지를 스크롤
                  하는 것보다 페이지네이션을 이용하여 분할된 페이지를 탐색하는
                  것이 더욱 효과적이다. 페이지네이션이 포함된 긴 목록은
                  사용자들이 다음 행동을 결정하기 위해 각 항목에 제공되는 정보를
                  확인하고 비교할 수 있도록 최소 10개 이상의 항목을 기본으로
                  표시해야 한다.
                </p>
              </li>
              <li>
                <strong>필터링 또는 검색 기능을 제공한다.</strong>
                <p className="info-txt">
                  항목 개수가 많은 경우, 페이지네이션만으로 정보를 탐색하는 데
                  한계가 있으므로 필터링이나 검색 기능을 제공하여 빠른 내용
                  탐색이 가능하도록 만들어야 한다.
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
                  정보 전달을 위해 아이콘 이미지를 사용하는 경우 대체 텍스트를
                  제공한다.
                </strong>
                <p className="info-txt">
                  공지사항, 새 게시글, 공유 등 정보를 표현하기 위해 사용되는
                  아이콘 이미지에는 적절한 텍스트를 제공하여 보조 기술 사용자가
                  이미지의 의미를 이해할 수 있도록 해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  첨부파일 아이콘 이미지에 적절한 대체 텍스트를 제공한다.
                </strong>
                <p className="info-txt">
                  목록에서 직접 다운로드 할 수 있는 첨부파일을 아이콘 이미지로
                  표시한 경우, 아이콘 이미지의 대체 텍스트는 정확한 첨부파일
                  명으로 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  시각적으로 표현된 데이터의 구조 정보가 프로그램적으로
                  전달되도록 한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 목록형 정보임을 인지하고 각 항목이
                  포함하고 있는 세부 정보의 논리적 구성을 이해할 수 있도록 목록
                  관련 컴포넌트 가이드라인을 참조하여 적절한 마크업을 사용한다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
            </ul>
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
                {/* 검색 입력폼 */}
                <div className="search-top-box">
                  <div className="sch-form-wrap">
                    <div className="sch-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="검색어를 입력해주세요"
                      />
                      <button type="button" className="btn btn-ico ico-sch">
                        <span className="sr-only">검색</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-txt sm ico-sch1 ico-before"
                    >
                      고급검색
                    </button>
                  </div>
                </div>
                {/* //검색 입력폼 */}

                {/* 검색 결과 : 리스트 */}
                <ul className="search-list type1">
                  <li className="li">
                    <div className="in">
                      <div className="card-top">
                        <span className="krds-badge">신청중</span>
                        <div className="btn-area">
                          <button
                            type="button"
                            className="btn sm btn-txt ico-share ico-before"
                          >
                            공유하기
                          </button>
                          <button
                            type="button"
                            className="btn sm btn-txt ico-like ico-before"
                          >
                            찜하기
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link to="/global/global_4" className="c-text">
                          <p className="c-tit">
                            <span className="span">
                              산모·신생아 건강관리 지원사업
                            </span>
                          </p>
                          <p className="c-txt">
                            다문화가정의 자녀가 건강한 사회구성원, 글로벌 인재로
                            성장할 수 있도록 체계적인 언어발달을
                            돕습니다.다문화가정의 자녀가 건강한 사회구성원,
                            글로벌 인재로 성장할 수 있도록 체계적인 언어발달을
                            돕습니다.
                          </p>
                          <p className="c-date">
                            <strong className="key">신청 기간</strong>
                            <span className="value">2023.11.01-2024.04.30</span>
                          </p>
                        </Link>
                        <div className="c-btn">
                          <Link
                            to="/global/global_4"
                            className="btn md primary"
                          >
                            신청하기
                          </Link>
                        </div>
                      </div>
                      <div className="card-btm">
                        <span className="tag">청소년</span>
                        <span className="tag">영유아</span>
                      </div>
                    </div>
                  </li>
                  <li className="li">
                    <div className="in">
                      <div className="card-top">
                        <span className="krds-badge">신청중</span>
                        <div className="btn-area">
                          <button
                            type="button"
                            className="btn sm btn-txt ico-share ico-before"
                          >
                            공유하기
                          </button>
                          <button
                            type="button"
                            className="btn sm btn-txt ico-like ico-before"
                          >
                            찜하기
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link to="/global/global_4" className="c-text">
                          <p className="c-tit">
                            <span className="span">
                              저소득층 기저귀·조제분유 지원
                            </span>
                          </p>
                          <p className="c-txt">
                            다문화가정의 자녀가 건강한 사회구성원, 글로벌 인재로
                            성장할 수 있도록 체계적인 언어발달을 돕습니다.
                          </p>
                          <p className="c-date">
                            <strong className="key">신청 기간</strong>
                            <span className="value">2023.11.01-2024.04.30</span>
                          </p>
                        </Link>
                        <div className="c-btn">
                          <Link
                            to="/global/global_4"
                            className="btn md primary"
                          >
                            신청하기
                          </Link>
                        </div>
                      </div>
                      <div className="card-btm">
                        <span className="tag">청소년</span>
                        <span className="tag">영유아</span>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* //검색 결과 : 리스트 */}

                {/* paging : 웹 */}
                <div className="pagination w-page">
                  <Link className="page-navi prev" to="/global/global_4">
                    이전
                  </Link>
                  <div className="page-links">
                    <Link className="page-link" to="/global/global_4">
                      1
                    </Link>
                    <span className="page-link link-dot"></span>
                    <Link className="page-link" to="/global/global_4">
                      6
                    </Link>
                    <Link className="page-link" to="/global/global_4">
                      7
                    </Link>
                    <Link className="page-link active" to="/global/global_4">
                      8
                    </Link>
                    <Link className="page-link" to="/global/global_4">
                      9
                    </Link>
                    <Link className="page-link" to="/global/global_4">
                      10
                    </Link>
                    <Link className="page-link" to="/global/global_4">
                      11
                    </Link>
                    <span className="page-link link-dot"></span>
                    <Link className="page-link" to="/global/global_4">
                      120
                    </Link>
                  </div>
                  <Link className="page-navi next" to="/global/global_4">
                    다음
                  </Link>
                </div>
                {/* //paging : 웹 */}

                {/* paging : 모바일 */}
                <div className="pagination m-page">
                  <div className="page-navis">
                    <Link className="page-navi prev" to="/global/global_4">
                      이전
                    </Link>
                    <Link className="page-navi next" to="/global/global_4">
                      다음
                    </Link>
                  </div>
                  <div className="page-links">
                    <Link className="page-link" to="/global/global_4">
                      1
                    </Link>
                    <span className="page-link link-dot"></span>
                    <Link className="page-link" to="/global/global_4">
                      7
                    </Link>
                    <Link className="page-link active" to="/global/global_4">
                      8
                    </Link>
                    <Link className="page-link" to="/global/global_4">
                      9
                    </Link>
                    <span className="page-link link-dot"></span>
                    <Link className="page-link" to="/global/global_4">
                      120
                    </Link>
                  </div>
                </div>
                {/* //paging : 모바일 */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader04_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse04_01_01"
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

export default Gcontent04;
