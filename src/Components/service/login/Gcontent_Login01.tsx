import React from "react";

const Gcontent_Login01 = () => {
  return <div className="g-content">
  {/* 제목 */}
  <div className="g-title-area">
    <h2 className="g-heading-l"><span>서비스 패턴 <em>로그인</em></span><strong>개요</strong></h2>
    <p className="g-desc">
      로그인은 사용자의 신원을 확인하는 과정으로 사용자가 서비스에 접근할
      수 있도록 하는 수단이다. 사용자에게 개인화된 경험을 제공하거나
      사용자의 신분/신원을 인증하고자 하는 경우에 사용하기 적합하다.
    </p>
  </div>
  {/* //제목 */}
  
  {/* 설명 */}
  <div className="g-description-area">
    
    <div className="g-conts-area">
      <h3 className="g-heading-m">유형</h3>
      <div className="g-conts-area">
        <h4 className="g-heading-s">지식 기반 인증</h4>
        <p className="info-txt">
          사용자만이 유일하게 알고 있는 내용에 기반한 사용자 확인 방법 <br/>
          예) 아이디/패스워드, PIN
        </p>
      </div>
      <div className="g-conts-area">
        <h4 className="g-heading-s">소유 기반 인증</h4>
        <p className="info-txt">
          사용자가 보유하고 있는 품목을 활용한 인증 방법 <br/>
          예) 토큰, 공동인증, 간편인증, 문자 인증
        </p>
      </div>
      <div className="g-conts-area">
        <h4 className="g-heading-s">생체 기반 인증</h4>
        <p className="info-txt">
          사용자의 생체 정보, 행동에 기반한 인증 방법 <br/>
          예) 지문 인증, 페이스 아이디
        </p>
      </div>
      <div className="g-conts-area">
        <h4 className="g-heading-s">다중 요소 인증</h4>
        <p className="info-txt">
          여러 가지 인증 방식을 결합하여 제공하는 인증 방법
        </p>
      </div>
    
    </div>
    
    <div className="g-conts-area">
      <h3 className="g-heading-m">이용 상황별 플로(Flow)</h3>
      <div className="g-img-wrap flow">
        <div><img src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_01_01.png" alt=""/></div>
      </div>
      <ol className="flow-list">
        <li>
          <h4 className="g-heading-s">1) 로그인 방식 확인 및 선택</h4>
          <ul className="info-list decimal">
            <li>
              <strong>로그인 방식 탐색</strong>
              <p className="info-txt">2개 이상의 로그인 방식에
                대해 비교하고 선택하는 과정</p>
            </li>
            <li>
              <strong>도움말 확인</strong>
              <p className="info-txt">로그인 방식, 방법에 대한
                안내를 확인하는 과정</p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className="g-heading-s">2) 로그인 정보 입력</h4>
          <ul className="info-list decimal">
            <li>
              <strong>정보 입력</strong>
              <p className="info-txt">인증 방식에 따라 정보를
                입력하는 과정</p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className="g-heading-s">3) 로그인 완료</h4>
          <ul className="info-list decimal">
            <li>
              <strong>완료</strong>
              <p className="info-txt">로그인이 성공적으로 완료되어
                화면을 벗어나는 과정</p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className="g-heading-s">4) 로그아웃</h4>
          <ul className="info-list decimal">
            <li>
              <strong>로그아웃</strong>
              <p className="info-txt">인증을 해제하는 과정으로
                사용자가 자발적으로
                수행하거나 세션 유지 시간
                만료로 인해 자동으로 해제될
                수 있음</p>
            </li>
          </ul>
        </li>
      </ol>
      
    </div>
    
    
  </div>
  {/* //설명 */}
  
<button className="btn tertiary sm go-top" type="button">TOP</button></div>;
};

export default Gcontent_Login01;
