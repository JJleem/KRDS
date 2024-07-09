import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Request04 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>유의 사항/자격 확인</strong>
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
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">안내 섹션</h4>
            <p className="info-txt">
              신청서 입력폼 상단에 직접 제공되는 형태로 안내하고자 하는 정보의
              중요도에 따라 디스클로저 컴포넌트와 함께 사용할 수 있다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단일 화면</h4>
            <p className="info-txt">
              신청의 첫 단계로 "유의 사항 및 자격 확인"을 진행한다. 실제 신청
              서식의 입력과는 상관 없이 사용자가 서비스를 신청하기에 적합한
              조건을 확인하기 위한 입력폼 또는 유의 사항에 대한 안내를
              제공한다..
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">유형 선택 방법</h4>
            {/* table list */}
            <div className="tbl-wrap">
              <table className="tbl col data">
                <caption>
                  유형 선택 방법에 대한 표로 이동에 대한 표로 구분/안내
                  섹션/단일 화면으로 구성되어있으며 구분 항목은 신청
                  취소/철회,제출된 신청 서식의 수정, 신청 자격의 제한, 신청서
                  작성의 단계와 속도 의 다양성 으로 구성되어있음
                </caption>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">안내 섹션</th>
                    <th scope="col">단일 화면</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">신청 취소/철회</th>
                    <td>해당 없거나 가능함</td>
                    <td>어렵거나 불가능함</td>
                  </tr>
                  <tr>
                    <th scope="row">제출된 신청 서식의 수정</th>
                    <td>해당 없거나 가능함</td>
                    <td>어렵거나 불가능함</td>
                  </tr>
                  <tr>
                    <th scope="row">신청 자격의 제한</th>
                    <td>제한 없음</td>
                    <td>신청 조건에 따라 신청 가능 여부가 결정됨</td>
                  </tr>
                  <tr>
                    <th scope="row">신청서 작성의 단계와 속도</th>
                    <td>단계가 적고 신청 서식이 간단함</td>
                    <td>
                      단계가 많고 각 단계를 완료하는 데 많은 노력과 오랜 시간을
                      투입해야 함
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //table list */}
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_04_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>배지: </strong>신청 서비스의 주요 메타 데이터를 요약하여
                제공함
              </li>
              <li>
                <span className="num">2. </span>
                <strong>안내 정보: </strong>신청서 작성 전 유의해야 할 사항,
                제출해야 할 서류 등의 정보를 안내함 <br />
                a. 취소/수정 가능 여부 <br />
                b. 전자서명/본인인증 절차의 포함 여부 <br />
                c. 제출할 증빙서류 <br />
                d. 기타 안내사항
              </li>
              <li>
                <span className="num">3. </span>
                <strong>디스클로저: </strong>: 부가적으로 참고 가능한 정보를
                제공하는 확장 가능한 영역
              </li>
              <li>
                <span className="num">4. </span>
                <strong>액션 버튼: </strong>다음 단계로 이동하기 위한 액션 버튼
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
                  유의 사항 및 자격 확인은 신청서 작성 과업의 가장 첫 단계로
                  제공한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  신청의 특성상 자격 판별을 위해 많은 정보를 입력해야 하는
                  상황을 제외하고 사용자가 신청서 작성 과정에서 유의 사항 및
                  자격 확인을 가장 먼저 거치도록 설계해야 한다. 특히 단계가
                  많거나 복잡한 신청서를 작성해야 하는 서비스에서 사용자가 이미
                  많은 정보를 입력한 중간 단계나 최종 제출 버튼을 누른 상태에서
                  제한 사항을 검증하게 되면 사용자는 쓸모없는 작업을 수행하게
                  된다. 제출 후 수정이나 취소가 불가능한 경우에는 사용자에게 더
                  심각한 결과를 가져올 수 있다.
                </p>
              </li>
              <li>
                <strong>
                  신청서 작성 중간이나 최종 단계에서 작성을 중단해야 하는 상황에
                  대해 사용자에게 명확하게 안내한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  신청의 특성상 자격 판별을 위해 많은 정보를 입력해야 한다면
                  신청서 작성 중간이나 최종 단계에서 진행 과정을 중단해야 하는
                  상황이 발생할 수 있음을 분명하게 인지할 수 있는 방식으로
                  전달해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_04_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  중요도와 계층 구조에 따라 정보를 직관적으로 인지할 수 있도록
                  표현한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 반드시 확인해야 할 정보가 다른 정보와 변별되도록
                  표현해야 한다. 만약 온라인으로 신청을 진행할 수 없거나 신청
                  자체가 불가능한 조건이 복합적이라면 목록, 표 등 다양한 방식을
                  활용하여 가능한 한 직관적으로 인지할 수 있는 정보 표현 방식을
                  사용해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  신청서 작성의 단계 중에 필요한 정보, 신청 완료 이후 필요한
                  정보는 포함하지 않는다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  ’유의 사항 및 자격 확인’의 과업 플로(Flow)의 맥락에 적합한
                  정보만을 제공해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_04_03.png"
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
                      <td>신청하기</td>
                      <td className="name">전입신고</td>
                      <td>유의사항 확인</td>
                      <td className="file">
                        <Link
                          to="/service/request_04"
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

export default Gcontent_Request04;
