import React from "react";

const Header = () => {
  return (
    <div id="g-header" className="includeJsGuide">
      <div className="inner">
        <h1 className="logo">
          <a href="/">KRDS</a>
        </h1>
        <nav className="gnb">
          <ul>
            <li>
              <a href="/">소개</a>
            </li>
            <li>
              <a href="/">디자인 원칙</a>
            </li>
            <li>
              <a href="/">스타일 가이드</a>
            </li>
            <li>
              <a href="/">컴포넌트</a>
            </li>
            <li>
              <a href="/">기본 패턴</a>
            </li>
            <li>
              <a href="/">서비스 패턴</a>
            </li>
          </ul>
        </nav>
        <button type="button" className="mob-menu"></button>
      </div>
    </div>
  );
};

export default Header;
