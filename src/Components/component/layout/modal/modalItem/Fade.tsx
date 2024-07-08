import React from "react";
import { useState } from "react";
const Fade = () => {
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="g-example ex-full">
      <button
        type="button"
        className={`btn open-modal ${isModal ? "modal-opened" : ""} sample`}
        data-target="modal_sample_03"
        onClick={handleModal}
      >
        class 및 data-target 호출
      </button>
      <section
        id="modal_sample_03"
        className={`modal fade  ${isModal ? "shown in" : ""}`}
        aria-hidden={`${isModal ? "false" : "true"}`}
        role="dialog"
        aria-labelledby="tit_modal_sample_03"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="tit_modal_sample_03" className="modal-title">
                모달 제목
              </h2>
            </div>

            <div className="modal-conts">
              <h3 className="conts-tit">내용 타이틀</h3>
              <div className="conts-area">
                시작 <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />
                대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를
                포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
                <br />끝
              </div>
            </div>

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

            <button
              type="button"
              className="btn-close close-modal"
              onClick={handleModal}
            >
              <span className="sr-only">닫기</span>
            </button>
          </div>
        </div>
        <div className={`modal-back ${isModal ? "in" : ""}`}></div>
      </section>
    </div>
  );
};

export default Fade;
