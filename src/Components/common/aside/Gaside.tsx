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
    if (location.pathname.startsWith("/guideline")) {
      setClickedIndex(0);
    } else if (location.pathname.startsWith("/foundation")) {
      setClickedIndex(1);
    } else if (location.pathname.startsWith("/styleguide")) {
      setClickedIndex(2);
    } else if (location.pathname.startsWith("/component")) {
      setClickedIndex(3);
    } else if (location.pathname.startsWith("/global")) {
      setClickedIndex(4);
    } else if (location.pathname.startsWith("/service")) {
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
                <li
                  className={location.pathname === "/guideline" ? "active" : ""}
                  onClick={TogglehandleClick}
                >
                  <Link to="/guideline">개요</Link>
                </li>
                <li
                  className={
                    location.pathname === "/guideline/guideline_02"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/guideline/guideline_02">가이드라인의 구성</Link>
                </li>
                <li
                  className={
                    location.pathname === "/guideline/guideline_03"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
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
                <li
                  className={
                    location.pathname === "/foundation" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation">사용자 중심의 서비스</Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_02"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_02">
                    모든 사용자를 포용하는 서비스
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_03"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_03">
                    공통된 경험 안에서 개별 특성을 고려한 서비스
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_04"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_04">
                    빠르고 간단한 서비스
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_05"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_05">
                    쉽게 이해 하고 사용할 수 있는 서비스
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_06"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_06">
                    사용자의 다양한 상황을 고려하는 서비스
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/foundation/foundation_07"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/foundation/foundation_07">
                    신뢰할 수 있는 서비스
                  </Link>
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
                <li
                  className={
                    location.pathname === "/styleguide" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide">적용 범위 및 구분</Link>
                </li>
                <li
                  className={
                    location.pathname === "/styleguide/color" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide/color">
                    색상<span className="sub">(Color)</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/styleguide/typography"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide/typography">
                    서체<span className="sub">(Typography)</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/styleguide/shape" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide/shape">
                    형태<span className="sub">(Shape)</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/styleguide/layout" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide/layout">
                    배치<span className="sub">(Layout)</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/styleguide/systemicon"
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/styleguide/systemicon">
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
                <li
                  className={
                    location.pathname.startsWith("/component/identity")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/component/identity">아이덴티티</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/identity"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/identity">
                        공식 배너<span className="sub">(Masthead)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/identity/identifier"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/identity/identifier">
                        운영기관 식별자
                        <span className="sub">(Identifier)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/identity/footer"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/identity/footer">
                        푸터<span className="sub">(Footer)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/identity/header"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/identity/header">
                        헤더<span className="sub">(Header)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/search")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/component/search">탐색</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/search"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search">
                        건너 뛰기 링크<span className="sub">(Skip link)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/search/mainmenu"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search/mainmenu">
                        메인 메뉴
                        <span className="sub">(Main menu)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/search/breadcrumb"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search/breadcrumb">
                        브레드크럼<span className="sub">(Breadcrumb)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/search/sidenavigation"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search/sidenavigation">
                        사이드 메뉴
                        <span className="sub">(Side navigation)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname ===
                        "/component/search/inpagenavigation"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search/inpagenavigation">
                        콘텐츠 내 탐색
                        <span className="sub">(In-page navigation)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/search/pagination"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/search/pagination">
                        페이지네이션<span className="sub">(Pagination)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/layout")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/layout">레이아웃 및 표현</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/layout/structuredlist"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/structuredlist">
                        구조화 목록
                        <span className="sub">(Structured list)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/criticalalerts"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/criticalalerts">
                        긴급 공지
                        <span className="sub">(Critical alerts)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/calendar"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/calendar">
                        달력<span className="sub">(Calendar)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/disclosure"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/disclosure">
                        디스클로저
                        <span className="sub">(Disclosure)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/modal"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/modal">
                        모달
                        <span className="sub">(Modal)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/badge"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/badge">
                        배지<span className="sub">(Badge)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/accordion"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/accordion">
                        아코디언<span className="sub">(Accordion)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/image"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/image">
                        이미지<span className="sub">(Image)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/carousel"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/carousel">
                        캐러셀<span className="sub">(Carousel)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/tab"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/tab">
                        탭<span className="sub">(Tab)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/layout/table"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/layout/table">
                        표<span className="sub">(Table)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/action")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/action/link">액션</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/action/link"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/action/link">
                        링크
                        <span className="sub">(Link)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/action/button"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/action/button">
                        버튼
                        <span className="sub">(Button)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/select/")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/select/radiobutton">선택</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/select/radiobutton"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/select/radiobutton">
                        라디오 버튼
                        <span className="sub">(Radio button)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/select/checkbox"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/select/checkbox">
                        체크박스
                        <span className="sub">(Checkbox)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/select/select"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/select/select">
                        셀렉트
                        <span className="sub">(Select)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/select/tag"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/select/tag">
                        태그
                        <span className="sub">(Tag)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/feedback")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/feedback/stepindicator">피드백</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname ===
                        "/component/feedback/stepindicator"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/feedback/stepindicator">
                        단계 표시기
                        <span className="sub">(Step indicator)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/feedback/spinner"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/feedback/spinner">
                        스피너
                        <span className="sub">(Spinner)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/help")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/help/helppanel">도움</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/help/helppanel"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/help/helppanel">
                        도움 패널
                        <span className="sub">(Help panel)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/help/tutorialpanel"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/help/tutorialpanel">
                        따라하기 패널
                        <span className="sub">(Tutorial panel)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/help/contextualhelp"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/help/contextualhelp">
                        맥락적 도움말
                        <span className="sub">(Contextual help)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/help/coachmark"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/help/coachmark">
                        코치마크
                        <span className="sub">(Coach mark)</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/component/input")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/component/input/dateinput">입력</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/component/input/dateinput"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/input/dateinput">
                        날짜 입력 필드
                        <span className="sub">(Date input)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/input/textarea"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/input/textarea">
                        텍스트 영역
                        <span className="sub">(Textarea)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/input/textinput"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/input/textinput">
                        텍스트 입력 필드
                        <span className="sub">(Text input)</span>
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/component/input/fileupload"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/component/input/fileupload">
                        파일 업로드
                        <span className="sub">(File upload)</span>
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
                <li
                  className={
                    location.pathname === "/global/global_1" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_1">개인 식별 정보 입력</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_2" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_2">도움</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_3" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_3">동의</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_4" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_4">목록 탐색</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_5" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_5">사용자 피드백</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_6" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_6">상세 정보 확인</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_7" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_7">오류</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_8" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_8">입력폼</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_9" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_9">첨부 파일</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_10" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_10">필터링·정렬</Link>
                </li>
                <li
                  className={
                    location.pathname === "/global/global_11" ? "active" : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/global/global_11">확인</Link>
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
                <li
                  className={
                    location.pathname.startsWith("/service/visit")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/service/visit_01">방문</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/service/visit_01"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/visit_01">개요</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/visit_02"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/visit_02">방문</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/service/search")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/service/search_01">검색</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/service/search_01"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_01">개요</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_02"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_02">검색 기능 찾기</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_03"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_03">검색어 입력</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_04"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_04">검색 결과 확인</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_05"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_05">상세 검색</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_06"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_06">검색 결과 이용</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_07"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_07">재검색</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/search_08"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/search_08">검색 종료</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/service/login")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/service/login_01">로그인</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/service/login_01"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_01">개요</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_02"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_02">로그인 기능 찾기</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_03"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_03">로그인 안내</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_04"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_04">로그인 방식 확인/선택</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_05"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_05">로그인 정보 입력</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_06"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_06">로그인 완료</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_07"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_07">서비스 이용</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/login_08"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/login_08">로그아웃</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/service/request")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/service/request_01">신청</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/service/request_01"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_01">개요</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_02"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_02">신청 대상 탐색</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_03"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_03">서비스 정보 확인</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_04"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_04">유의 사항/자격 확인</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_05"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_05">신청서 작성</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_06"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_06">확인/확정</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_07"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_07">완료</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/request_08"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/request_08">신청 결과 확인</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.startsWith("/service/policy")
                      ? "active"
                      : ""
                  }
                  onClick={TogglehandleClick}
                >
                  <Link to="/service/policy_01">정책정보 확인</Link>
                  <ul className="depth3">
                    <li
                      className={
                        location.pathname === "/service/policy_01"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/policy_01">개요</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/policy_02"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/policy_02">정책 탐색</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/policy_03"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/policy_03">정보 확인</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/service/policy_04"
                          ? "active"
                          : ""
                      }
                      onClick={TogglehandleClick}
                    >
                      <Link to="/service/policy_04">정책 자료 탐색</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {location.pathname === "/" && !clickedToggle ? null : (
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
