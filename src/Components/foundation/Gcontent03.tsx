import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent03 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>디자인 원칙</span>
          <strong>공통된 경험 안에서 개별 특성을 고려한 서비스</strong>
        </h2>
        <p className="g-desc">
          디지털 정부의 모든 서비스는 기관과 서비스 유형에 상관없이 일관성 있는
          표현과 설계 방식으로 구현하여 하나의 대한민국 정부 서비스로 느껴지도록
          제공해야 한다.
          <br />
          일관성에 기반하여 사용자에게 디지털 정부 서비스에 대한 공통된 이용
          경험을 제공한다는 것은 획일화된 디자인을 경험하게 한다는 의미가
          아니다. 기관과 서비스의 역할, 목표가 다르기 때문에 제공하는 정보와
          대상 사용자가 완전히 동일할 수 없다. 성공적인 디지털 정부 서비스에는
          서비스별 고유한 특성에 최적화된 경험과 일관성이 공존해야 한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            디지털 서비스를 이용하는 사용자에게 가장 중요한 것은 누가 서비스를
            만들었느냐가 아니라 이용 목적을 달성하는 것이다. 기관에 따라,
            심지어는 한 서비스 내에서 동일한 정보와 기능을 사용하는 과정이
            일관성 없이 진행된다면 사용자는 혼동과 불편을 느낄 수밖에 없으며
            궁극적으로 디지털 정부 서비스에 대한 신뢰가 저하될 것이다.
            <br />
            공통된 경험을 제공하는 것은 디지털 정부 서비스를 만들어 가는
            참여자들에게도 중요하다. 일관된 경험을 제공하는 것을 목표로 서비스를
            설계하게 되면 의사결정에 투입되는 자원이 절약되므로 사용자 경험을
            향상하기 위한 더 중요한 작업에 집중할 수 있다.
          </p>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙을 따르기 위한 주요 방안</h3>
          <p className="g-desc">
            모든 디지털 정부 서비스에 대한 일관성 있는 경험을 구현하기 위해 다음
            사항을 고려한다.
          </p>
          <ol className="info-list decimal">
            <li>
              <strong>
                첫째, 디지털 정부 서비스 설계 가이드에 따라 만든다.
              </strong>
              <p className="info-txt">
                설계 가이드는 반복적이고 재사용 가능한 요소로 구성되어 있으므로,
                이에 기반한 설계를 통해 서비스 전체를 일관성 있게 만들 수 있다.
                가이드의 반복성과 재사용성은 기존에 구축된 서비스에서 일부
                화면을 개선하고자 하는 경우에도 무엇이 문제인지 확인하는 과정을
                효과적으로 만든다.
              </p>
            </li>
            <li>
              <strong>
                둘째, 서비스 특성에 적합한 가이드를 참고하여 최적의 경험을
                제공한다.
              </strong>
              <p className="info-txt">
                설계 가이드에 안내되어 있는 유연한 규칙을 활용하여 사용자의
                맥락, 서비스 특성, 프로젝트 상황에 맞는 최적의 디지털 정부
                서비스를 제공한다.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent03;
