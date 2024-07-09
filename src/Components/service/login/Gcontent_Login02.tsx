import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Login02 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>로그인</em>
          </span>
          <strong>로그인 기능 찾기</strong>
        </h2>
        <p className="g-desc">
          로그인은 사용자의 신원을 확인하는 과정으로 사용자가 서비스에 접근할 수
          있도록 하는 수단이다. 사용자에게 개인화된 경험을 제공하거나 사용자의
          신분/신원을 인증하고자 하는 경우에 사용하기 적합하다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_02_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>아이콘: </strong>로그인에 사용되는 링크 요소임을 보다
                직관적으로 인지할 수 있도록 제공되는 아이콘
              </li>
              <li>
                <span className="num">2. </span>
                <strong>레이블: </strong>아이콘에 대한 텍스트 레이블
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
                  로그인 링크는 모든 화면에서 일관된 위치에 주목도 있게
                  배치한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  로그인으로 이동할 수 있는 링크가 메인 화면 또는 일부 화면에만
                  제공될 경우, 로그인이 필요한 사용자는 특정 화면으로 이동하는
                  경우에만 기능을 이용할 수 있어 이용에 어려움을 겪게 된다. 주요
                  정보 및 서비스를 확인하는 데 로그인이 필요한 경우, 서비스 첫
                  화면에 로그인을 유도하는 문구와 링크를 강조하여 표시함으로써
                  로그인을 유도할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  헤더에서 제공되는 로그인 링크는 사용자 아이콘과 레이블로
                  구성한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  아이콘만 단독으로 사용되는 경우 사용자에 따라 링크의 목적을
                  빠르게 이해하기 어려울 수 있으므로 텍스트 레이블을 함께
                  제공하는 것이 좋다.
                </p>

                <div className="g-img-together">
                  <div className="g-img-wrap">
                    <p className="caption">[모범 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="g-img-wrap">
                    <p className="caption">[피해야 할 사례]</p>
                    <div>
                      <img
                        src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_02_02_02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  로그인 링크는 항상 ‘로그인’ 화면으로 연결되어야 한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  로그인 링크의 목적지는 로그인 프로세스를 시작하는 화면 또는
                  로그인할 수 있는 다양한 계정이 있는 계정 선택 화면으로
                  설정해야 한다.
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
                  화면 너비가 충분하지 않은 경우에도 로그인 링크를 직관적으로
                  인지할 수 있는 형태로 표현한다.
                </strong>
                <p className="info-txt">
                  작은 화면 너비에서도 가능한 한 로그인 링크를 숨기지 않고
                  헤더나 탭바 영역에 로그인/마이페이지 링크를 상시 배치한다.
                  만약 서비스 이용에 로그인이 중요하지 않다면 메뉴 레이어에서만
                  로그인 링크를 제공할 수 있다.
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
                  로그인 링크는 스크린 리더에서 링크로 인지될 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  로그인 링크를 버튼 요소로 마크업하게 되면 로그인 화면으로
                  이동하는 동작이 발생함을 예측할 수 없다.
                </p>
                <ul className="info-list dash">
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">컴포넌트</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">헤더</span>
            </div>
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>
          <div className="g-conts-area">
            <div className="g-cont-in">
              <div className="tbl-wrap scroll">
                <table className="tbl col data">
                  <colgroup>
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name">레이아웃</td>
                      <td>유형1</td>
                      <td className="file">
                        <Link
                          to="/service/login_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>유형2</td>
                      <td className="file">
                        <Link
                          to="/service/login_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Gcontent_Login02;
