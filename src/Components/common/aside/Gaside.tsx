import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toggleState } from "../../../atom/Atom";
import { useRecoilState } from "recoil";

const Gaside = () => {
  const location = useLocation();

  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const TogglehandleClick = () => {
    setClickedToggle(!clickedToggle);
  };

  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? -1 : index);
  };
  useEffect(() => {
    if (location.pathname === "/guideline") {
      setClickedIndex(0);
    } else if (location.pathname === "/foundation") {
      setClickedIndex(1);
    } else if (location.pathname === "/styleguide") {
      setClickedIndex(2);
    } else if (location.pathname === "/component") {
      setClickedIndex(3);
    } else if (location.pathname === "/global") {
      setClickedIndex(4);
    } else if (location.pathname === "/service") {
      setClickedIndex(5);
    }
  }, [location.pathname]);

  return (
    <div
      className={
        clickedToggle
          ? " g-aside includeJsGuide active"
          : "g-aside includeJsGuide"
      }
      // style={{ display: location.pathname === "/" ? "none" : "block" }}
    >
      <div className="inner">
        <div className="lnb">
          <ul className="depth1">
            <li
              className={clickedIndex === 0 ? "active" : ""}
              onClick={() => handleClick(0)}
            >
              <button type="button" className="btn-menu-toggle">
                소개
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 0 ? "active" : ""}>
                  <Link to="/guideline">개요</Link>
                </li>
                <li>
                  <Link to="/guideline/guideline_02">가이드라인의 구성</Link>
                </li>
                <li>
                  <Link to="/guideline/guideline_03">
                    가이드라인의 활용 방법
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={clickedIndex === 1 ? "active" : ""}
              onClick={() => handleClick(1)}
            >
              <button type="button" className="btn-menu-toggle">
                디자인 원칙
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 1 ? "active" : ""}>
                  <Link to="/">사용자 중심의 서비스</Link>
                </li>
                <li>
                  <Link to="/">모든 사용자를 포용하는 서비스</Link>
                </li>
                <li>
                  <Link to="/">
                    공통된 경험 안에서 개별 특성을 고려한 서비스
                  </Link>
                </li>
                <li>
                  <Link to="/">빠르고 간단한 서비스</Link>
                </li>
                <li>
                  <Link to="/">쉽게 이해 하고 사용할 수 있는 서비스</Link>
                </li>
                <li>
                  <Link to="/">사용자의 다양한 상황을 고려하는 서비스</Link>
                </li>
                <li>
                  <Link to="/">신뢰할 수 있는 서비스</Link>
                </li>
              </ul>
            </li>
            <li
              className={clickedIndex === 2 ? "active" : ""}
              onClick={() => handleClick(2)}
            >
              <button type="button" className="btn-menu-toggle">
                스타일 가이드
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 2 ? "active" : ""}>
                  <Link to="/">적용 범위 및 구분</Link>
                </li>
                <li>
                  <Link to="/">
                    색상<span className="sub">(Color)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    서체<span className="sub">(Typography)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    형태<span className="sub">(Shape)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    배치<span className="sub">(Layout)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    아이콘<span className="sub">(System icon)</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={clickedIndex === 3 ? "active" : ""}
              onClick={() => handleClick(3)}
            >
              <button type="button" className="btn-menu-toggle">
                컴포넌트
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 3 ? "active" : ""}>
                  <Link to="/">아이덴티티</Link>
                  <ul className="depth3">
                    <li className={clickedIndex === 3 ? "active" : ""}>
                      <Link to="/">
                        공식 배너<span className="sub"></span>(Masthead)
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        운영기관 식별자
                        <span className="sub">(Identifier)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        푸터<span className="sub">(Footer)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        헤더<span className="sub">(Header)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">탐색</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">
                        건너 뛰기 링크<span className="sub">(Skip link)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        메인 메뉴
                        <span className="sub">(Main menu)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        브레드크럼<span className="sub">(Breadcrumb)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        사이드 메뉴
                        <span className="sub">(Side navigation)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        콘텐츠 내 탐색
                        <span className="sub">(In-page navigation)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        페이지네이션<span className="sub">(Pagination)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">레이아웃 및 표현</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">
                        구조화 목록
                        <span className="sub">(Structured list)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        긴급 공지
                        <span className="sub">(Critical alerts)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        달력<span className="sub">(Calendar)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        디스클로저
                        <span className="sub">(Disclosure)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        모달
                        <span className="sub">(Modal)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        배지<span className="sub">(Badge)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        아코디언<span className="sub">(Accordion)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        이미지<span className="sub">(Image)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        캐러셀<span className="sub">(Carousel)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        탭<span className="sub">(Tab)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        표<span className="sub">(Table)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={clickedIndex === 4 ? "active" : ""}
              onClick={() => handleClick(4)}
            >
              <button type="button" className="btn-menu-toggle">
                기본 패턴
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 4 ? "active" : ""}>
                  <Link to="/">개인 식별 정보 입력</Link>
                </li>
                <li>
                  <Link to="/">도움</Link>
                </li>
                <li>
                  <Link to="/">동의</Link>
                </li>
                <li>
                  <Link to="/">목록 탐색</Link>
                </li>
                <li>
                  <Link to="/">사용자 피드백</Link>
                </li>
                <li>
                  <Link to="/">상세 정보 확인</Link>
                </li>
                <li>
                  <Link to="/">오류</Link>
                </li>
                <li>
                  <Link to="/">입력폼</Link>
                </li>
                <li>
                  <Link to="/">첨부 파일</Link>
                </li>
                <li>
                  <Link to="/">필터링·정렬</Link>
                </li>
                <li>
                  <Link to="/">확인</Link>
                </li>
              </ul>
            </li>
            <li
              className={clickedIndex === 5 ? "active" : ""}
              onClick={() => handleClick(5)}
            >
              <button type="button" className="btn-menu-toggle">
                서비스 패턴
              </button>
              <ul className="depth2">
                <li className={clickedIndex === 5 ? "active" : ""}>
                  <Link to="/">방문</Link>
                  <ul className="depth3">
                    <li className={clickedIndex === 5 ? "active" : ""}>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">방문</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">검색</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">검색 기능 찾기</Link>
                    </li>
                    <li>
                      <Link to="/">검색어 입력</Link>
                    </li>
                    <li>
                      <Link to="/">검색 결과 확인</Link>
                    </li>
                    <li>
                      <Link to="/">상세 검색</Link>
                    </li>
                    <li>
                      <Link to="/">검색 결과 이용</Link>
                    </li>
                    <li>
                      <Link to="/">재검색</Link>
                    </li>
                    <li>
                      <Link to="/">검색 종료</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">로그인</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">로그인 기능 찾기</Link>
                    </li>
                    <li>
                      <Link to="/">로그인 안내</Link>
                    </li>
                    <li>
                      <Link to="/">로그인 방식 확인/선택</Link>
                    </li>
                    <li>
                      <Link to="/">로그인 정보 입력</Link>
                    </li>
                    <li>
                      <Link to="/">로그인 완료</Link>
                    </li>
                    <li>
                      <Link to="/">서비스 이용</Link>
                    </li>
                    <li>
                      <Link to="/">로그아웃</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">신청</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">신청 대상 탐색</Link>
                    </li>
                    <li>
                      <Link to="/">서비스 정보 확인</Link>
                    </li>
                    <li>
                      <Link to="/">유의 사항/자격 확인</Link>
                    </li>
                    <li>
                      <Link to="/">신청서 작성</Link>
                    </li>
                    <li>
                      <Link to="/">확인/확정</Link>
                    </li>
                    <li>
                      <Link to="/">완료</Link>
                    </li>
                    <li>
                      <Link to="/">신청 결과 확인</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">정책정보 확인</Link>
                  <ul className="depth3">
                    <li>
                      <Link to="/">개요</Link>
                    </li>
                    <li>
                      <Link to="/">정책 탐색</Link>
                    </li>
                    <li>
                      <Link to="/">정보 확인</Link>
                    </li>
                    <li>
                      <Link to="/">정책 자료 탐색</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {location.pathname === "/" ? null : (
            <Link to={"/"} className="side-bn">
              정부기관 공식누리집 검색
            </Link>
          )}
          <button
            type="button"
            className="btn btn-ico ico-close"
            onClick={TogglehandleClick}
          >
            <span className="sr-only">전체메뉴 닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gaside;
