import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent3 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-I">
          <span>가이드라인 소개</span>
          <strong>가이드라인의 활용 방법</strong>
        </h2>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <div className="g-conts-area">
            <h4 className="g-heading-s">기획</h4>
            <p className="g-desc">
              디지털 정부서비스의 목표를 수립하고 발주하는 기획 과정에서 사용자
              관점의 UI/UX 과업 범위를 정의하는 것은 매우 중요하다.
              <br />본 가이드라인을 활용하면 해당 서비스의 UI/UX 구현 목표와
              범위를 정의하고 사용자 경험 품질 요구사항을 구체적으로 명시할 수
              있다.
            </p>
            <div className="g-conts-area process-wrap">
              <h5 className="g-heading-xs">01. 사업계획 수립</h5>
              <ol className="info-list">
                <li>
                  적용 대상 및 기준에 따라 해당 서비스의 UI/UX 가이드라인 준수
                  범위 수립
                </li>
                <li>
                  원칙과 세부 콘텐츠를 기반으로 해당 서비스의 UI/UX 목표와
                  추진전략을 수립
                </li>
              </ol>
            </div>
            <div className="g-conts-area process-wrap">
              <h5 className="g-heading-xs">01. 발주</h5>
              <ol className="info-list">
                <li>
                  제안요청서의 ‘사업 추진 시 준수해야 할 규정에 관한 사항’ 등에
                  본 가이드라인의 준수를 명시
                </li>
                <li>
                  제안요청서의 '품질 요구사항'에 UI/UX 분석 및 설계, 구현,
                  테스트 단계에서 본 가이드라인의 내용들이 잘 준수되었는지
                  점검하도록 명시
                </li>
              </ol>
            </div>
          </div>
          <div className="g-conts-area">
            <h3 className="g-heading-m">특정 과업 및 요소의 UI/UX 일부 개선</h3>
            <p className="g-desc">
              본 가이드라인은 디지털 정부서비스에서 사용자가 빈번하게 경험하는
              핵심 과업과 사용자 인터페이스 공통 요소를 기반으로 개발되었다.
              <br />각 구성 항목의 유형과 용례를 이해하고 관련 요소를 조합하여
              적용하면 서비스의 개별 특성을 고려하면서도 일관성 있는 사용자
              경험을 제공할 수 있다.
            </p>
            <div className="g-conts-area">
              <div className="g-conts-area">
                <h4 className="g-heading-s">일부 요소의 UI/UX 개선</h4>
                <p className="g-desc">
                  서비스 전체가 아닌 일부 화면이나 요소의 UI/UX 개선이 필요한
                  경우, 해당 과업과 관련된 컴포넌트와 기본 패턴에서 해당 항목을
                  참고하여 개선한다.
                </p>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">
                    예시 1. 서비스의 '탐색'과 관련된 UI/UX 개선
                  </h5>
                  <ol className="info-list">
                    <li>
                      컴포넌트의 '탐색' 범주에 해당하는 메인 메뉴, 사이드 메뉴,
                      콘텐츠 내 탐색, 브레드크럼, 페이지네이션 등의 내용을 참고
                    </li>
                  </ol>
                </div>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">
                    예시 2. 서비스의 ‘도움’과 관련된 UI/UX 개선
                  </h5>
                  <ol className="info-list">
                    <li>
                      ‘도움’ 기본 패턴의 유형 중 안내 영역, 플레이스홀더, 인라인
                      텍스트, 툴팁, 맥락적 도움말, 도움 패널 등의 사용성
                      가이드라인을 참고
                    </li>
                  </ol>
                </div>
              </div>
              <div className="g-conts-area">
                <h4 className="g-heading-s">
                  서비스 패턴에 없는 과업의 UI/UX 개선
                </h4>
                <p className="g-desc">
                  서비스 패턴에 없는 과업의 UI/UX 개선 시, 서비스 패턴의 세부
                  여정에서 유사한 항목을 참고 하거나 과업의 구성 요소에 해당하는
                  가이드라인 참고하여 개선한다.
                </p>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">
                    예시 1. 서비스 가입, 예약 등의 UI 설계
                  </h5>
                  <ol className="info-list">
                    <li>
                      서비스 패턴 ‘신청’의 가이드라인 중, 해당 과업과 관련된
                      항목을 참고
                    </li>
                    <li>
                      기본 패턴의 입력폼, 도움, 확인, 오류 등의 가이드라인을
                      참고
                    </li>
                    <li>
                      해당 서비스 패턴과 기본 패턴을 구성하는 컴포넌트의
                      가이드를 참고하여 상세 UI 설계
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="g-conts-area">
            <h3 className="g-heading-m">모바일 서비스의 UI/UX 개선</h3>
            <p className="g-desc">
              본 가이드라인은 디지털 정부서비스를 이용하는 사용자의 과업 수행
              여정을 기반으로 개발되었으므로, 각 가이드라인의 개념과 목적을
              충분히 이해하고 모바일 웹·앱 서비스에 해당하는 내용을 참고하면
              모바일 사용자 경험을 향상할 수 있다.
            </p>
            <div className="g-conts-area">
              <div className="g-conts-area">
                <h4 className="g-heading-s">참고할 사항</h4>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">01. 원칙</h5>
                  <ol className="info-list">
                    <li>
                      '원칙 6. 사용자의 다양한 상황을 고려하는 서비스'에
                      해당하는 내용과 주요 방안을 이해하고 숙지
                    </li>
                  </ol>
                </div>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">02. 스타일</h5>
                  <ol className="info-list">
                    <li>
                      배치 항목의 반응형 레이아웃 그리드 등 스크린 크기별 가이드
                      참고
                    </li>
                  </ol>
                </div>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">
                    03. 컴포넌트/기본 패턴/서비스 패턴
                  </h5>
                  <ol className="info-list">
                    <li>
                      구성요소별 구조, 유형, 플랫폼 고려사항 및 사용성/접근성
                      가이드라인에서 모바일에 해당하는 사항 참고
                    </li>
                  </ol>
                </div>
                <div className="g-conts-area process-wrap">
                  <h5 className="g-heading-xs">04. 표준 프로토타입</h5>
                  <ol className="info-list">
                    <li>
                      헤더, 푸터 등 아이덴티티 영역과 각 서비스 여정별 표준
                      프로토타입의 모바일 화면 참고
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopBtn />
      </div>
    </div>
  );
};

export default Gcontent3;
