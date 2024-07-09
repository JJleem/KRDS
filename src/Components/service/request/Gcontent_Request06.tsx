import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";
const Gcontent_Request06 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>확인·확정</strong>
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
            <h4 className="g-heading-s">모달</h4>
            <p className="info-txt">
              확인 절차를 모달에서 진행하는 형태로 사용자에게 안내해야 할 핵심
              정보의 양이 적어 모달에서 스크롤 없이 표현할 수 있는 경우에
              사용하기 적합하다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">단일 화면</h4>
            <p className="info-txt">
              확인 절차를 별도의 화면에서 진행하는 형태로 사용자에게 안내해야 할
              핵심 정보의 양이 많아 모달에서 스크롤 없이 표현할 수 없고 정보의
              구조화가 필요한 경우에 사용하기 적합하다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_06_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>요청하는 행동에 대한 간단한 요약 정보를
                제공함
              </li>
              <li>
                <span className="num">2. </span>
                <strong>설명(선택): </strong>제목에 부가적인 정보를 제공하기
                위한 텍스트
              </li>
              <li>
                <span className="num">3. </span>
                <strong>확인 정보: </strong>사용자에게 확인을 요청하고자 하는
                정보 목록
              </li>
              <li>
                <span className="num">4. </span>
                <strong>액션 컨트롤: </strong>신청서의 제출을 확정하거나
                중단하고 신청서 작성 단계로 돌아가는 액션을 위한 버튼 그룹
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
                  신청 취소/철회, 제출된 신청 서식 수정이 불가능한 경우
                  확인·확정 단계를 포함해야 한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청서의 제출 자체를 되돌릴 수 없거나 중요 정보를
                  수정할 수 없는 신청이라면 제출 완료 이전에 확인·확정 단계를
                  반드시 포함시켜 사용자가 실수하지 않도록 해야 한다. 만약
                  신청의 결과를 되돌릴 수 없더라도 동일한 신청을 여러 번 수행할
                  수 있는 발급형 신청에는 확인·확정 단계를 포함하지 않을 수
                  있다.
                </p>
              </li>
              <li>
                <strong>
                  작성한 내용 중 핵심 정보를 요약하여 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청서에 작성한 정보를 최종적으로 확인하고 잘못
                  작성한 경우 수정할 수 있는 기회를 제공해야 한다. 이때,
                  사용자가 신청 과정에서 입력한 모든 데이터를 보여주는 것이
                  아니라 핵심 내용만 선별하여 제공하는 것이 바람직하다. 핵심
                  정보로 제공할 수 있는 내용은 다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>답변 받을 연락처 정보</li>
                  <li>
                    신청 항목 중 취소/수정할 수 없는 정보 (예 - ‘여권 발급’ 신청
                    중 영문 이름)
                  </li>
                  <li>
                    심사 및 신청 결과에 영향을 미칠 수 있는 정보 (예- 소득 기준)
                  </li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_06_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  취소/수정 불가한 사항에 대해 사용자에게 명확하게 안내해야
                  한다. <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  모달의 헤더 내 제목, 본문 콘텐츠의 제목 또는 설명에 취소나
                  수정할 수 없음을 안내하는 텍스트를 반드시 포함시켜 사용자가
                  현재의 상황을 인지하고 이후 과정에서의 결과를 예측할 수 있도록
                  해야 한다.
                </p>
              </li>
              <li>
                <strong>
                  행동을 확정, 취소할 수 있는 버튼을 모두 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  행동을 확정하는 버튼과 함께 행동을 취소하고 이전으로 돌아갈 수
                  있는 버튼을 제공하여 사용자가 실수로 신청서를 제출하는 오류를
                  방지해야 한다.
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
              <span className="btn-chip-outline">모달</span>
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
                      <td className="name">서비스 신청</td>
                      <td>신청완료</td>
                      <td className="file">
                        <Link
                          to="/service/request_06"
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

export default Gcontent_Request06;
