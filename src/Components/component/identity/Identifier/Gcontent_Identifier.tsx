import React from "react";
import Code from "./Code";
import TopBtn from "../../../common/topbtn/TopBtn";
import { useState } from "react";
const Gcontent_Identifier = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>컴포넌트</span>
          <strong>
            운영기관 식별자 <span className="sub">(Identifier)</span>
          </strong>
        </h2>
        <p className="g-desc">
          운영기관 식별자는 디지털 정부서비스에 대한 신뢰성을 위해 서비스 운영
          주체의 상위 기관을 안내하는 요소로 공식 배너, 푸터와 함께 서비스의
          일관성, 브랜드를 확인할 수 있는 핵심 요소이다
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">라이트</h4>
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_04_01.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">다크</h4>
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_04_02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_04_03.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>컨테이너: </strong>식별 정보가 제공되는 영역
              </li>
              <li>
                <span className="num">2. </span>
                <strong>상위 기관 로고: </strong>서비스 운영을 최종적으로
                책임지는 상위 기관의 로고
              </li>
              <li>
                <span className="num">3. </span>
                <strong>안내 텍스트: </strong>상위 기관의 관리를 받고 있음을
                안내하는 정보
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>식별자가 지나치게 주의를 끌지 않도록 표현한다.</strong>
                <p className="info-txt">
                  서비스의 디자인 주제에 적합한 컨네이터 배경색을 사용한다. 화면
                  하단 영역에서 사용자가 가장 먼저 집중해야 하는 정보는 푸터
                  내부의 정보와 링크이다.
                </p>
              </li>
              <li>
                <strong>
                  로고 영역에는 서비스의 로고나 서비스 운영 주체의 로고가 아니라
                  서비스 운영과 관련된 상위 기관의 로고를 제공한다.
                </strong>
                <p className="info-txt">
                  식별자는 서비스 운영을 최종적으로 책임지는 상위 기관을
                  안내하기 위한 것이므로 상위 기관의 로고가 제공되어야 하며
                  서비스 로고는 푸터에 배치되어야 한다.
                </p>
              </li>
              <li>
                <strong>
                  관련 기관이 2개 이상 존재하는 경우 기관의 계층 수준에 따라
                  로고를 순서대로 배치한다.
                </strong>
                <p className="info-txt">
                  최상위 기관의 로고를 가장 왼편에 배치하고 그 다음 수준의
                  기관을 순서대로 배치한다.
                </p>
              </li>
              <li>
                <strong>안내 텍스트와 요소의 배치를 변경하지 않는다.</strong>
                <p className="info-txt">
                  모든 디지털 정부서비스에서 식별자가 일관성 있게 제공되었을 때
                  신뢰도를 높일 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  공식 디지털 정부서비스가 아닌 사이트에서는 식별자를 사용하지
                  않아야 한다.
                </strong>
                <p className="info-txt">
                  정부의 공식 서비스가 아닌 곳에서 식별자를 사용하게 될 경우
                  사용자에게 혼동을 줄 수 있으므로 식별자를 사용하지 않아야
                  한다.
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
                  식별자 영역은 구조적으로 푸터 내부에 포함되도록 제공한다.
                </strong>
                <p className="info-txt">
                  푸터가 항상 문서의 마지막 요소로 제공되어야 하므로 식별자
                  영역은 &lt;section&gt;이나 &lt;article&gt;로 제공하고 푸터
                  내부의 가장 마지막 구획으로 포함시킨다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>로고 이미지에 대체 텍스트를 제공한다.</strong>
                <p className="info-txt">
                  이미지 로고를 사용하는 경우 스크린 리더를 위한 대체 텍스트를
                  제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Non-text Content (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example img-wrap">
                <footer id="footer">
                  <div className="inner">
                    <div className="f-logo">
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/pattern/layout/head_logo.svg"
                        className="logo-im"
                        alt="대한민국정부"
                      />
                    </div>
                    <div className="f-cnt">
                      <div className="f-info">
                        <p className="info-addr">
                          (26464) 강원특별자치도 원주시 건강로 32(반곡동)
                          국민건강보험공단
                        </p>
                        <ul className="info-cs">
                          <li>
                            <strong className="strong">
                              대표전화 1577-1000
                            </strong>
                            <span className="span">(유료, 평일 09시~18시)</span>
                          </li>
                          <li>
                            <strong className="strong">
                              해외이용 82-33-811-2001
                            </strong>
                            <span className="span">(유료, 평일 09시~18시)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="f-link">
                        <div className="link-go">
                          <a href="#" className="btn btn-txt sm ico-arr">
                            찾아오시는 길
                          </a>
                          <a href="#" className="btn btn-txt sm ico-arr">
                            이용안내
                          </a>
                          <a href="#" className="btn btn-txt sm ico-arr">
                            직원검색
                          </a>
                        </div>
                        <div className="link-sns">
                          <a href="#" className="instagram" target="_blank">
                            <span className="sr-only">인스타그램</span>
                          </a>
                          <a href="#" className="youtube" target="_blank">
                            <span className="sr-only">유튜브</span>
                          </a>
                          <a href="#" className="twitter" target="_blank">
                            <span className="sr-only">트위터</span>
                          </a>
                          <a href="#" className="facebook" target="_blank">
                            <span className="sr-only">페이스북</span>
                          </a>
                          <a href="#" className="blog" target="_blank">
                            <span className="sr-only">블로그</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="f-btm">
                      <div className="f-btm-text">
                        <div className="f-menu">
                          <a href="#" className="point">
                            개인정보처리방침
                          </a>
                          <a href="#">저작권 정책</a>
                          <a href="#">웹 접근성 품질인증 마크 획득</a>
                        </div>
                        <p className="f-copy">
                          © Ministry of Education. All rights reserved.
                        </p>
                      </div>
                      <div className="f-btm-ban">
                        <span className="ban-txt">
                          이 누리집은 보건복지부 산하기관 누리집입니다.
                        </span>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader02_04_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse02_04_01"
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

      <TopBtn />
    </div>
  );
};

export default Gcontent_Identifier;
