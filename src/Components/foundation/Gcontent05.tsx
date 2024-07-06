import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent05 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>디자인 원칙</span>
          <strong>쉽게 이해하고 사용할 수 있는 서비스</strong>
        </h2>
        <p className="g-desc">
          쉽게 이해하고 사용할 수 있는 디지털 정부 서비스는 콘텐츠와 사용자
          인터페이스가 친숙하면서도 간결하고 직관적인 방식으로 설계되어 있어
          사용자가 도움 없이도 이용할 수 있는 상태를 의미한다. 만약 사용자가
          실수하더라도 실수하기 이전 상태로 돌아갈 방안을 적절한 시기에 적절한
          방식으로 제공하므로 쉽게 문제를 해결할 수 있다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            디지털 정부 서비스와 사용자의 상호작용은 비대면 환경에서 이루어지기
            때문에 더 쉽게 사용할 수 있게 만들어야 한다.
            <br />
            눈에 보이지 않는 서비스와 의사소통하는 과정에서 만나게 되는 다양한
            이용 상황에는 불확실성이 존재한다. 사용자가 방문 목적을 달성하기
            위해서는 인터페이스, 콘텐츠를 포함하여 서비스의 여러 가지 불명확한
            요소에 대해 끊임없이 해석하고 이해하는 노력을 기울여야 한다. 이때,
            용어, 설명, 아이콘, 이미지, 작동 방식 등이 낯설거나 이해하기 어려운
            방식으로 표현된다면 사용자는 혼란스러울 수 있으며, 이로 인해
            무의식적인 실수를 하거나 부정확한 해석으로 오류를 경험할 수 있다.
            <br />
            보다 직관적이고 친숙하며 예측이 가능한 상호작용을 통해 사용자의
            실수를 최소화하는 것이 가장 중요하며, 그럼에도 불구하고 사용자가
            겪게 되는 다양한 문제에 대해서는 사용자 스스로 오류를 인식하고 쉽게
            수정하거나 해결 방법을 찾을 수 있도록 도움과 단서를 적극적으로
            제공해야 한다.
          </p>
        </div>
        <div className="conts-area">
          <h3 className="g-heading-m">이 원칙을 따르기 위한 주요 방안</h3>
          <p className="g-desc">
            쉽게 이해하고 사용할 수 있는 서비스를 제공하기 위해 다음 사항을
            고려한다.
          </p>
          <ol className="info-list decimal">
            <li>
              <strong>
                첫째, 사용자의 기대를 실제 서비스와 일치시키기 위해서는 이미
                확립된 친숙함을 기반으로 디자인하고 자연스럽고 논리적인 방식으로
                정보 및 기능을 제공해야 한다.
              </strong>
              <p className="info-txt">
                이에 대한 의사결정이 필요한 경우에는 경험이 없는 사용자도 원하는
                목적을 달성하였는지 테스트하고 그 결과를 반영할 수 있도록 해야
                한다.
              </p>
            </li>
            <li>
              <strong>
                둘째, 서비스의 사용 중에 도움이 필요한 다양한 상황에 대한
                피드백을 수집하고 별도의 체크리스트로 관리한다.
              </strong>
              <p className="info-txt">
                웹사이트의 오류와 관련된 피드백은 우선순위로 정하고 신속한
                방법으로 개선한다.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent05;
