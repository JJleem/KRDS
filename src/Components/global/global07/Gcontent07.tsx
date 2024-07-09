import React from "react";
import Code from "./code/Code";
import CodeTwo from "./code/CodeTwo";
import TopBtn from "../../common/topbtn/TopBtn";
import { useState } from "react";
const Gcontent07 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const handleClickTwo = () => {
    setIsClickedTwo(!isClickedTwo);
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
          <strong>오류</strong>
        </h2>
        <p className="g-desc">
          오류는 사용자가 요청한 작업을 시스템이 완료하지 못하는 문제가 발생했을
          때 제공된다. 발생 가능한 문제를 사전에 안내하는 경고와는 달리, 오류는
          이미 발생한 문제에 관한 정보를 사용자에게 알려준다. 오류정보는 단순히
          사용자에게 문제가 발생했음을 알려주는 데 그치지 않고 본래 수행하고자
          했던 행동을 완수할 수 있게 유도해야 한다. 오류정보를 제공하기 위해
          별도의 모달을 사용하거나 오류가 발생한 지점에 직접 메시지를 전달할 수
          있다.
        </p>
      </div>
      {/* //제목 */}

      {/* 설명 */}
      <div className="g-description-area">
        <div className="g-conts-area">
          <h3 className="g-heading-m">유형</h3>
          <ul className="info-list decimal">
            <li>
              <strong>인라인 메시지</strong>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/global/global_07_01_02.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <strong>모달</strong>
              <div className="g-img-wrap">
                <div>
                  <img
                    src="https://uiux.egovframe.go.kr/resources/img/guide/contents/global/global_07_01_01.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="g-conts-area">
          <h3 className="g-heading-m">사용성 가이드라인</h3>
          <div className="g-conts-area">
            <ul className="info-list decimal">
              <li>
                <strong>빠르게 인지할 수 있도록 표현한다.</strong>
                <p className="info-txt">
                  오류 메시지의 크기, 색상, 위치 등은 사용자가 빠르게 오류 발생
                  정보를 인지할 수 있게 표현해야 한다.
                </p>
              </li>
              <li>
                <strong>발생한 오류 및 문제를 분명하게 설명한다.</strong>
                <p className="info-txt">
                  사용자가 어떤 종류의 오류가 어떤 지점에서 발생했는지 명확히
                  이해할 수 있어야 오류를 수정할 수 있다.
                </p>
              </li>
              <li>
                <strong>오류를 수정할 수 있는 방법을 제공한다.</strong>
                <p className="info-txt">
                  오류의 내용이 복잡한 경우, 문제를 수정할 수 있는 방법을 함께
                  제공하면 효과적으로 오류를 수정할 수 있다.
                </p>
              </li>
              <li>
                <strong>정중한 문체를 사용한다.</strong>
                <p className="info-txt">
                  오류 메시지는 사용자에게 부정적인 상황을 알려주는 정보이므로,
                  정중한 문체를 사용하여 사용자를 안심시켜야 한다.
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
                  오류가 발생한 요소로 초점이 자동으로 이동되도록 제공한다.
                </strong>
                <p className="info-txt">
                  모달을 이용하여 오류 메시지가 제공되는 경우, 창이 닫힌 후
                  초점을 오류가 발생한 입력 필드로 이동 시키면 보조 기술
                  사용자는 부가적인 탐색 과정 없이 오류를 빠르게 수정할 수 있다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 오류 정정</li>
                  <li>WCAG 2.1 Error Identification (A)</li>
                </ul>
              </li>
              <li>
                <strong>사용자의 입력 값이 유지되도록 한다.</strong>
                <p className="info-txt">
                  오류 발생을 안내한 후에도 사용자가 입력한 값이나 조작한 내용을
                  유지하여, 사용자가 무엇이 잘못되었는지 확인하고 값을 수정할 수
                  있도록 해야 한다.
                </p>
                <ul className="info-list dash">
                  <li>KWCAG 2.2 오류 정정</li>
                  <li>WCAG 2.1 Error Identification (A)</li>
                </ul>
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
            <h4 className="g-heading-s">인라인 메시지 </h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
                {/* contents */}
                {/* 폼그룹 */}
                <div className="form-group">
                  <div className="form-tit">레이블</div>
                  <div className="form-conts is-error">
                    <input
                      type="text"
                      id="consult_name"
                      className="form-control"
                      placeholder="플레이스홀더"
                    />
                  </div>
                  <p className="form-hint-invalid">에러 메시지</p>
                </div>
                {/* //폼그룹 */}
                {/* //contents */}
              </div>
              <div className="g-code-wrap accordion">
                <div className={`accordion-item ${isClicked ? "active" : ""}`}>
                  <h2 id="accordionHeader07_01_01" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${isClicked ? "active" : ""}`}
                      onClick={handleClick}
                      aria-controls="accordionCollapse07_01_01"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <Code />
                </div>
              </div>
            </div>
          </div>

          <div className="g-conts-area">
            <h4 className="g-heading-s">모달</h4>
            <div className="g-example-wrap">
              <div className="g-example ex-full">
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
                          모달 제목 - 얼럿형
                        </h2>
                      </div>
                      {/* //modal title */}
                      {/* modal contents */}
                      <div className="modal-conts">
                        <h3 className="conts-tit">내용 타이틀</h3>
                        <div className="conts-area">
                          대화 상자는 사용자에게 작업에 대해 알리고 중요한
                          정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할
                          수 있습니다.
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
                          아니요
                        </button>
                        <button
                          type="button"
                          className="btn primary md close-modal"
                          onClick={handleModal}
                        >
                          예
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
                <div
                  className={`accordion-item ${isClickedTwo ? "active" : ""}`}
                >
                  <h2 id="accordionHeader07_01_02" className="accordion-header">
                    <button
                      type="button"
                      className={`btn-accordion ${
                        isClickedTwo ? "active" : ""
                      }`}
                      onClick={handleClickTwo}
                      aria-controls="accordionCollapse07_01_02"
                    >
                      코드 확인하기
                    </button>
                  </h2>
                  <CodeTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //예시 */}
      </div>
      {/* //컨텐츠 영역 */}
      <TopBtn />
    </div>
  );
};

export default Gcontent07;
