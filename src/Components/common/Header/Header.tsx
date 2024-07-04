import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="g-header" className="includeJsGuide">
      <div className="inner">
        <h1 className="logo">
          <Link to="/">KRDS</Link>
        </h1>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="/">소개</Link>
            </li>
            <li>
              <Link to="/">디자인 원칙</Link>
            </li>
            <li>
              <Link to="/">스타일 가이드</Link>
            </li>
            <li>
              <Link to="/">컴포넌트</Link>
            </li>
            <li>
              <Link to="/">기본 패턴</Link>
            </li>
            <li>
              <Link to="/">서비스 패턴</Link>
            </li>
          </ul>
        </nav>
        <button type="button" className="mob-menu"></button>
      </div>
    </div>
  );
};

export default Header;
