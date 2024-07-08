import React from "react";
import { useState } from "react";
const Code = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<!-- disclosure -->
<div class="krds-disclosure conts-expand-area">
    <button type="button" class="btn-conts-expand">신청 서비스안내</button>
    <div class="expand-wrap">
        <div class="expand-in">
            <ul class="list-bullet">
                <li>하나의 아이디로 안전하고 편리하게 여러 전자정부 서비스를 이용할 수 있는 서비스입니다.</li>
                <li>디지털원패스 이용문의 : 1533-3713 (평일9~18시, 공휴일제외)</li>
            </ul>
        </div>
    </div>
</div>
<!-- //disclosure -->
    `);
    setCopyState("copied");
  };
  return (
    <div
      id="accordionCollapse04_04_01"
      className="accordion-collapse collapse"
      aria-expanded="false"
      aria-labelledby="accordionHeader04_04_01"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              data-src="code/component_04_04_01.html"
              className="language-html"
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
                <span className="token comment">&lt;!-- disclosure --&gt;</span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    krds-disclosure conts-expand-area
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    button
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    button
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn-conts-expand
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                신청 서비스안내
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    expand-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    expand-in
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    ul
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    list-bullet
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                하나의 아이디로 안전하고 편리하게 여러 전자정부 서비스를 이용할
                수 있는 서비스입니다.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                디지털원패스 이용문의 : 1533-3713 (평일9~18시, 공휴일제외)
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    li
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    ul
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    div
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token comment">
                  &lt;!-- //disclosure --&gt;
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
      </div>
    </div>
  );
};

export default Code;
