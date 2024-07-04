import React, { useState } from "react";
import db from "../../../../data/db.json";
import { Link } from "react-router-dom";

const SearchArea = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredData = db.guide.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="main-area search-area" id="keyword_sch_area">
      <div className="inner">
        <h3 className="area-tit">가이드 검색</h3>
        {/* 검색 입력폼 */}
        <fieldset>
          <legend>가이드 관련 키워드 검색</legend>
          <div className="search-top-box">
            <div className="sch-form-wrap">
              <div className="sch-input">
                <input
                  type="text"
                  className="form-control"
                  id="keword-search"
                  placeholder="키워드 입력"
                  title="키워드 입력"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="button" className="btn btn-ico ico-sch btn-exec">
                  <span className="sr-only">검색</span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
        {/* keyword list */}
        <ul className="search-list">
          {filteredData.map((db) => (
            <li className={db.img === "" ? "li no-img" : "li"} key={db.id}>
              <Link to="/">
                {db.img === "" ? null : (
                  <div
                    className={`img-wrap guide${db.id}`}
                    style={{ backgroundImage: `url("${db.img}")` }}
                  ></div>
                )}

                <div className="conts-wrap">
                  <div className="badge-wrap">
                    <span className="krds-badge keyword">{db.badge1}</span>
                    {db.badge2 === "" ? null : (
                      <span className="krds-badge keyword">{db.badge2}</span>
                    )}
                  </div>
                  <h4 className="tit keyword">
                    {db.title}
                    {db.sub === "" ? null : (
                      <span className="sub">{db.sub}</span>
                    )}
                  </h4>
                  <p className="desc keyword">{db.desc}</p>
                </div>
              </Link>
            </li>
          ))}
          {/* no data */}
          {filteredData.length === 0 && (
            <div className="no-data">검색 결과가 없습니다.</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchArea;
