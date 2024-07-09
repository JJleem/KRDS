import React from "react";
import TopBtn from "../../common/topbtn/TopBtn";

const Gcontent_Login03 = () => {
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>
            서비스 패턴 <em>로그인</em>
          </span>
          <strong>로그인 안내</strong>
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
          <h3 className="g-heading-m">유형</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <p className="info-txt">
              로그인이 필수적인 화면/기능에 접근을 시도하는 경우에 사용한다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">추천</h4>
            <p className="info-txt">
              로그인이 필수적인 화면/기능에 접근을 시도하는 상황에서 로그인
              방식에 따라 이후 서비스 이용 과정이 달라지는 경우에 사용한다.
            </p>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">제안</h4>
            <p className="info-txt">
              로그인이 필수적인 화면/기능은 아니지만 로그인을 했을 때의 이점이
              존재하여 로그인할 것을 제안하는 경우에 사용한다.
            </p>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">구조</h3>
          <div className="g-conts-area">
            <div className="g-img-wrap">
              <div>
                <img
                  src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_01.png"
                  alt=""
                />
              </div>
            </div>
            <ol className="info-list ordered fraction">
              <li>
                <span className="num">1. </span>
                <strong>오버레이(Overlay): </strong>로그인 안내 모달과 하단의
                기본 창을 시각적으로 구분하기 위한 그림자 또는 가림막
              </li>
              <li>
                <span className="num">2. </span>
                <strong>헤더: </strong>모달의 제목을 포함한 영역으로 제목
                텍스트를 통해 로그인 화면으로의 전환이 필요함을 안내함
              </li>
              <li>
                <span className="num">3. </span>
                <strong>닫기 버튼(선택): </strong>사용자가 모달을 닫을 수 있게
                하는 버튼 요소
              </li>
              <li>
                <span className="num">4. </span>
                <strong>본문: </strong>정보와 다른 컴포넌트 요소가 제공되는 영역
              </li>
              <li>
                <span className="num">5. </span>
                <strong>푸터: </strong>모달의 하단 영역으로 로그인 안 함 옵션,
                로그인 화면으로 이동하는 링크 등의 액션 버튼으로 구성됨
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
                  로그인에 대한 안내는 모달로 제공하여 사용자의 과업 맥락이
                  유지될 수 있도록 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  로그인하지 않는 옵션을 선택하여 탐색 중인 화면에 머무르고자
                  하는 사용자, 로그인 없이 서비스를 이용하고자 하는 사용자가
                  현재의 이용 맥락이 유지됨을 인지할 수 있도록 모달 레이아웃을
                  이용하여 안내를 제공한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_02_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  로그인은 꼭 필요한 상황에서 유도한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  사용자의 작업 과정을 방해하지 말고, 로그인이 필요한 작업을
                  수행하는 상황에서 로그인을 요청해야 한다. <br />
                  기본, 추천 유형에서 로그인 안내는 사용자가 로그인이 필수적인
                  화면/기능에 접근하기 위한 액션 버튼을 실행하였을 때 제공한다.{" "}
                  <br />
                  제안 유형에서 로그인 안내는 사용자가 접근을 시도한 화면이
                  로딩된 후에 제공한다.
                </p>
              </li>
              <li>
                <strong>
                  로그인을 제안하는 경우 모달 본문에서 로그인을 통해 얻을 수
                  있는 이점에 대해 명확한 설명을 제공해야 한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  로그인 안내 모달이 제공되는 순간 사용자는 이용 흐름에 방해를
                  받게 된다. 따라서 로그인 제안은 로그인 상태에서 서비스/기능을
                  이용했을 때 사용자의 편의성을 향상할 수 있는 경우에만 사용해야
                  하며, 로그인했을 때의 이점, 로그인하지 않았을 때의 어려움을
                  포함하여 충분한 설명을 제공해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  사용자가 이용 절차를 단축할 수 있는 로그인 방식을 추천한다.{" "}
                  <span className="krds-badge bg3">우수</span>
                </strong>
                <p className="info-txt">
                  로그인 방식에 따라 서비스 이용 방식이 달라지는 경우 로그인
                  안내 과정에서 이용 절차를 단축할 수 있는 로그인 방식을
                  추천한다. 예를 들어, A 방식으로 로그인 했을 때에는 최종
                  단계에서 별도의 본인 인증 과정을 거쳐야 하지만 B 방식으로
                  로그인했을 때 본인 인증 과정을 건너뛸 수 있다면 로그인
                  안내에서 B 방식을 사용할 것을 추천하면 된다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_04.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>
                  로그인 안내 모달에는 ‘로그인 안 함’ 옵션을 제공하여 원하지
                  않는 이동 동작이 발생하지 않도록 한다.{" "}
                  <span className="krds-badge bg2">권장</span>
                </strong>
                <p className="info-txt">
                  현재 화면에 머무르기로 결정한 사용자가 서비스를 계속 이용할 수
                  있도록 모달 푸터에 ‘로그인 안 함’ 옵션을 제공해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_05.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="g-img-wrap">
                  <p className="caption">[피해야 할 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr//resources/img/guide/contents/service/service_03_03_05_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">관련 구성 요소</h3>
          <div className="g-conts-area">
            <h4 className="g-heading-s">컴포넌트</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">모달</span>
            </div>
          </div>
          <div className="g-conts-area">
            <h4 className="g-heading-s">기본 패턴</h4>
            <div className="g-flex component">
              <span className="btn-chip-outline">확인</span>
            </div>
          </div>
        </div>
      </div>
      {/* //설명 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent_Login03;
