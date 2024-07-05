import React from "react";
import db from "../../../../data/db.json";
import { Link } from "react-router-dom";

const FigmaAreaPdf = () => {
  return (
    <div className="main-area figma-area pdf">
      <div className="inner">
        <h3 className="area-tit">{db.design[1].title}</h3>
        <ul className="box-group-area">
          <li>
            <Link to="https://github.com/ybnkang-nia/uiux-guide-latest/raw/main/%EB%94%94%EC%A7%80%ED%84%B8%20%EC%A0%95%EB%B6%80%EC%84%9C%EB%B9%84%EC%8A%A4%20UIUX%20%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8(24.6.19.).pdf">
              <p className="tit">
                {db.design[1].desc}
                <br />
                {db.design[1].desc2}
              </p>
              <div className="btn-wrap">
                <span className="btn sm btn-txt dico-down">다운로드</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FigmaAreaPdf;
