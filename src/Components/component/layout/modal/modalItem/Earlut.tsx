import React from "react";
import { useState } from "react";
const Earlut = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section
      id="modal_sample_02"
      className={`modal fade  alert ${isClicked ? "" : "in shown"} sample`}
      aria-hidden={`${isClicked ? "true" : "false"}`}
      role="dialog"
      aria-labelledby="tit_modal_sample_02"
    >
      <div className="modal-dialog">
        <div className="modal-content" tabIndex={0}>
          <div className="modal-header">
            <h2 id="tit_modal_sample_02" className="modal-title">
              모달 제목 - 얼럿형
            </h2>
          </div>

          <div className="modal-conts">
            <h3 className="conts-tit">내용 타이틀</h3>
            <div className="conts-area">
              대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나
              결정이 필요하거나 여러 작업을 포함할 수 있습니다.
            </div>
          </div>

          <div className="modal-btn btn-wrap">
            <button
              type="button"
              className="btn tertiary md close-modal"
              onClick={handleClick}
            >
              아니요
            </button>
            <button
              type="button"
              className="btn primary md close-modal"
              onClick={handleClick}
            >
              예
            </button>
          </div>

          <button type="button" className="btn-close close-modal">
            <span className="sr-only">닫기</span>
          </button>
        </div>
      </div>
      <div className="modal-back in"></div>
    </section>
  );
};

export default Earlut;
