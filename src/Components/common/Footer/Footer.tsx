import React from "react";

const Footer = () => {
  return (
    <footer id="g-footer" className="includeJsGuide">
      <div className="inner">
        <div className="logo">KRDS</div>
        <div className="main-footer-wrap">
          <ul className="info-cs">
            <li>
              <strong className="strong">행정안전부</strong>
              <span>
                <a href="tel:044-205-2728">044-205-2728</a>,
                <a href="tel:044-205-2729">2729</a>
              </span>
            </li>
            <li>
              <strong className="strong">한국지능정보사회진흥원</strong>
              <a href="tel:053-230-1923">053-230-1923</a> |
              <a href="mailto:uiux@nia.or.kr">uiux@nia.or.kr</a>
            </li>
          </ul>
          <span className="copyright">©KRDS. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
