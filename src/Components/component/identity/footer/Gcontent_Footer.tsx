import React from "react";
import TopBtn from "../../../common/topbtn/TopBtn";
import Code from "./Code";
import { useState } from "react";
const Gcontent_Footer = () => {
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
            푸터 <span className="sub">(Footer)</span>
          </strong>
        </h2>
        <p className="g-desc">
          푸터는 화면을 구성하는 가장 마지막 요소로 헤더와 본문에서 원하는
          정보를 찾지 못하였거나 사이트 구조 탐색 중에 길을 잃은 사용자들이
          대면하게 되는 정보이다. 따라서 푸터에는 사용자가 서비스를 탐색할 수
          있는 추가적인 수단, 문제를 해결하는 데 참고할 수 있는 유용한 링크가
          제공되어야 한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>컨테이너: </strong>푸터가 제공되는 영역
              </li>
              <li>
                <span className="num">2. </span>
                <strong>서비스 로고: </strong>기관/서비스 로고를 통해 디지털
                서비스 운영 주체의 정체성을 전달하는 요소
              </li>
              <li>
                <span className="num">3. </span>
                <strong>연락처: </strong>주소, 이메일 주소, 대표 전화번호, 민원
                전화번호 등 연락 수단 정보
              </li>
              <li>
                <span className="num">4. </span>
                <strong>유틸리티 링크: </strong>오시는 길, 관련 기관 웹사이트
                가기 링크, 소셜 채널 바로가기 링크 등이 제공됨
              </li>
              <li>
                <span className="num">5. </span>
                <strong>정책 링크: </strong>웹 접근성, 개인 정보 처리 방침과
                같은 각종 정책 링크가 제공됨
              </li>
              <li>
                <span className="num">6. </span>
                <strong>저작권 정보: </strong>디지털 정부 서비스의 저작권을
                명시한 텍스트
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
                  모든 페이지에 푸터를 일관된 위치에 제공해야 한다.
                </strong>
                <p className="info-txt">
                  푸터는 페이지의 마지막 요소이므로 본문 하단에 배치해야 한다.
                  본문의 높이가 뷰포트 높이보다 짧은 경우 푸터가 뷰포트 하단에
                  고정되어 있는지 확인한다.
                </p>
                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_03_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr/resources/img/guide/contents/component/component_02_03_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  모든 디지털 정부 서비스에서 푸터 섹션의 정보는 일관된 순서로
                  제공한다.
                </strong>
                <p className="info-txt">
                  푸터 내 정보 배치 일관성을 유지하는 것은 디지털 정부 서비스
                  브랜드 확립과 사용자 신뢰 구축에 매우 중요하므로 명확한 이유
                  없이 기본 순서를 변경해서는 안 된다. <br />
                  푸터 섹션의 정보는 서비스 로고, 연락처, 유틸리티 링크, 정책
                  링크, 저작권 정보의 순으로 제공한다. 이때, 서비스 로고,
                  연락처, 유틸리티 링크는 하나의 그룹으로 인지될 수 있도록
                  표현해야 한다.
                </p>
              </li>
              <li>
                <strong>개인 정보 처리 방침을 반드시 표시한다.</strong>
                <p className="info-txt">
                  개인 정보 처리의 투명성 등을 알리기 위한 개인 정보 처리 방침은
                  반드시 웹사이트에 공개해야 하고, 변경된 경우 그 사항을
                  반영해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  전자상거래가 포함된 경우 이용약관을 반드시 표시한다.
                </strong>
                <p className="info-txt">
                  인터넷쇼핑몰 등 전자상거래가 포함된 경우, 소비자가 안전하게
                  거래할 수 있도록 사업자의 신원, 거래 약관 등을 푸터에서
                  제공해야 한다.
                </p>
              </li>
              <li>
                <strong>사용자들이 빈번하게 찾는 링크를 배치한다.</strong>
                <p className="info-txt">
                  사이트맵을 비롯하여 사용자가 빈번하게 찾는 링크는 웹사이트의
                  하단에서도 쉽게 접근할 수 있도록 제공하는 것이 좋다.
                  웹사이트의 세로 길이가 길어질수록 다시 상단으로 이동하는
                  것보다 더 빠른 접근이 가능하기 때문이다. 필요하다면
                  목적별/유형별로 군집화하여 직관적으로 탐색할 수 있게 한다.
                </p>
              </li>
              <li>
                <strong>
                  푸터에 제공하는 서비스 내비게이션은 기본 내비게이션과 동일한
                  구조 및 레이블을 따라야 한다.
                </strong>
                <p className="info-txt">
                  기본 내비게이션에 포함된 모든 최상위 화면 링크가 푸터 탐색에도
                  포함되어야 하며, 하위 화면 링크가 푸터에 포함된 경우 하위 화면
                  링크도 기본 탐색과 동일한 구조 및 레이블을 따라야 한다.
                </p>
              </li>
              <li>
                <strong>
                  연락처 정보와 각종 링크는 항상 최신 상태로 유지한다.
                </strong>
                <p className="info-txt">
                  링크를 실행했을 때 존재하지 않는 사이트/페이지/화면으로
                  이동하거나 예상과 다른 목적지로 이동하지 않도록 점검하고
                  최신화해야 한다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">플랫폼에 대한 고려 사항</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  작은 화면 너비에서도 푸터의 정보 요소는 상대적으로 동일한
                  순서로 제공되도록 표현한다.
                </strong>
                <p className="info-txt">
                  화면 너비가 충분하지 않아 병렬적으로 배치되었던 푸터 내부
                  요소가 수직 배열로 변경되더라도 서비스 로고, 연락처, 유틸리티
                  링크, 정책 링크, 저작권 정보의 순서로 배치한다.
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
                  푸터 영역이 스크린 리더에 인지될 수 있는 방식으로 제공한다.
                </strong>
                <p className="info-txt">
                  푸터의 모든 요소는 &lt;footer&gt; 내부에 배치하여 주요
                  랜드마크 정보가 스크린 리더로 전달될 수 있도록 해야 한다. 이를
                  통해 스크린 리더 사용자들은 페이지의 구성을 빠르게 파악할 수
                  있다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                </ul>
              </li>
              <li>
                <strong>로고 이미지에 대체 텍스트를 제공한다.</strong>
                <p className="info-txt">
                  이미지 로고를 사용하는 경우 스크린 리더를 위한 대체 텍스트를
                  제공해야 한다. 헤더의 로고는 메인 페이지로 이동하는 링크로
                  사용되므로 대체 텍스트에 ‘로고’라는 단어가 포함되지 않도록
                  유의해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1: Non-text Content (A)</li>
                  <li>
                    KWCAG 2.2: (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그
                    의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.
                  </li>
                  <li>
                    KWCAG 2.2: (적절한 링크 텍스트) 링크 텍스트는 용도나 목적을
                    이해할 수 있도록 제공해야 한다.
                  </li>
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
                  <div className="foot-quick">
                    <div className="inner">
                      <button
                        type="button"
                        className="link"
                        title="소속기관(지청 및 위원회) 레이어"
                      >
                        소속기관(지청 및 위원회)
                      </button>
                      <button
                        type="button"
                        className="link"
                        title="업무별 누리집 레이어"
                      >
                        업무별 누리집
                      </button>
                      <button
                        type="button"
                        className="link"
                        title="산하기관 및 관련단체 레이어"
                      >
                        산하기관 및 관련단체
                      </button>
                      <button
                        type="button"
                        className="link"
                        title="정부기관 레이어"
                      >
                        정부기관
                      </button>
                    </div>
                  </div>
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
                  <h2 id="accordionHeader02_03_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse02_03_01"
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

export default Gcontent_Footer;
