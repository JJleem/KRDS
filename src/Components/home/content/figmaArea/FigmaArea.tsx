import React from "react";
import db from "../../../../data/db.json";
import { Link } from "react-router-dom";
const FigmaArea = () => {
  return (
    <div className="main-area figma-area">
      <div className="inner">
        <h3 className="area-tit">{db.design[0].title}</h3>
        <ul className="box-group-area">
          <li>
            <Link to="https://github.com/ybnkang-nia/uiux-guide/raw/main/%EB%94%94%EC%A7%80%ED%84%B8_%EC%A0%95%EB%B6%80%EC%84%9C%EB%B9%84%EC%8A%A4_UIUX_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8(%EB%94%94%EC%9E%90%EC%9D%B8%EB%A6%AC%EC%86%8C%EC%8A%A4_%EC%9D%BC%EB%B6%80%EC%98%88%EC%A0%9C).zip">
              <p className="tit">
                {db.design[0].desc}
                <br />
                {db.design[0].desc2}
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

export default FigmaArea;
