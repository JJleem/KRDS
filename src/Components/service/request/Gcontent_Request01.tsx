import React from "react";

const Gcontent_Request01 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>신청</em>
          </span>
          <strong>개요</strong>
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
            <h4 className="g-heading-s">제출</h4>
            <p className="info-txt">
              정해진 서식에 따라 신청서를 작성하여 제출함 <br />
              예) 복지 급여 신청, 전입신고, 귀국신고
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">조회</h4>
            <p className="info-txt">
              자격, 문서 효력, 처분 결과 등을 확인함
              <br />
              예) 문서 진위 확인, 세액 조회
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">발급</h4>
            <p className="info-txt">
              증명 서류, 자격 번호 등을 발급함 <br />
              예) 주민등록 등·초본 발급, 개인통관번호 발급, 자동차 등록증 발급
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">예약</h4>
            <p className="info-txt">
              일정 기간 동안의 재화 또는 서비스에 대한 이용을 신청함 <br />
              예) 도서 예약, 좌석 예약, 관람 예약/예매
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">이용 상황별 플로 (Flow)</h3>
          <div className="g-img-wrap flow">
            <div>
              <img
                src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_04_01_01.png"
                alt=""
              />
            </div>
          </div>
          <ol className="flow-list apply">
            <li>
              <h4 className="g-heading-s">1) 신청 대상 탐색</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>서비스 목록 탐색</strong>
                  <p className="info-txt">
                    디지털 서비스에서 제공 중인 신청 서비스 목록에서 필요한 신청
                    서비스를 발견하는 과정
                  </p>
                </li>
                <li>
                  <strong>대상 선택하기</strong>
                  <p className="info-txt">
                    한 번에 여러 건의 서비스를 신청할 수 있어 필요한 서비스를
                    선택하고 일시적으로 저장하는 과정
                  </p>
                </li>
                <li>
                  <strong>신청하기</strong>
                  <p className="info-txt">
                    선택한 서비스에 대한 신청을 시도하는 과정
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">2) 신청서 작성</h4>
              <div className="flow-sub">
                <ul className="info-list decimal">
                  <li>
                    <strong>단계의 진행과 탐색</strong>
                    <p className="info-txt">
                      신청서 작성과 제출, 여러 단계로 구성된 신청의 경우에는
                      여러 개의 신청 서식의 작성을 완료하고 이전 단계로 돌아가
                      작성 내용을 확인하는 과정
                    </p>
                  </li>
                  <li>
                    <strong>신청 정보 입력</strong>
                    <p className="info-txt">
                      서식에서 작성을 요구하는 항목에 데이터를 입력하는 과정
                    </p>
                  </li>
                  <li>
                    <strong>신청 정보 자동 입력</strong>
                    <p className="info-txt">
                      인증 과정에서 확인된 정보 또는 기존에 입력한 데이터를
                      활용하여 서식을 직접 작성하지 않고 정보를 입력하는 과정
                    </p>
                  </li>
                </ul>
                <ul className="info-list decimal">
                  <li>
                    <strong>작성 도움말 확인</strong>
                    <p className="info-txt">
                      서식 작성에 대한 도움말을 확인하는 과정
                    </p>
                  </li>
                  <li>
                    <strong>신청서 작성 매뉴얼 확인</strong>
                    <p className="info-txt">
                      간단한 작성 도움말 외에 특정 서식 작성만을 위해 만들어진
                      매뉴얼을 참고하는 과정
                    </p>
                  </li>
                  <li>
                    <strong>서류 제출</strong>
                    <p className="info-txt">
                      신청에 필요한 증빙 서류(증명 사진, 주민등록등·초본 등)를
                      첨부하는 과정
                    </p>
                  </li>
                </ul>
                <ul className="info-list decimal">
                  <li>
                    <strong>여러 건 신청하기</strong>
                    <p className="info-txt">
                      동일한 신청 서비스를 다양한 조건으로 변형하여 이용하거나,
                      여러 번의 신청을 실행하는 과정{" "}
                    </p>
                  </li>
                  <li>
                    <strong>임시저장</strong>
                    <p className="info-txt">
                      입력한 데이터를 제출 이전에 일정 기간 동안 임시로 보관하는
                      과정으로 사용자가 명시적으로 저장을 실행하거나 시스템이
                      특정 주기별로 자동으로 정보를 저장할 수 있음
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h4 className="g-heading-s">3) 확인/확정</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>신청 내용 최종 확인</strong>
                  <p className="info-txt">
                    신청서를 제출하기 전에 작성한 내용이 정확한지 검토하는 과정
                  </p>
                </li>
                <li>
                  <strong>신청서 제출 확정</strong>
                  <p className="info-txt">
                    최종 단계에서 신청 행위를 확정하는 과정
                  </p>
                </li>
                <li>
                  <strong>신청서 작성 취소</strong>
                  <p className="info-txt">
                    최종 단계에서 신청 행위를 철회하는 과정
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">4) 신청 결과 확인</h4>
              <ul className="info-list decimal">
                <li>
                  <strong>결과 화면 찾기</strong>
                  <p className="info-txt">
                    신청서의 제출 이력을 확인할 수 있는 페이지를 탐색하는 과정
                  </p>
                </li>
                <li>
                  <strong>결과 목록 탐색</strong>
                  <p className="info-txt">
                    신청 이력을 일자별·진행 상태별로 확인하는 과정
                  </p>
                </li>
                <li>
                  <strong>진행 상태 확인</strong>
                  <p className="info-txt">
                    신청 건에 대한 기관 또는 시스템의 처리 상황을 확인하는 과정
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      {/* //설명 */}

      <button className="btn tertiary sm go-top" type="button">
        TOP
      </button>
    </div>
  );
};

export default Gcontent_Request01;
