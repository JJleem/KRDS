import React, { useState } from "react";

const HeaderTop = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div id="g-header-top" className="includeJsGuide">
      <div className="toggle-wrap">
        <div
          className={`toggle-head ${isClicked ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="inner">
            <span className="nuri-txt">
              이 누리집은 대한민국 공식 전자정부 누리집입니다.
            </span>
            <button
              type="button"
              className="btn btn-txt ico-arr-down toggle-btn xsm"
            >
              공식 누리집 확인방법
              <span className="sr-only">열기</span>
            </button>
          </div>
        </div>
        <div
          className={`toggle-body ${isClicked ? "active" : ""}`}
          onClick={handleClick}
          style={{
            height: isClicked ? "183px" : "",
          }}
        >
          <div className="inner">
            <dl className="dl nuri">
              <dt className="dt">공식 누리집 주소 확인하기</dt>
              <dd className="dd">
                go.kr 주소를 사용하는 누리집은 대한민국 정부기관이 관리하는
                누리집입니다.
                <br className="br" />
                이밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하고 있다면 아래
                URL에서 도메인 주소를 확인해 보세요
              </dd>
              <dd>
                <a href="/" className="btn btn-txt ico-go xsm" target="_blank">
                  운영중인 공식 누리집보기
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;