import React, { useState } from "react";
import db from "../data/db.json";
import { Helmet } from "react-helmet";
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div id="g-container">
      <Helmet defaultTitle="KRDS" />
      <div className="g-aside includeJsGuide">
        <div className="inner">
          <div className="lnb">
            <ul className="depth1">
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  소개
                </button>
                <ul className="depth2">
                  <li>
                    <a href="/">개요</a>
                  </li>
                  <li>
                    <a href="/">가이드라인의 구성</a>
                  </li>
                  <li>
                    <a href="/">가이드라인의 활용 방법</a>
                  </li>
                </ul>
              </li>
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  디자인 원칙
                </button>
                <ul className="depth2">
                  <li>
                    <a href="/">사용자 중심의 서비스</a>
                  </li>
                  <li>
                    <a href="/">모든 사용자를 포용하는 서비스</a>
                  </li>
                  <li>
                    <a href="/">공통된 경험 안에서 개별 특성을 고려한 서비스</a>
                  </li>
                  <li>
                    <a href="/">빠르고 간단한 서비스</a>
                  </li>
                  <li>
                    <a href="/">쉽게 이해 하고 사용할 수 있는 서비스</a>
                  </li>
                  <li>
                    <a href="/">사용자의 다양한 상황을 고려하는 서비스</a>
                  </li>
                  <li>
                    <a href="/">신뢰할 수 있는 서비스</a>
                  </li>
                </ul>
              </li>
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  스타일 가이드
                </button>
                <ul className="depth2">
                  <li>
                    <a href="/">적용 범위 및 구분</a>
                  </li>
                  <li>
                    <a href="/">
                      색상<span className="sub">(Color)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      서체<span className="sub">(Typography)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      형태<span className="sub">(Shape)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      배치<span className="sub">(Layout)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      아이콘<span className="sub">(System icon)</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  컴포넌트
                </button>
                <ul className="depth2">
                  <li>
                    <a href="/">아이덴티티</a>
                    <ul className="depth3">
                      <li>
                        <a href="/">
                          공식 배너<span className="sub"></span>(Masthead)
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          운영기관 식별자
                          <span className="sub">(Identifier)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          푸터<span className="sub">(Footer)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          헤더<span className="sub">(Header)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">탐색</a>
                    <ul className="depth3">
                      <li>
                        <a href="/">
                          건너 뛰기 링크<span className="sub">(Skip link)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          메인 메뉴
                          <span className="sub">(Main menu)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          브레드크럼<span className="sub">(Breadcrumb)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          사이드 메뉴
                          <span className="sub">(Side navigation)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          콘텐츠 내 탐색
                          <span className="sub">(In-page navigation)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          페이지네이션<span className="sub">(Pagination)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">레이아웃 및 표현</a>
                    <ul className="depth3">
                      <li>
                        <a href="/">
                          구조화 목록
                          <span className="sub">(Structured list)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          긴급 공지
                          <span className="sub">(Critical alerts)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          달력<span className="sub">(Calendar)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          디스클로저
                          <span className="sub">(Disclosure)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          모달
                          <span className="sub">(Modal)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          배지<span className="sub">(Badge)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          아코디언<span className="sub">(Accordion)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          이미지<span className="sub">(Image)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          캐러셀<span className="sub">(Carousel)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          탭<span className="sub">(Tab)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          표<span className="sub">(Table)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  스타일 가이드
                </button>
                <ul className="depth2">
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
              <li
                className={`${isClicked ? "active" : ""}`}
                onClick={handleClick}
              >
                <button type="button" className="btn-menu-toggle">
                  스타일 가이드
                </button>
                <ul className="depth2">
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {db.main.map((db) => (
        <div key={db.id}>
          <img src={db.img} alt="d" />
          <div>{db.title}</div>
          <div>{db.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
