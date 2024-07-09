import React from "react";
import Code from "./Code";
import { useState } from "react";
import TopBtn from "../../common/topbtn/TopBtn";
const Gcontent11 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div className="g-content">
      {/* 제목 */}
      <div className="g-title-area">
        <h2 className="g-heading-l">
          <span>기본 패턴</span>
          <strong>확인</strong>
        </h2>
        <p className="g-desc">
          확인은 사용자가 요청한 행위가 쉽게 취소할 수 없는 결과로 이어지거나,
          행동의 효과 또는 부작용을 사용자가 인지해야 하는 경우에 사용한다.
          사용자가 작업 내용을 확인하거나 수행을 승인하도록 함으로써, 어떤
          작업이 수행될 것인지에 관한 불확실성을 감소시키고 내용을 한 번 더
          점검할 수 있어 오류를 예방할 수 있다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <ul className="info-list decimal">
            <li>
              <strong>입력폼을 제출할 때</strong>
            </li>
            <li>
              <strong>화면의 중요한 맥락이 변경될 때</strong>
            </li>
          </ul>
          <div className="g-img-wrap">
            <div>
              <img
                src="https://uiux.egovframe.go.kr/resources/img/guide/contents/global/global_11_01_01.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>
                  심각하거나 취소가 어려운 행동에 확인을 요청한다.
                </strong>
                <p className="info-txt">
                  중요도가 낮은 행동에 반복적으로 확인을 요청하면 사용자는
                  불편을 느끼며, 시간이 지남에 따라 실제로 중요한 확인
                  메시지에는 신경 쓰지 않게 된다. 그러므로 결과가 매우 중요한
                  경우에 확인을 사용해야 한다.
                </p>
              </li>
              <li>
                <strong>상황에 대한 명확하고 간결한 설명을 제공한다.</strong>
                <p className="info-txt">
                  왜 그 행위를 수행하지 않아야 하는지, 어떤 결과가 발생하는지를
                  명확하고 간단하게 설명하여 사용자가 빠르게 내용을 인지할 수
                  있게 해 주어야 한다. 확인이 필요한 사항과 기능이 실행되었을 때
                  사용자에게 미칠 수 있는 내용에 대한 설명을 제공한다.
                </p>
              </li>
              <li>
                <strong>
                  행동을 확정, 취소할 수 있는 버튼을 모두 제공한다.
                </strong>
                <p className="info-txt">
                  행동을 확정하는 버튼과 함께 행동을 취소하고 이전으로 돌아갈 수
                  있는 버튼을 제공하여, 오류를 방지하는 역할을 수행해야 한다.
                </p>
                <div className="g-img-wrap">
                  <p className="caption">[모범 사례]</p>
                  <div>
                    <img
                      src="https://uiux.egovframe.go.kr/resources/img/guide/contents/global/global_11_01_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <strong>버튼의 레이블에 행동을 구체적으로 설명한다.</strong>
                <p className="info-txt">
                  버튼 레이블에 작동 시 어떤 동작을 수행하는 것인지 구체적으로
                  기술되어 있으면 사용자는 본문을 읽지 않더라도 어떤 행위를 할
                  것인지 또는 하지 말아야 하는지를 이해하고, 효과적으로 다음
                  행동을 취할 수 있다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* //설명 */}

      {/* 예시 */}
      <div className="g-example-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">마크업 예시</h3>

          <div className="g-conts-area">
            <h4 className="g-heading-s">기본</h4>
            <div className="g-example-wrap">
              <div className="g-example img-wrap">
                {/* contents */}
                {/* modal */}
                <section
                  id="modal_sample_02"
                  className={`modal fade alert ${
                    isModal ? "alert" : " in shown"
                  } sample`}
                  aria-hidden={isModal ? "true" : "false"}
                  role="dialog"
                  aria-labelledby="tit_modal_sample_02"
                >
                  <div className="modal-dialog">
                    <div className="modal-content" tabIndex={0}>
                      {/* modal title */}
                      <div className="modal-header">
                        <h2 id="tit_modal_sample_02" className="modal-title">
                          약관 상세내용
                        </h2>
                      </div>
                      {/* //modal title */}
                      {/* modal contents */}
                      <div className="modal-conts">
                        <div className="pop-agree-wrap">
                          <div className="agree-head">
                            <h3 className="tit">[필수] 민감정보 수집이용</h3>
                            <div className="agree-navigation">
                              <button
                                type="button"
                                className="btn btn-ico ico-page-prev"
                              >
                                <span className="sr-only"></span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-ico ico-page-next disabled"
                              >
                                <span className="sr-only"></span>
                              </button>
                            </div>
                          </div>

                          <div className="agree-body">
                            <div className="in">
                              <p className="agree-t1">
                                약관동의 및 개인정보수집이용동의
                              </p>
                              <ol className="info-list ordered fraction">
                                <li>
                                  <span className="num">1. </span>수집·이용하는
                                  개인정보의 항목 : 장애정보
                                </li>
                                <li>
                                  <span className="num">2. </span>민감정보의
                                  보유 및 이용기간 :
                                  <ul className="info-list dash">
                                    <li>
                                      보유근거 : 「사회보장급여의 이용‧제공 및
                                      수급권자 발굴에 관한 법률」 7조{" "}
                                    </li>
                                    <li>
                                      <p>보존기간 : </p>
                                      <ul className="info-list decimal">
                                        <li>
                                          신청정보(신청 상세정보) :
                                          결과통보일로부터 90일
                                        </li>
                                        <li>신청이력(신청 결과 내역): 5년</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                              <p>
                                이용자는 온라인 신청의 민감정보 수집 및 이용
                                동의를 거부할 권리가 있습니다. 다만, 민감정보의
                                수집 및 이용을 거부할 경우 해당 서비스를 이용할
                                수 없음을 알려드립니다.
                              </p>
                            </div>
                          </div>

                          <div className="agree-box">
                            <div className="chk-area">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="terms_rdo1"
                                  id="terms_rdo1-1"
                                />
                                <label htmlFor="terms_rdo1-1">동의안함</label>
                              </div>
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="terms_rdo1"
                                  id="terms_rdo1-2"
                                />
                                <label htmlFor="terms_rdo1-2">동의함</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //modal contents */}
                      {/* modal btn */}
                      <div className="modal-btn btn-wrap">
                        <button
                          type="button"
                          className="btn tertiary md close-modal"
                          onClick={handleModal}
                        >
                          취소
                        </button>
                        <button
                          type="button"
                          className="btn primary md close-modal"
                          onClick={handleModal}
                        >
                          확인
                        </button>
                      </div>
                      {/* //modal btn */}
                      {/* close button */}
                      <button
                        type="button"
                        className="btn-close close-modal"
                        onClick={handleModal}
                      >
                        <span className="sr-only">닫기</span>
                      </button>
                      {/* //close button */}
                    </div>
                  </div>
                  <div className="modal-back in"></div>
                </section>
                {/* //modal */}
                {/* //contents */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader11_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse11_01_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //예시 */}

      <TopBtn />
    </div>
  );
};

export default Gcontent11;
