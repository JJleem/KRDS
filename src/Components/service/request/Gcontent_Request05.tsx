import React from "react";
import { Link } from "react-router-dom";

const Gcontent_Request05 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>신청서 작성</strong>
        </h2>
        <p className="g-desc">
          신청은 사용자가 서비스 제공 기관에 요구 사항을 알리기 위해 서식을
          작성하는 과업으로 관련 법률에 명시된 종류의 민원 외에 사용자가 특정한
          내용을 요청하는 모든 행동을 포함한다.
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_05_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>입력폼의 목적에 대한 설명
              </li>
              <li>
                <span className="num">2. </span>
                <strong>설명(선택): </strong>신청의 목적에 대한 부가적인
                설명이나 사용자가 데이터를 입력할 때 유의해야 하는 사항 등
                총체적인 안내를 제공하는 문장
              </li>
              <li>
                <span className="num">3. </span>
                <strong>입력폼: </strong>신청서 작성에 필요한 데이터를 입력하기
                위한 양식
              </li>
              <li>
                <span className="num">4. </span>
                <strong>단계 표시기: </strong>작성의 단계가 있는 신청에서 현재
                진행 중인 단계를 안내하기 위해 제공됨
              </li>
              <li>
                <span className="num">5. </span>
                <strong>도움 패널: </strong>신청서 작성에 필요한 도움말,
                관련하여 참고할 수 있는 정보의 링크, 문의처 정보가 제공됨
              </li>
              <li>
                <span className="num">6. </span>
                <strong>어노테이션 아이콘: </strong>도움 패널을 실행하는 데
                사용되는 버튼
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
                  한 단계 내에서의 신청 서식 섹션을 탭이나 아코디언으로 구분하지
                  않는다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자에 따라 탭, 아코디언이 있음을 인지하지 못해 입력 오류를
                  유발할 가능성이 높다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_05_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  값의 변경이 이전에 작성한 항목 또는 이전 단계에 영향을 미치는
                  경우, 이전 입력 항목 또는 이전 단계에 포함시킨다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  후행 항목의 값의 입력이나 선택에 따라 선행 입력 항목의
                  입력값이 초기화되거나 필수 입력 여부가 변경되는 상태의 변화는
                  사용자가 탐지하기 어렵다. 입력 오류를 유발할 수 있으며,
                  사용자는 이미 입력한 값을 다시 한 번 입력하는 불편을 겪게
                  된다. 따라서 신청서 내 입력 항목들 간 관계를 파악하여 다른
                  입력 항목에 영향을 미치는 항목은 해당 항목들에 선행하여
                  입력하도록 순서를 설계해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_05_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  값의 변경이 이전에 작성한 항목 또는 이전 단계에 영향을 미치는
                  상황에 대해 사용자에게 안내해야 한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  만약 구조적으로 신청서 내 입력 항목 중 다른 입력 항목에 영향을
                  미치는 항목을 선행하여 입력하도록 순서를 설계하기 어렵다면,
                  적어도 후행 항목 입력 후 선행 항목에 변경이 발생하였다는
                  사실에 대해 인라인 메시지로 사용자에게 안내해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_05_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  행정정보 공동이용 시스템을 활용하여 사용자의 구비서류 첨부를
                  최소화한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  민원 신청 시 필요한 구비서류를 사용자가 직접 제출하지 않고
                  전산망에서 조회하여 처리할 수 있도록 행정정보 공동이용을
                  활용하여 사용자가 서비스 신청 시 첨부해야 하는 구비서류를
                  최소화한다. 이 경우 제출하지 않는 구비서류는 행정정보
                  공동이용을 통해 처리됨을 안내한다. 이를 통해 구비서류 준비에
                  소요되는 절차와 시간을 단축하고 신청 과정에서 발생할 수 있는
                  오류를 방지할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_05_05.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  여러 단계로 구성되어 있거나 작성에 시간이 걸리는 신청서 작성
                  과정에 임시 저장 기능을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청서 작성을 한 세션 내에 완료할 수 있다고 가정하지
                  않아야 한다. 사용자는 작성 과정에서 주변 환경의 방해를 받을 수
                  있고, 개인정보 보호가 보장되지 않는 공공장소에서 신청서를
                  작성하거나 필요한 정보/서류를 미리 준비하지 못한 상황에서
                  신청서를 작성할 수 있다. 일부 사용자는 신청서 작성에 평균적인
                  시간보다 더 많은 시간을 필요로 한다. 사용자가 다양한 상황에서
                  신청 과업을 수행한다는 사실을 염두에 두고, 작성한 신청서를
                  임시적으로 저장할 수 있는 기능을 제공하여 작업을 중단한
                  상태에서 바로 이어서 작업을 재개할 수 있도록 해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  입력 항목에 대한 레이블에 설명을 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  레이블에 일반적으로 자주 사용하지 않는 용어, 전문 용어를
                  사용하면 사용자는 이를 이해하고 입력하는 데 어려움을 겪을 수
                  있다. 레이블은 가능한 한 쉬운 단어로 제공하고 신청 서비스의
                  특성상 불가피하게 전문 용어를 사용해야 할 경우 도움 컴포넌트를
                  사용하여 설명을 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  신청서 작성에 대해 도움받을 수 있는 다양한 수단을 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  신청서 작성 중 어려움을 겪는 상황에서 사용자 스스로 문제를
                  해결할 수 있도록 여러 가지 도움말을 제공해야 한다. 도움말은
                  문의처를 포함하여 1가지 이상의 방식을 제공하는 것이
                  바람직하다.
                </p>
                <ul className="info-list dash">
                  <li>문의처: 전화번호, 이메일 주소, 챗봇 링크</li>
                  <li>도움 컴포넌트 사용: 어노테이션, 도움 패널, 코치마크</li>
                  <li>
                    자주 묻는 질문: 관련 내용의 직접 제공 또는 자주 묻는 질문
                    서비스 링크
                  </li>
                  <li>신청서 작성 예시 콘텐츠 링크</li>
                </ul>
              </li>
              <li>
                <strong>
                  도움말은 이용 맥락에 맞게 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  작성 시 참고해야 할 사항은 화면 상단의 유의 사항 안내 섹션이나
                  입력폼 하단이 아닌 입력 항목 자체에 제공해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  도움말은 정확한 내용으로 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  도움말로 제공하는 텍스트는 오탈자 없이 정확한 내용으로
                  작성되어야 하며 공식적인 명칭을 사용해야 한다. 도움말 링크는
                  링크 레이블에 명시된 정확한 콘텐츠로 연결되어야 한다.
                </p>
              </li>
              <li>
                <strong>
                  초기화 버튼은 다른 버튼과 명확하게 구분한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자가 실수로 입력값을 모두 삭제하지 않도록 초기화 버튼을
                  시각적, 공간적으로 다른 버튼과 구분해야 한다.
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
                  현재 단계를 스크린 리더로 확인할 수 있도록 한다.
                </strong>
                <p className="info-txt">
                  단계 인디케이터가 시각적으로만 구분되는 것이 아니라 스크린
                  리더로도 전달될 수 있도록 해야 한다. 만약 단계 레이블에
                  ‘현재’, ‘현재 단계’라는 텍스트가 제공되지 않고 있다면 현재
                  탐색 중인 단계에 aria-current=”true” 속성을 추가한다.
                  aria-current 속성을 사용할 수 없는 경우, 현재 단계 레이블에
                  ‘현재 단계’라는 텍스트를 추가하여 시각적으로 표시되도록 하거나
                  프로그램적으로만 전달되도록 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 적절한 대체 텍스트 제공</li>
                  <li>WCAG 2.1 Name, Role, Value (A)</li>
                </ul>
              </li>
              <li>
                <strong>
                  신청서 섹션에 제목을 제공하고 프로그램적으로 탐지할 수 있도록
                  한다.
                </strong>
                <p className="info-txt">
                  스크린 리더 사용자가 신청서 입력 폼 섹션의 구조와 각 섹션에서
                  입력해야 하는 정보가 무엇인지를 명확하게 인지하고, 필요한
                  입력폼 섹션 단위로 건너뛸 수 있도록 &lt;h2&gt;~&lt;h6&gt;
                  태그를 사용하여 헤딩을 제공해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 제목 제공</li>
                  <li>WCAG 2.1 Info and Relationships (A)</li>
                  <li>WCAG 2.1 Labels or Instructions (A)</li>
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
              <span className="btn-chip-outline">단계 표시기</span>
              <span className="btn-chip-outline">도움 패널</span>
              <span className="btn-chip-outline">맥락적 도움말</span>
              <span className="btn-chip-outline">따라하기 패널</span>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">개인 식별 정보 입력</span>
              <span className="btn-chip-outline">도움</span>
              <span className="btn-chip-outline">동의</span>
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
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "20%" }} />
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
                      <td>신청하기</td>
                      <td className="name">전입신고</td>
                      <td>신청인 정보 입력</td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="name"></td>
                      <td>이사 전 살던 곳</td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="name"></td>
                      <td>이사 온 곳</td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="name">건축물대장 등·초본 발급 신청</td>
                      <td></td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="name">주민등록표등본(초본)교부 신청</td>
                      <td></td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
                          className="btn sm btn-txt link text-primary"
                        >
                          html 화면 확인하기
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="name">자료신청</td>
                      <td></td>
                      <td className="file">
                        <Link
                          to="/service/request_05"
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

      <button className="btn tertiary sm go-top" type="button">
        TOP
      </button>
    </div>
  );
};

export default Gcontent_Request05;
