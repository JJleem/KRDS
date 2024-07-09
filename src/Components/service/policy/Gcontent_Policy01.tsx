import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Policy01 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>정책 정보 확인</em>
          </span>
          <strong>개요</strong>
        </h2>
        <p className="g-desc">
          정책 정보 확인은 디지털 서비스에 개제된 정부/기관의 행동 방침, 계획,
          법률에 관한 정보를 사용자가 확인하는 과업이다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">정책 정보</h4>
            <p className="info-txt">
              정부가 공공문제를 해결하거나 정치적·행정적 목표를 실현하기 위해
              마련한 법률·정책·사업·사업계획·정부방침·정책지침·결의 사항 등에
              대한 정보 <br />
              예) 주요 정책 소개
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">관련 자료</h4>
            <p className="info-txt">
              주요 정책을 이해하고 참여하는데 필요한 각종 자료 <br />
              예) 보고서, 매뉴얼, 법령 자료, 정책 홍보자료, 연구 자료, 국정 과제
              등
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">이용 상황별 플로(Flow)</h3>
          <div className="g-img-wrap flow">
            <div>
              <img
                src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_05_01_01.png"
                alt=""
              />
            </div>
          </div>
          <ol className="flow-list">
            <li>
              <h4 className="g-heading-s">1) 정책 상세 정보 확인</h4>
              <ul className="info-list decimal">
                <li>
                  <p className="info-txt">
                    상세 콘텐츠를 확인하여 찾고자 한 내용에 부합하는지, 어떤
                    내용이 포함되어 있는지 등을 이해하고 비교 및 검토를 수행하는
                    과정
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="g-heading-s">2) 정책 자료 참고</h4>
              <ul className="info-list decimal">
                <li>
                  <p className="info-txt">
                    정책과 관련된 각종 자료를 통해 궁금증을 해결하거나
                    사업·서비스의 참여에 도움이 되는 내용을 확인하는 과정
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      {/* //설명 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Policy01;
