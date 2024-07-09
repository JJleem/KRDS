import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";
const Gcontent_Visit02 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>방문</em>
          </span>
          <strong>방문</strong>
        </h2>
        <p className="g-desc">
          방문은 사용자가 디지털 서비스에 접속하여 원하는 상세 정보로 연결되는
          과정으로 대개 정보 구조의 가장 상위 수준인 서비스의 메인 화면에서
          시작된다. 사용자와 서비스가 만나게 되는 첫 지점이므로 서비스에 대한
          첫인상을 결정하는 중요한 화면이다. 대부분의 사용자는 구체적인 맥락
          없이 서비스를 방문하게 되므로 명확하고 간결하게 구성되어야 한다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  다양한 콘텐츠의 구성 요소를 일관성 있게 구성한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  메인 화면에는 사용자가 원하는 다양한 콘텐츠와 서비스가
                  배치된다. 이를 구성하는 요소별로 표현과 작동 방식을 일관성
                  있게 구성하여 사용자가 원하는 정보를 탐색하고 이동하는
                  과정에서 불필요한 시간이 소요되지 않도록 해야 한다. <br />
                  메인 화면에 배치되는 콘텐츠 구성 요소의 유형은 다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>캐러셀</li>
                  <li>탭</li>
                  <li>목록과 더보기 링크</li>
                  <li>기타 링크 및 버튼</li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_01_02_01.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  시급하거나 중요한 정보를 사용자가 빠르게 인지할 수 있도록
                  제공한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  서비스 점검이나 제공 기능 중단 등 사용자가 서비스 이용 전에
                  반드시 알아야 하는 정보는 가장 먼저 인지할 수 있도록 구성해야
                  한다.
                </p>
              </li>
              <li>
                <strong>
                  사용자 데이터를 기반으로 한 우선순위에 따라 콘텐츠를 배치한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  메인 화면을 구성하는 요소들의 우선순위를 제공자의 관점으로만
                  결정하면 사용자들이 주로 찾는 정보와 기능이 찾기 어려운 곳에
                  배치되거나 주목도가 낮아지게 되어 방문 단계에서부터 사용자가
                  원하는 목적을 달성할 수 없게 된다.
                </p>
              </li>
              <li>
                <strong>
                  사용자 관점에서 같은 목적의 콘텐츠들은 섹션으로 모아서
                  구성한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  같은 목적의 콘텐츠를 여러 섹션에 산발적으로 배치하거나 하나의
                  섹션에 목적이 다른 콘텐츠를 모아서 배치하면 사용자의 직관적인
                  탐색이 어렵고 원하는 내용을 찾는 데 많은 시간이 소요된다.
                  섹션을 구성할 때는 명확한 타이틀과 간단한 안내를 제공하여
                  사용자가 섹션의 관련성을 이해하거나 다른 콘텐츠와의 구별에
                  어려움을 겪지 않도록 해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_01_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  방문 목적 및 사용자 유형별로 핵심적인 정보와 서비스를 탐색할
                  수 있는 영역을 구성한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자마다 다른 방문 목적에 대응하기 위해 다양하고 많은
                  콘텐츠를 메인 화면에 배치하는 것에는 한계가 있다. 서비스의
                  이용 패턴을 고려하여 ‘방문 목적별/사용자 유형별 바로가기’,
                  ‘자주 찾는 서비스’와 같은 방식으로 사용자가 원하는 정보를 직접
                  선택하고 빠르게 탐색 및 이동할 수 있는 기능을 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  로그인 기반의 개인화된 바로가기 영역을 배치한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  방문 빈도가 높고 정해진 과업을 반복적으로 수행하는 사용자의
                  경우, 방문할 때마다 반복적인 탐색 과정으로 인해 과업 진행
                  절차의 비효율이 발생할 수 있다. 특히 로그인 기반으로 사용자의
                  행동 패턴 분석이 가능한 경우에는 메인 화면에서부터 적극적인
                  개인화 서비스를 제공하는 것이 효과적이다. 로그인 기능이 없는
                  경우에는 사용자 데이터를 기반으로 이용 빈도가 높은 바로가기
                  영역을 배치하여 과업 탐색의 시간을 단축한다.
                </p>
                <div className="g-img-wrap">
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_01_02_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 정보를 빠르게 구분하고 정확하게 이동할 수 있는 방법을
                  제시한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자는 메인 화면에서 원하는 콘텐츠를 탐색한 이후에 내용을
                  확인하고 해당 링크로 이동하게 된다. 이 과정에서 사용자가
                  콘텐츠를 쉽게 이해하고 정확하게 이동할 수 있도록 돕는 것이
                  중요하며, 콘텐츠의 특성에 따라 제공할 수 있는 방법은 다음과
                  같다.
                </p>
                <ul className="info-list dash">
                  <li>최신 업데이트, 기한 표시 등의 레이블 제공</li>
                  <li>용어 및 콘텐츠의 간략한 설명</li>
                  <li>외부 사이트로 이동하는 링크의 표시</li>
                </ul>
              </li>
              <li>
                <strong>
                  최신의 정확한 정보를 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  메인 화면에서 제공하는 콘텐츠가 최신 정보가 아니거나 부정확한
                  정보인 경우 사용자는 서비스가 정상적으로 운영 및 관리되고 있지
                  않다고 판단할 수 있다. 메인 화면에서 제공되는 정보는 최신으로
                  업데이트된 정보인지 내용은 정확한지 수시로 점검해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  콘텐츠 및 서비스 명칭은 친숙하고 일관성이 있어야 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  메인 화면에서 사용자가 인지한 용어가 서비스의 다른 영역에서
                  동일하지 않게 제공되면 사용자는 자신의 이동 과정에 대해 혼동을
                  겪을 수 있다. 서비스에서 사용하는 용어는 정확하고 일관성이
                  있어야 하며 사용자가 쉽게 이해할 수 있게 친숙하고 명확해야
                  한다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">컴포넌트</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">캐러셀</span>
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
                    <col style={{ width: "12%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">1Depth</th>
                      <th scope="col">2Depth</th>
                      <th scope="col">3Depth</th>
                      <th scope="col">File Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hr">
                      <td className="name">방문</td>
                      <td>방문유형1</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>타입2</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>방문유형2</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>타입2</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>방문유형3</td>
                      <td>타입1</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>타입2</td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td>긴급공지</td>
                      <td></td>
                      <td className="file">
                        <Link
                          to="/service/visit_02"
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

export default Gcontent_Visit02;
