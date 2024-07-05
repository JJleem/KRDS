import React from "react";
import TopBtn from "../common/topbtn/TopBtn";

const Gcontent = () => {
  return (
    <div className="g-content">
      <div className="g-title-area">
        <h2 className="g-heading-I">
          <span>디자인 원칙</span>
          <strong>사용자 중심의 서비스</strong>
        </h2>
        <p className="g-desc">
          디지털 정부 서비스에 대한 모든 의사 결정은 사용자를 중심으로
          이루어져야 한다. 즉, 사용자 요구 사항을 기반으로 설계하고, 사용자가
          원하는 정보와 기능을 제공하며, 사용자가 목적을 달성하는 과정을
          적극적으로 도와야 한다.
        </p>
      </div>
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙이 중요한 이유</h3>
          <p className="g-desc">
            서비스의 본질은 누군가가 어떤 일을 하도록 돕는 것이다. 디지털 정부도
            하나의 서비스로서 사용자가 정부와 관련된 다양한 일을 할 수 있도록
            도울 수 있어야 한다.
            <br />
            이때, 사용자는 누구이고 무엇을 하길 원하는지에 대한 공감 없이
            추측에만 기반하여 서비스를 설계한다면 아무도 그 서비스를 이용하지
            않을 것이다. 디지털 정부 서비스를 통해 자신이 원하는 결과를 얻거나
            문제를 해결하는 사람이 많아질수록 정부가 지향하는 정책 목표에도
            가까이 다가갈 수 있다.
            <br />
            디지털 정부 서비스를 설계하는 모든 단계에서 조직이나 개발자가 아닌
            사용자를 중심으로 사고하는 방법은 의사결정 과정에서의 목표를
            ‘사용자’로 집중시켜 불필요한 의사소통이나 소모적 논쟁을 줄이는 데도
            도움이 된다.
          </p>
        </div>
        <div className="g-conts-area">
          <h3 className="g-heading-m">이 원칙을 따르기 위한 주요 방안</h3>
          <p className="g-desc">
            사용자 중심의 디지털 정부 서비스를 제공하기 위해 다음 사항을
            고려한다.
          </p>
          <ol className="info-list decimal">
            <li>
              <strong>첫째, 서비스를 이용하는 사용자를 정의한다.</strong>
              <p className="info-txt">
                사용자를 정의할 때는 인구 통계학적인 접근을 넘어 서비스를
                이용하는 목표와 빈도, 과업 난이도 등 사용 맥락에 따른 유형을
                정의해야 실제 사용자의 다양한 요구 사항을 발견할 수 있다.
              </p>
            </li>
            <li>
              <strong>둘째, 사용자 여정을 고려한다.</strong>
              <p className="info-txt">
                사용자가 방문하여 원하는 것을 찾고 이해하고 수행하고 종료하는
                등의 일련의 과정 중에 겪게 되는 문제를 분석하고 해결하면 끊김
                없는 사용자 경험을 제공할 수 있다.
              </p>
            </li>
          </ol>
        </div>
        <TopBtn />
      </div>
    </div>
  );
};

export default Gcontent;
