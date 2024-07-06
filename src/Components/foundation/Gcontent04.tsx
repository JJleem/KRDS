import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent04 = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>디자인원칙</span>
          <strong>빠르고 간단한 서비스</strong>
        </h2>
        <p className="g-desc">
          디지털 정부 서비스에서 빠르고 간단한 서비스를 제공한다는 것은 이용
          과정에서 필요한 의사 결정을 최소화하는 방식으로 사용자의 경험을
          설계해야 함을 의미한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            서비스 이용 과정을 가장 간단한 절차로 만드는 작업은 생략되거나
            간과하기 쉽다. 서비스 성격을 고려하지 않고 일반적으로 사용되는 이용
            절차를 그대로 따라 설계하거나, 여러 조건에 따라 이용 절차가 다르게
            제공되어야 하는 사용자의 상황에 대한 이해가 부족하기 때문이다.
            게다가 중요한 과업일수록 이용 도중 심각한 오류를 경험하지 않는 이상,
            사용자는 시간이 얼마나 걸리는지에 상관없이 목표를 완수하기 때문에
            사용자의 목소리를 통해 이 문제를 확인하는 것은 쉽지 않은 일이다.
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
                첫째, 이용 과정에 필요한 사용자의 의사 결정 및 행동의 수를
                줄인다.
              </strong>
              <p className="info-txt">
                서비스 이용의 전체 과정을 고려하여 행동의 단계를 나눈다. 단계를
                추가할 때는 꼭 필요한 단계인지, 축약할 때는 단계의 진행에 문제가
                없는지를 신중하게 고민해야 한다.
              </p>
            </li>
            <li>
              <strong>둘째, 이용 단계의 속도를 고려한다.</strong>
              <p className="info-txt">
                정확한 확인과 결정이 필요한 과업은 단계와 속도가 느릴 수 있다.
                <br />
                과업의 성격에 상관없이 단계를 축소하는 데만 집중하게 될 경우,
                중요한 항목에 대한 의사 결정을 건너뛰는 등의 문제로 부가적인
                확인 절차가 추가되거나 같은 단계를 여러 번 반복하게 될 수 있다.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <TopBtn />
    </div>
  );
};

export default Gcontent04;
