import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Login06 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>로그인</em>
          </span>
          <strong>로그인 완료</strong>
        </h2>
        <p className="g-desc">
          로그인은 사용자의 신원을 확인하는 과정으로 사용자가 서비스에 접근할 수
          있도록 하는 수단이다. 사용자에게 개인화된 경험을 제공하거나 사용자의
          신분/신원을 인증하고자 하는 경우에 사용하기 적합하다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_06_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>사용자 이름: </strong>사용자의 이름, 별명, 프로필 사진이
                제공됨. 사용자의 개인화 서비스로 이동하는 링크나 계정 관련 옵션
                목록을 확인하기 위한 메뉴 실행 버튼으로 사용될 수 있음
              </li>
              <li>
                <span className="num">2. </span>
                <strong>로그아웃 버튼: </strong>로그인 상태를 해제하기 위한 버튼
              </li>
              <li>
                <span className="num">3. </span>
                <strong>개인화 메뉴: </strong>사용자 개인화 서비스, 설정 화면,
                로그아웃 버튼 등의 기능을 제공하는 메뉴로 드롭다운 메뉴나 드로어
                메뉴로 제공될 수 있음
              </li>
              <li>
                <span className="num">4. </span>
                <strong>로그아웃까지 남은 시간: </strong>로그인 세션이
                유지되기까지 남은 시간을 표시함
              </li>
              <li>
                <span className="num">5. </span>
                <strong>로그인 연장 버튼: </strong>로그인 상태 유지 시간을
                연장하기 위한 버튼
              </li>
            </ol>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  로그인이 완료된 후, 로그인 상황에 적합한 화면으로 이동해야
                  한다. <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인 플로(Flow)에 진입하기 전의 사용자 여정이 단절되지
                  않도록 로그인을 시도한 상황에 적합한 화면으로 연결해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>
                    사용자가 의도적으로 로그인 버튼을 눌러 로그인한 경우,
                    사용자가 탐색 중이던 화면으로 연결되어야 한다.{" "}
                  </li>
                  <li>
                    사용자가 특정 서비스에 접근을 시도하여 ‘로그인 안내’ 단계를
                    거쳐 로그인이 완료된 경우 사용자가 접근을 시도한 화면으로
                    이동하면 된다.
                  </li>
                  <li>
                    사용자가 특정 기능의 사용/적용을 시도하여 ‘로그인 안내’
                    단계를 거쳐 로그인이 완료된 경우 사용자가 탐색 중이던
                    화면으로 연결되어야 한다.
                  </li>
                </ul>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_06_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_06_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  로그인 상태로 전환되었음을 명확하게 표현한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인 기능이 사라지고 로그아웃 옵션을 표시하는 등의 방법으로
                  현재 로그인 상태에 있음을 사용자에게 알려주어야 한다.
                  마이페이지 버튼을 실행시켜 활성화된 레이어에 사용자 이름을
                  제공하면 로그인 상태를 표현하면서도 개인 정보를 보호할 수
                  있다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">접근성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  로그인 완료 후 페이지가 로딩되었을 때 초점은 문서 가장
                  처음부터 접근되도록 한다.
                </strong>
                <p className="info-txt">
                  로그인 완료 후 페이지가 로딩되었을 때 키보드 및 스크린 리더
                  초점은 문서 가장 처음부터 접근하도록 구현한다. 문서의 시작
                  영역이 아닌 헤더나 본문에 초점이 자동으로 이동하게 예측하지
                  못한 위치에서 탐색이 시작되어 사용자가 당황할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 초점 이동과 표시</li>
                  <li>WCAG 2.1 Focus Order (A)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TopBtn />
    </div>
  );
};

export default Gcontent_Login06;
