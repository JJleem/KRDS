import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent02 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>디자인 원칙</span>
          <strong>모든 사용자를 포용하는 서비스</strong>
        </h2>
        <p className="g-desc">
          디지털 정부 서비스의 사용자는 장애인, 고령자, 어린이, 외국인을
          포함하여 서로 다른 능력, 환경, 상황을 가진 모든 사람으로 정의해야
          한다. 모든 사람이 동등한 수준의 노력을 통해 서비스 이용 목적을
          달성하도록 만드는 것이 포용적인 디지털 정부 서비스의 핵심이다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            포용적인 디지털 서비스를 만드는 것을 어렵게 만드는 원인 중 하나는
            포용적인 서비스가 특정 사용자만을 위한 것이라는 인식에 있다.
            <br />
            그러나 평균 수명의 증가, 사회와 기술의 다변화는 점점 더 소수의
            사용자만 겪는 어려움을 누구나 일시적, 상황적으로 경험할 수밖에
            없도록 만들고 있다. 예를 들어, 흔들리는 버스에서 손잡이를 잡은 채로
            모바일 디바이스를 이용하는 사람은 상황적으로 한 팔이 없는 사람과
            동일한 장애를 겪게 된다. 생물학적 노화는 필연적으로 사람의 감각적,
            인지적 능력의 저하를 가져오므로 모든 사람은 언젠가는 영구적인 장애를
            갖게 된다.
            <br />
            이는 포용적인 서비스를 제공함으로써 결국 모든 서비스의 편의성이
            향상될 수 있음을 의미한다.
          </p>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙을 따르기 위한 주요 방안</h3>
          <ol className="info-list decimal">
            <li>
              <strong>
                첫째, 디지털 정부 서비스 경험 설계의 첫 단계에서 정의하고
                테스트한다.
              </strong>
              <p className="info-txt">
                어떤 유형의 사용자가 어떤 상황에서 사용에 어려움을 느낄 수
                있는지를 확인하고 반복적으로 개선한다. 마지막 단계에서 문제를
                해결하려면 더 많은 자원을 투입할 수밖에 없음을 염두에 두어야
                한다.
              </p>
            </li>
            <li>
              <strong>
                둘째, 가장 어려워하는 사용자에 대한 문제를 먼저 제거한다.
              </strong>
              <p className="info-txt">
                영구적인 장애 상황에서 겪을 수 있는 사용자의 문제를 해결하면
                일시적으로 어려움을 겪는 상황의 문제를 자연스럽게 해결할 수
                있다.
              </p>
            </li>
            <li>
              <strong>셋째, 각 사용자 집단에 적합한 대안을 제공한다.</strong>
              <p className="info-txt">
                이 원칙의 목표는 모든 사용자가 완전히 동일한 방법과 절차에 따라
                서비스를 이용하도록 만드는 것이 아니다. 사용자 특성에 따라 더
                편하게 접근할 수 있는 방식이 존재할 수 있으므로 모든 유형의
                사용자가 동등한 수준의 노력으로 사용할 수 있는 수단을 제공하되,
                이것이 차별로 느껴지지 않도록 유의한다.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent02;
