import React from "react";
import db from "../../../../data/db.json";
import { Link } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="main-area service-area">
      <div className="inner">
        <h3 className="area-tit">주요 가이드</h3>
        <ul className="search-list">
          {db.main.map((db) => (
            <li className="li" key={db.id}>
              <Link
                to={
                  db.id === 1
                    ? "/component"
                    : db.id === 2
                    ? "/global"
                    : db.id === 3
                    ? "/service"
                    : "/styleguide"
                }
              >
                <div
                  className={`img-wrap main_${db.id}`}
                  style={{ backgroundImage: `url("${db.img}")` }}
                ></div>
                <div className="conts-wrap">
                  <h4 className="tit">{db.title}</h4>
                  <p className="desc">{db.desc}</p>
                  <div className="btn-wrap">
                    <span className="btn sm btn-txt iico-more">바로가기</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainArea;
