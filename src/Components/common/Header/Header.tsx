import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toggleState, pathState } from "../../../atom/Atom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);

  const handleClick = () => {
    setClickedToggle(!clickedToggle);
  };

  return (
    <div id="g-header" className="includeJsGuide">
      <div className="inner">
        <h1 className="logo">
          <Link to="/">KRDS</Link>
        </h1>
        <nav className="gnb">
          <ul>
            <li
              className={
                location.pathname.startsWith("/guideline")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/guideline">소개</Link>
            </li>
            <li
              className={
                location.pathname.startsWith("/foundation")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/foundation">디자인 원칙</Link>
            </li>
            <li
              className={
                location.pathname.startsWith("/styleguide")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/styleguide">스타일 가이드</Link>
            </li>
            <li
              className={
                location.pathname.startsWith("/component")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/component/identity">컴포넌트</Link>
            </li>
            <li
              className={
                location.pathname.startsWith("/global") ? "active" : undefined
              }
            >
              <Link to="/global">기본 패턴</Link>
            </li>
            <li
              className={
                location.pathname.startsWith("/service") ? "active" : undefined
              }
            >
              <Link to="/service">서비스 패턴</Link>
            </li>
          </ul>
        </nav>
        <button type="button" className="mob-menu" onClick={handleClick}>
          <span className="sr-only">전체메뉴</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
