import React from "react";
import db from "../../../../data/db.json";
import { Link } from "react-router-dom";

const FigmaAreaPdf = () => {
  return (
    <div className="main-area figma-area pdf">
      <div className="inner">
        <h3 className="area-tit">{db.design[1].title}</h3>
        <ul className="box-group-area">
          <li
            style={
              {
                ["&::before"]: {
                  backgroundImage: `url("${db.design[1].img}")`,
                },
              } as React.CSSProperties
            }
          >
            <Link to="/">
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
