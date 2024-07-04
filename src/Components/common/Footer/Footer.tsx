import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="tel:044-205-2728">044-205-2728</Link>,
                <Link to="tel:044-205-2729">2729</Link>
              </span>
            </li>
            <li>
              <strong className="strong">한국지능정보사회진흥원</strong>
              <span>
                <Link to="tel:053-230-1923">053-230-1923</Link> | {""}
                <Link to="mailto:uiux@nia.or.kr">uiux@nia.or.kr</Link>
              </span>
            </li>
          </ul>
          <span className="copyright">©KRDS. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
