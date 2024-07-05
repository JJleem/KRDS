import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent2 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-I">
          <span>가이드라인 소개</span>
          <strong>가이드라인의 구성</strong>
        </h2>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">가이드라인의 구조</h3>
          <p className="g-desc">
            본 가이드라인은 5개의 수준으로 구성되어 있다. 이 중 '원칙'은 나머지
            수준의 가이드라인을 포괄하며 디지털 정부 서비스 UI/UX 설계에 대한
            전체적인 방향성을 안내한다. 나머지 수준의 가이드라인은 UI/UX를
            구성하는 세부 구성 요소이다.
          </p>
          <div className="g-conts-area grid-wrap">
            <div className="g-conts-area">
              <h4 className="g-heading-s">원칙</h4>
              <p className="g-desc">
                디지털 정부서비스 UI/UX의 방향성과 설계 기준이 되는 상위 원칙
              </p>
              <ul className="info-list decimal">
                <li>
                  누구나 더 쉽고 편리한 디지털 정부서비스로서 방향성과 UI/UX
                  혁신을 지향
                </li>
                <li>
                  각 원칙의 의미와 이유, 원칙을 따르기 위한 주요 방안을 제시
                </li>
              </ul>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">스타일</h4>
              <p className="g-desc">
                컴포넌트, 기본 패턴을 시각적으로 일관성 있게 표현하기 위한 규칙
              </p>
              <ul className="info-list decimal">
                <li>
                  일관성 있는 시각적 경험을 위해 사용자에게 가장 효과적으로
                  인지될 수 있는 스타일 요소
                </li>
                <li>
                  정부 상징의 사용 여부에 따라 유연하게 활용할 수 있는 역할과
                  규칙 기반의 스타일 정의
                </li>
              </ul>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">컴포넌트</h4>
              <p className="g-desc">
                사용자 인터페이스의 가장 작은 단위로 과업에 상관 없이 일관성
                있게 사용되는 공통 요소에 대한 가이드
              </p>
              <ul className="info-list decimal">
                <li>
                  보편적인 UI 요소를 바탕으로 디지털 정부서비스의 과업에서
                  빈번하게 사용되는 공통 구성요소
                </li>
                <li>
                  각 컴포넌트의 특성과 상태, 역할에 따른 유형을 정의하고
                  사용하기 적합한 용례를 제시
                </li>
                <li>
                  사용성 가이드라인, 접근성 가이드라인, 상호작용 가이드라인,
                  플랫폼에 대한 고려사항 기술
                </li>
              </ul>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">기본패턴</h4>
              <p className="g-desc">
                컴포넌트 요소들이 조합되어 핵심 과업을 수행하는 데 반복적으로
                함께 사용되는 사용자 인터페이스 집합에 대한 가이드
              </p>
              <ul className="info-list decimal">
                <li>
                  디지털 정부서비스의 과업에서 공통으로 사용되는 과업 패턴을
                  선정
                </li>
                <li>
                  각 패턴이 사용되는 과업 유형을 정의하여 상황에 따라 유연하게
                  선택할 수 있도록 제시
                </li>
                <li>
                  사용성 가이드라인, 접근성 가이드라인, 상호작용 가이드라인,
                  플랫폼에 대한 고려사항 기술
                </li>
              </ul>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">서비스 패턴</h4>
              <p className="g-desc">
                디지털 정부서비스에서 제공하는 핵심 과업에 대한 사용자 여정
                기반의 사용자 경험 설계 가이드
              </p>
              <ul className="info-list decimal">
                <li>
                  사용자 분석 데이터를 기반으로 디지털 정부서비스의 핵심 과업을
                  선정
                </li>
                <li>
                  핵심 과업별 사용자 여정을 정의하고, 각 여정 단계에서 사용자
                  경험을 향상하기 위한 가이드와 모범적으로 설계된 표준
                  프로토타입을 제시
                </li>
                <li>
                  사용성 가이드라인, 접근성 가이드라인, 상호작용 가이드라인,
                  플랫폼에 대한 고려사항 기술
                </li>
                <li>
                  서비스 상황별로 적용의 우선순위를 정할 수 있도록 '필수(Do) -
                  권장(Better) - 우수(Best)' 3단계의 적용 수준 제시
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">구성 항목별 핵심 내용</h3>
          <div className="g-conts-area">
            <div className="g-conts-area">
              <h4 className="g-heading-s">문서의 탐색 방식</h4>
              <p className="g-desc">
                본 가이드라인의 구조와 항목을 쉽게 이해하고 탐색할 수 있도록
                요소별로 세부 구성 목차를 배치하고, 각 페이지마다 현재 위치를
                표시하였다.
              </p>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">가이드 콘텐츠의 구성</h4>
              <p className="g-desc">
                구성 요소별 가이드 콘텐츠 영역은 디지털 정부서비스로서의 공통된
                경험을 제공하면서도 개별 서비스의 특성을 고려할 수 있도록
                구성하였다.
              </p>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">콘텐츠 간 연결 및 참조</h4>
              <p className="g-desc">
                서비스 패턴의 가이드를 기반으로 핵심 과업의 UI/UX를 설계하려면
                관련 컴포넌트와 기본 패턴의 가이드를 함께 참고하는 것이
                효과적이다. 본 가이드라인은 핵심 과업의 사용자 여정과 서비스
                패턴의 연결, 구성요소별 관련 항목 참조, 프로토타입 기반의 구조
                설명 등을 통해 구성 요소 간의 연계성을 쉽게 이해하고 참조할 수
                있도록 구성하였다.
              </p>
            </div>
            <div className="g-conts-area">
              <h4 className="g-heading-s">적용 기준과 수준의 표시</h4>
              <p className="g-desc">
                디지털 정부서비스를 구축하고 운영하는 과정에서 본 가이드라인의
                모든 항목을 준수하려면 많은 시간과 노력이 필요할 수 있다.
                가이드라인 적용의 실효성을 높이기 위해 본 가이드라인을 준수하기
                위해 이해해야 할 각급 기관별 적용 기준과 사용성 가이드라인의
                '필수-권장-우수' 항목 등에 관한 적용 수준을 명시하였다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent2;
