import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
import { Link } from "react-router-dom";

const Gcontent_Request07 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>완료</strong>
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
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_07_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>제목: </strong>완료 화면의 제목 텍스트
              </li>
              <li>
                <span className="num">2. </span>
                <strong>확인 정보: </strong>제출 완료된 신청 서식 내용 중
                사용자에게 중요한 입력 정보를 요약하여 제공하는 텍스트 목록
              </li>
              <li>
                <span className="num">3. </span>
                <strong>액션 컨트롤: </strong>신청 내역 화면 링크, 관련 서비스
                링크, 다시 신청하기 버튼 등 신청 완료 이후 사용자의 행동을
                유도하기 위한 수단이 제공됨
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
                  모든 신청 과업에는 완료 단계를 제공한다.{" "}
                  <span className="krds-badge">필수</span>
                </strong>
                <p className="info-txt">
                  신청서 제출이 완료된 이후에는 반드시 완료 화면으로 이동하여
                  사용자가 신청서가 정상적으로 제출되었음을 확인하고 신뢰할 수
                  있도록 해야 한다. 제출 후 ‘완료’에 대한 피드백 없이 메인
                  화면이나 신청 내역 화면으로 이동하게 되면 사용자는 당황할 수
                  있다.
                </p>
              </li>
              <li>
                <strong>
                  작성한 내용 중 핵심 정보를 요약하여 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청서에 작성한 정보를 최종적으로 확인할 수 있는
                  기회를 제공해야 한다. 이때, 사용자가 신청 과정에서 입력한 모든
                  데이터를 보여주는 것이 아니라 핵심 내용만 선별하여 제공하는
                  것이 바람직하다. 단, ‘확인/확정’ 단계가 포함된 신청이라면 핵심
                  정보 요약은 생략한다. <br />
                  핵심 정보로 제공할 수 있는 내용은 다음과 같다.
                </p>
                <ul className="info-list dash">
                  <li>답변 받을 연락처 정보</li>
                  <li>결과 확인 과정에서 필요한 정보</li>
                  <li>
                    심사 및 신청 결과에 영향을 미칠 수 있는 정보 (예- 소득 기준)
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  신청 결과를 확인할 수 있는 화면으로 연결된 링크를 제공한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청 내역, 결과, 진행 현황 등을 확인하고 신청 과업을
                  마무리할 수 있도록 신청 결과 확인 단계로 진입할 수 있는 수단을
                  제공해야 한다.
                </p>

                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_07_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 빈번하게 동일한 신청 서비스를 연속적으로 이용하는
                  경우, 같은 작업을 다시 수행할 수 있는 버튼을 제공한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  사용자가 신청을 위해 이미 거쳐온 단계를 반복하지 않고 가장
                  간단한 절차로 작업을 수행할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_07_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  관련된 신청 서비스 정보를 확인하거나 신청할 수 있는 링크를
                  제공한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  여러 사용자가 1회의 세션 동안 여러 신청을 동시에 이용하는
                  경우, 완료 화면에 이를 관련 서비스 링크로 제공하면 사용자가
                  서비스 방문 목적을 보다 효과적으로 달성할 수 있다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_07_04.png"
                      alt=""
                    />
                  </div>
                </div>
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
                          to="/service/request_07"
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

export default Gcontent_Request07;
