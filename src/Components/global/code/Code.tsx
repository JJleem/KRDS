import React, { useState } from "react";

const Code = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<!-- 폼그룹 --><div class="form-group"><div class="form-tit">이름</div><div class="form-conts"><input type="text" id="consult_name" class="form-control md" placeholder="이름을 입력하세요."></div><p class="form-hint">개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다. 관련 <span class="text-underline text-point-primary">도움말</span>을 참고하세요.</p></div><!-- //폼그룹 --><!-- 폼그룹 --><div class="form-group"><div class="form-tit">성별</div><div class="form-conts"><div class="chk-area"><div class="form-check "><input type="radio" name="rdo_gender" id="rdo_gender-1"><label for="rdo_gender-1">남성</label></div><div class="form-check"><input type="radio" name="rdo_gender" id="rdo_gender-2"><label for="rdo_gender-2">여성</label></div><div class="form-check"><input type="radio" name="rdo_gender" id="rdo_gender-3"><label for="rdo_gender-3">선택안함</label></div></div></div></div><!-- //폼그룹 -->
    `);
    setCopyState("copied");
  };
  return (
    <div className="g-code-wrap accordion">
      <div className={`accordion-item ${isClicked ? "active" : ""}`}>
        <h2 id="accordionHeader01_01_01" className="accordion-header">
          <button
            type="button"
            className={`btn-accordion ${isClicked ? "active" : ""}`}
            onClick={handleClick}
            aria-controls="accordionCollapse01_01_01"
          >
            코드 확인하기
          </button>
        </h2>
        <div
          id="accordionCollapse01_01_01"
          className="accordion-collapse collapse"
          aria-expanded="false"
          aria-labelledby="accordionHeader01_01_01"
        >
          <div className="accordion-body">
            {/* code */}
            <div className="g-code-box">
              <div className="code-toolbar">
                <pre
                  data-src="code/global_01_01_01.html"
                  className="language-html"
                  data-src-status="loaded"
                  tabIndex={0}
                >
                  <code className="language-html">
                    <span className="token comment">&lt;!-- 폼그룹 --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-group
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>form-tit
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    이름
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-conts
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>input
                      </span>{" "}
                      <span className="token attr-name">type</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>text
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        consult_name
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-control md
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">placeholder</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>이름을
                        입력하세요.
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>p
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-hint
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다.
                    관련{" "}
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>span
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        text-underline text-point-primary
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    도움말
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>span
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    을 참고하세요.
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>p
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">
                      &lt;!-- //폼그룹 --&gt;
                    </span>
                    <span className="token comment">&lt;!-- 폼그룹 --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-group
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>form-tit
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    성별
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-conts
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>chk-area
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-check <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>input
                      </span>{" "}
                      <span className="token attr-name">type</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>radio
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-1
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>label
                      </span>{" "}
                      <span className="token attr-name">for</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-1
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    남성
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>
                        label
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-check
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>input
                      </span>{" "}
                      <span className="token attr-name">type</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>radio
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-2
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>label
                      </span>{" "}
                      <span className="token attr-name">for</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-2
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    여성
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>
                        label
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        form-check
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>input
                      </span>{" "}
                      <span className="token attr-name">type</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>radio
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-3
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>label
                      </span>{" "}
                      <span className="token attr-name">for</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        rdo_gender-3
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    선택안함
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>
                        label
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">
                      &lt;!-- //폼그룹 --&gt;
                    </span>
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <button
                      className="copy-to-clipboard-button"
                      type="button"
                      data-copy-state={copyState}
                      onClick={handleCopyClick}
                    >
                      <span>{copyState.toUpperCase()}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* //code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
