import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent06 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>디자인 원칙</span>
          <strong>사용자의 다양한 상황을 고려하는 서비스</strong>
        </h2>
        <p className="g-desc">
          디지털 정부 서비스에서 사용자의 다양한 상황을 고려한다는 것은
          사용자마다 다른 이용 상황과 목적, 숙련도와 이용 빈도 등을 고려하여
          사용자가 원하는 방식으로 이용할 수 있게 구현하는 것을 의미한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            사용자는 누구나 자신의 목적과 상황에 맞도록 서비스를 이용할 수 있는
            자율성을 필요로 한다.
            <br />
            예를 들어, 숙련된 사용자는 작업의 속도를 높이거나 전문적인 이용을
            위한 고급 기능을 사용하고 싶어 한다. 반면 새로운 사용자는 낯선
            작업을 수행하기 위해 더 많은 도움과 생략되지 않은 절차를 원한다.
            모바일 환경을 더 선호하는 사용자도 있지만, PC를 더 자주 이용하는
            사용자도 있으며, 이용하는 기기나 브라우저가 달라지는 상황도
            존재한다.
            <br />
            이처럼 사용자의 상황이 다양함을 이해하고 사용자가 자유롭게 작업
            방식을 선택하거나 설정을 변경할 수 있는 유연한 환경을 제공해야 하며,
            사용자가 여러 가지 기기로 서비스에 접근하더라도 연속된 경험을
            제공받을 수 있도록 설계해야 한다.
          </p>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙을 따르기 위한 주요 방안</h3>
          <p className="g-desc">
            사용자가 보다 빠르고 간단하게 서비스 이용 목적을 달성하도록 만들기
            위해 다음 사항을 고려한다.
          </p>
          <ol className="info-list decimal">
            <li>
              <strong>
                첫째, 사용자마다 다른 서비스 이용 목적 및 사용 맥락을 파악하기
                위해 사용자가 실제로 어떤 환경에서 서비스를 어떻게 사용하고
                있는지 조사하고 관찰한다.
              </strong>
            </li>
            <li>
              <strong>
                둘째, 사용자들이 빈번하게 사용하는 과업에 대해 선택할 수 있는
                다양한 방법과 절차를 조사하고 정의한다.
              </strong>
              <p className="info-txt">
                전문 사용자의 상호작용 속도를 높일 수 있는 고급 기능은 사용자가
                선택할 수 있도록 제공하여 경험이 없는 사용자와 숙련된 사용자
                모두에게 적합한 서비스 환경을 만들 수 있다.
              </p>
            </li>
            <li>
              <strong>
                셋째, 사용자의 사용 이력을 바탕으로 필요로 하는 시점에 적절한
                정보와 기능을 제공한다.
              </strong>
              <p className="info-txt">
                이때, 사용자의 이용 흐름에 방해가 되거나 자율성이 저하되지
                않도록 유의해야 한다.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent06;
