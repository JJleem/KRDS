import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Login04 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>로그인</em>
          </span>
          <strong>로그인 방식 확인/선택</strong>
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
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">레이아웃</h4>
            <ul className="info-list dash">
              <li>목록</li>
              <li>탭</li>
            </ul>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">절차</h4>
            <ul className="info-list decimal">
              <li>
                <strong>단일형</strong>
                <p className="info-txt">
                  한 화면에서 로그인 방식에 대한 비교와 선택을 수행할 수 있게 함
                </p>
              </li>
              <li>
                <strong>단계형</strong>
                <p className="info-txt">
                  하나 이상의 레이아웃을 사용하여 단계를 거쳐 로그인 방식
                  선택지를 좁히도록 함
                </p>
              </li>
              <li>
                <strong>집중형</strong>
                <p className="info-txt">
                  단계형 방식을 사용하는 경우, 사용자가 가장 마지막에 로그인한
                  인증 방식을 저장하여 다음 로그인 시도 시 단계를 거치지 않고
                  저장된 로그인 방식을 이용할 수 있게 함
                </p>
              </li>
            </ul>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">유형 선택 방법</h4>
            <div className="g-cont-in">
              <ul className="info-list decimal">
                <li>
                  <strong>레이아웃</strong>
                  {/* table list */}
                  <div className="tbl-wrap scroll">
                    <table className="tbl col data">
                      <caption>
                        유형 선택 방법 레이아웃에 대한 표로 이동에 대한 표로
                        구분/목록/탭으로 구성되어있으며 구분 항목은 인증
                        유형,인증 방식의 다양성 으로 구성되어있음
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">구분</th>
                          <th scope="col">목록</th>
                          <th scope="col">탭</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">인증 유</th>
                          <td>-</td>
                          <td>
                            사용자만이 유일하게 알고 있는 내용에 기반한 사용자
                            확인 방법 <br />
                            예) 아이디/패스워드, PIN
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">인증 방식의 다양성</th>
                          <td>전체 인증 방식의 수가 15개 이하임</td>
                          <td>전체 인증 방식의 수가 15개를 초과함</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* //table list */}
                </li>
                <li>
                  <strong>절차</strong>
                  {/* table list */}
                  <div className="tbl-wrap scroll">
                    <table className="tbl col data">
                      <caption>
                        유형 선택 방법 절차에 대한 표로 이동에 대한 표로
                        구분/단일형/단계형/집중형으로 구성되어있으며 구분 항목은
                        인증 유형, 인증 권한 수준, 사용자 이용 빈도 로
                        구성되어있음
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">구분</th>
                          <th scope="col">단일형</th>
                          <th scope="col">단계형</th>
                          <th scope="col">집중형</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">인증 유형</th>
                          <td>인증 주체의 구분 없음</td>
                          <td>
                            인증의 주체나 로그인 방식에 구분이 있음 <br />
                            *인증 주체: 개인, 기관 <br />
                            *로그인 방식: 서비스 자체 로그인, 통합 로그인
                          </td>
                          <td>인증 유형에 상관없이 단계형 로그인에 사용함</td>
                        </tr>
                        <tr>
                          <th scope="row">인증 권한 수준</th>
                          <td>
                            모든 인증 방식의 권한(전자서명의 효력)이 동일함
                          </td>
                          <td>
                            인증 방식별로 권한이 다르고 권한의 차이가 서비스
                            이용에 영향을 미침
                          </td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th scope="row">사용자 이용 빈도</th>
                          <td>관련 없음</td>
                          <td>이용 빈도 낮음</td>
                          <td>이용 빈도 높음</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* //table list */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_05.png"
                  alt=""
                />
              </div>
            </div>
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_02.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>부제목: </strong>특정 기관/서비스의 로그인 화면임을
                안내하는 제목
              </li>
              <li>
                <span className="num">2. </span>
                <strong>제목: </strong>이용 목적을 선택하도록 유도하는 제목
                텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>설명: </strong>로그인 목적 선택에 대한 이해를 돕기 위해
                제공되는 설명 텍스트. 이용 목적에 따라 다양한 인증 방법이
                제공되며, 일부 인증 방식은 첫 방문이라면 회원 가입이 필요할 수
                있음을 안내함
              </li>
              <li>
                <span className="num">4. </span>
                <strong>방식 선택 목록: </strong>사용자의 유형, 목적에 따라
                로그인 화면을 분리하여 달성 과업에 필요한 로그인 작업에 집중할
                수 있도록 도움
              </li>
              <li>
                <span className="num">5. </span>
                <strong>방식 선택 탭: </strong>사용자와의 상호작용에 반응하는
                박스 영역으로 실행 시 각 탭에 상응하는 콘텐츠가 탭 패널에
                표시됨. 통합 로그인과 기존 서비스 로그인을 분리하여 사용자
                혼란을 방지함
              </li>
              <li>
                <span className="num">6. </span>
                <strong>섹션 제목: </strong>인증 후 이용 가능한 서비스 범위를
                식별하는 텍스트
              </li>
              <li>
                <span className="num">7. </span>
                <strong>방식 선택 목록: </strong>인증 후 이용 가능한 서비스
                범위에 따라 로그인 방식을 선택할 수 있는 목록
              </li>
              <li>
                <span className="num">8. </span>
                <strong>디스클로저: </strong>로그인 방식에 대한 세부 정보, 참고
                사항 등을 나타내거나 숨기기 위해 사용하는 컨트롤
              </li>
              <li>
                <span className="num">9. </span>
                <strong>로그인 관련 도움말: </strong>로그인 관련 질문 및 문제
                해결을 위한 도움말을 확인할 수 있는 화면으로 이동하는 링크
              </li>
              <li>
                <span className="num">10. </span>
                <strong>회원 가입 링크: </strong> 계정 생성을 위한 화면으로
                연결되는 링크
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
                  빈번하게 사용되는 로그인 방식에 우선적으로 접근할 수 있는
                  수단을 제공한다. <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  사용자 데이터를 기반으로 사용자들이 보편적으로 많이 사용하거나
                  서비스 관점에서 추천하는 방식을 먼저 노출한 뒤, 필요한 경우
                  다른 로그인 방법을 선택할 수 있도록 제시한다.
                </p>
              </li>
              <li>
                <strong>
                  동일한 수준의 로그인 방식을 탭으로 구분하여 선택하게 하지
                  않는다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  탭은 사용자가 한 번에 두 개 이상의 콘텐츠 섹션을 확인하면서
                  정보를 비교하는 데 적합한 레이아웃이 아니다. 로그인 주체,
                  로그인 방식이 명확하게 구분되는 경우에만 사용자가 탭
                  컴포넌트를 기반으로 선택하도록 설계한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  다양한 로그인 방식에 대한 분류 체계에 사용자의 관점과 언어를
                  반영한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인 방식을 기술적인 관점으로 구분하지 않고 사용자의
                  관점에서 그 이용 목적에 따라 분류하여 제공한다. 이렇게
                  함으로써 사용자는 여러 가지 로그인 방식 중에서 방문 목적에
                  적합한 로그인 방식을 빠르게 비교하여 선택할 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  로그인 방식에 따라 서비스 이용 절차가 달라지는 경우, 사전에
                  안내를 제공한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인 방식에 따라 서비스가 다르게 제공되며 이용할 수 있는
                  기능의 차이가 있을 수 있음을 사용자가 사전에 인지하고 로그인
                  방식을 선택할 수 있도록 한다.
                </p>
              </li>
              <li>
                <strong>
                  로그인 방식과 입력 항목에 대한 직관적인 안내를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인 방식과 입력 항목에 대한 설명은 해당 항목 주변에
                  제공한다. 안내 정보를 본문 상단 또는 하단 영역에 서로 다른
                  로그인 방식에 대한 정보와 동시에 표현하게 되면 인지가 어려우며
                  안내 정보가 필요한 시점에 곧바로 접근할 수 없다.
                </p>
              </li>
              <li>
                <strong>
                  도움말 정보, 매뉴얼 링크를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  처음 방문자, 익숙하지 않은 사용자를 위해 사용자가 스스로
                  문제를 해결할 수 있는 링크를 제공한다. 필요한 경우, 로그인에
                  대한 도움을 받을 수 있는 관련 오프라인 채널 정보나 챗봇 링크가
                  제공될 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  도움말 정보는 사용자의 다양한 이용 환경을 고려하여 작성한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  도움말 정보에 예시 화면 이미지가 포함되어 있거나 운영 체제,
                  사용자 에이전트의 옵션/설정과 관련된 내용을 포함해야 하는
                  경우, 사용자가 다양한 디바이스를 통해 서비스를 이용하고 있음을
                  고려해야 한다. 특정 화면 크기, 특정 디바이스에서만 참고할 수
                  있는 정보는 일부 사용자의 문제 해결에 도움을 주지 못한다.
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
                  인지 기능 테스트에 의존하지 않는 인증 방식을 제공한다.
                </strong>
                <p className="info-txt">
                  사용자 로그인 등과 같은 인증 과정이 인지 기능 테스트(예:
                  로그인을 위한 비밀번호 입력, 터치스크린 화면의 패턴 인식,
                  임의의 문자열 기억, 계산 수행, 특정 객체를 포함하고 있는
                  이미지 찾기 등)에 의존하는 경우, 인지 기능 테스트에 의존하지
                  않는 인증 방법을 적어도 하나 이상 제공해야 한다. 다만, 이미
                  사용자 자신에게 익숙하여 별도의 인지적인 노력을 필요로 하지
                  않는 사용자의 이름이나 이메일 주소, 전화번호는 인지 기능
                  테스트로 간주하지 않는다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 접근 가능한 인증</li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 1]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_04.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례 2]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_04_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">도움</span>
              <span className="btn-chip-outline">입력폼</span>
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
                    <tr>
                      <td>로그인</td>
                      <td className="name">유형 선택</td>
                      <td>링크형</td>
                      <td className="file">
                        <Link
                          to="/service/login_04"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="name"></td>
                      <td></td>
                      <td>탭형</td>
                      <td className="file">
                        <Link
                          to="/service/login_04"
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

export default Gcontent_Login04;
