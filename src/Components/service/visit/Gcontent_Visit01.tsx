import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";
const Gcontent_Visit01 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>방문</em>
          </span>
          <strong>개요</strong>
        </h2>
        <p className="g-desc">
          방문은 사용자가 디지털 서비스에 접속하여 원하는 상세 정보로 연결되는
          과정으로 대개 정보 구조의 가장 상위 수준인 서비스의 메인 화면에서
          시작된다. 사용자와 서비스가 만나게 되는 첫 지점이므로 서비스에 대한
          첫인상을 결정하는 중요한 화면이다. 대부분의 사용자는 구체적인 맥락
          없이 서비스를 방문하게 되므로 명확하고 간결하게 구성되어야 한다.
        </p>
      </div>

      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">콘텐츠 유형</h3>

          <div className="tbl-wrap">
            <table className="tbl col data">
              <caption>
                콘텐츠 유형에 대한 표로 이동에 대한 표로 구분/설명으로
                구성되어있으며 구분 항목은 정책 및 서비스 정보, 기관 정보,
                내비게이션, 캠페인 및 홍보 정보, 긴급 알림, 연락처 로
                구성되어있음
              </caption>
              <colgroup>
                <col style={{ width: "15%" }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">정책 및 서비스 정보</th>
                  <td>
                    정책, 법령, 핵심 운영 서비스 정보 <br />
                    예) 정책, 훈령, 예고, 고시
                  </td>
                </tr>
                <tr>
                  <th scope="row">기관 정보</th>
                  <td>
                    기관/조직이나 장관에 대한 정보 <br />
                    예) 공지사항, 알림, 장관 소개
                  </td>
                </tr>
                <tr>
                  <th scope="row">내비게이션</th>
                  <td>
                    다른 정보나 서비스, 사이트로 이동하기 위한 링크 그룹 <br />
                    예) 자주 찾는 서비스
                  </td>
                </tr>
                <tr>
                  <th scope="row">캠페인 및 홍보 정보</th>
                  <td>
                    대개 일정 기간 동안 한시적으로 운영되는 시의성 있는 홍보
                    콘텐츠 <br />
                    예) 홍보 배너, 히어로 콘텐츠
                  </td>
                </tr>
                <tr>
                  <th scope="row">긴급 알림</th>
                  <td>
                    기관/조직 또는 서비스 운영에 대한 긴급 공지사항 <br />
                    예) 서비스 중단/서버 점검 알림, 재난 알림
                  </td>
                </tr>
                <tr>
                  <th scope="row">연락처</th>
                  <td>
                    서비스 운영 담당자 또는 기관의 연락처를 확인 <br />
                    예) 대표 전화번호, 민원 전화번호, 팩스 번호, 이메일 주소
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">이용 상황별 플로(Flow)</h3>
          <div className="g-img-wrap flow">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/service/service_01_01_01.png"
                alt=""
              />
            </div>
          </div>
          <ol className="flow-list">
            <li>
              <h4 className="g-heading-s">1) 정보 탐색</h4>
              <p className="info-txt">
                정책 및 서비스 정보, 기관 정보, 내비게이션, 캠페인 및 홍보, 긴급
                알림, 연락처와 같은 다양한 유형의 콘텐츠에서 필요한 정보를 찾는
                과정{" "}
              </p>
            </li>
            <li>
              <h4 className="g-heading-s">2) 정보 확인</h4>
              <p className="info-txt">콘텐츠의 의미를 해석하고 인지하는 과정</p>
            </li>
            <li>
              <h4 className="g-heading-s">3) 이동</h4>
              <p className="info-txt">
                탐색과 확인 과정에서 발견한 정보를 기반으로 서비스의 정보 구조를
                탐색하는 과정으로 서비스 내부로 이동하거나 관련된 외부 서비스로
                이동할 수 있음
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent_Visit01;
