import React from "react";
import Code from "./Code";
import { useState } from "react";
import TopBtn from "../../common/topbtn/TopBtn";
const Gcontent09 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>기본 패턴</span>
          <strong>첨부파일</strong>
        </h2>
        <p className="g-desc">
          첨부파일은 게시물, 본문 등에 제공되는 다운로드 가능한 콘텐츠를
          의미한다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">인라인 링크</h4>
            <p className="info-txt">
              본문 텍스트 사이에 파일 이름과 파일 정보 텍스트로 제공되는
              첨부파일 링크이다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">목록 링크</h4>
            <p className="info-txt">
              본문에서 단독으로 제공되는 첨부파일 링크 형태로 컨테이너를
              활용하여 주변 콘텐츠와 분리하며 다운로드 링크와 미리 보기 링크가
              별도로 제공된다. 주로 본문과 관련된 상세 정보를 확인할 수 있는
              문서를 제공하기 위해 사용된다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">아이콘 링크</h4>
            <p className="info-txt">
              첨부파일을 아이콘 링크 형태로 축약한 것으로 대게 구조화 목록,
              표에서 파일을 다운로드하는 데 사용한다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/global/global_09_01_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>파일 이름: </strong>파일 이름 텍스트. 인라인 링크인 경우
                파일 이름과 파일 정보가 다운로드 링크로 사용될 수 있음
              </li>
              <li>
                <span className="num">2. </span>
                <strong>파일 정보: </strong>파일 유형, 파일 크기, 페이지 수 정보
              </li>
              <li>
                <span className="num">3. </span>
                <strong>다운로드 링크: </strong>파일 다운로드 링크
              </li>
              <li>
                <span className="num">4. </span>
                <strong>미리 보기 링크: </strong>파일을 다운로드 받지 않고
                브라우저 새 탭에서 미리보기 위한 링크
              </li>
              <li>
                <span className="num">5. </span>
                <strong>컨테이너: </strong> 첨부파일을 다른 콘텐츠와 구분하는 데
                사용되는 윤곽선
              </li>
              <li>
                <span className="num">6. </span>
                <strong>아이콘(선택): </strong>첨부파일의 형식을 안내하는
                이미지로 다운로드 링크로 사용될 수 있음
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  링크가 파일 다운로드를 유발할 수 있음을 사용자에게 사전에
                  안내한다.
                </strong>
                <p className="info-txt">
                  첨부파일 링크 주변에 ’다운로드’라는 텍스트가 포함된 설명을
                  제공하거나 다운로드 링크를 제공하여 링크를 실행하였을 때
                  발생할 동작을 사용자가 예측할 수 있어야 한다.
                </p>
              </li>
              <li>
                <strong>파일의 크기와 형식 정보를 표시한다.</strong>
                <p className="info-txt">
                  인라인 링크과 목록 링크는 파일 이름 우측에 ‘[파일 유형, 파일
                  크기]’를 제공하여 사용자가 첨부파일에 대한 정보를 예측할 수
                  있게 한다. 파일 크기는 KB, MB, GB 단위로 표시한다.
                </p>
              </li>
              <li>
                <strong>
                  인라인 링크 유형의 첨부파일 텍스트는 주변 콘텐츠와 비슷한
                  크기로 제공한다.
                </strong>
                <p className="info-txt">
                  본문 내에 제공될 경우 링크 텍스트의 크기는 해당 줄 또는 단락에
                  있는 텍스트의 글자 크기와 일치해야 한다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  첨부파일 아이콘 이미지에 적절한 대체 텍스트를 제공한다.
                </strong>
                <p className="info-txt">
                  첨부파일을 아이콘 이미지로 표시한 경우, 아이콘 이미지의 대체
                  텍스트는 정확한 첨부파일명으로 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>KWCAG 2.2 적절한 링크 텍스트</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                  <li>WCAG 2.1 Headings and Labels (AA)</li>
                </ul>
              </li>
              <li>
                <strong>
                  첨부파일은 스크린 리더가 접근할 수 있는 형식으로 제공한다.
                </strong>
                <p className="info-txt">
                  첨부파일의 본문은 텍스트 형식으로 구성하고 이미지에는 각 문서
                  형식의 표준에서 지원하는 방식으로 대체 텍스트를 제공하여
                  스크린 리더에서 콘텐츠에 접근할 수 있도록 해야 한다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                {/* contents */}
                {/* box list */}
                <ul className="box-group-area">
                  <li>
                    <p className="tit">
                      사회보장급여 신청(변경)서 [hwp, 328KB]
                    </p>
                    <div className="btn-wrap">
                      <button
                        type="button"
                        className="btn sm btn-txt ico-down"
                        style={{ marginRight: "3px" }}
                      >
                        다운로드
                      </button>
                      <button type="button" className="btn sm btn-txt ico-go">
                        바로보기
                      </button>
                    </div>
                  </li>
                  <li>
                    <p className="tit">
                      금융정보 등(금융ㆍ신용ㆍ보험정보) 제공 동의서 [hwp, 17KB]
                    </p>
                    <div className="btn-wrap">
                      <button
                        type="button"
                        className="btn sm btn-txt ico-down"
                        style={{ marginRight: "3px" }}
                      >
                        다운로드
                      </button>
                      <button type="button" className="btn sm btn-txt ico-go">
                        바로보기
                      </button>
                    </div>
                  </li>
                </ul>
                {/* //box list */}
                {/* //contents */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader09_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse09_01_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent09;
