import React from "react";
import { useState } from "react";
const CodeFive = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<div class="form-chip">
	<input type="radio" class="radio" name="rdo_chip_size" id="rdo_chip_lg">
	<label class="form-chip-outline" for="rdo_chip_lg">chip size : lg</label>
</div>
<div class="form-chip md">
	<input type="radio" class="radio" name="rdo_chip_size" id="rdo_chip_md">
	<label class="form-chip-outline" for="rdo_chip_md">chip size : md</label>
</div>
<div class="form-chip sm">
	<input type="radio" class="radio" name="rdo_chip_size" id="rdo_chip_sm">
	<label class="form-chip-outline" for="rdo_chip_sm">chip size :sm</label>
</div>
    `);
    setCopyState("copied");
  };
  return (
    <div
      id="accordionCollapse06_01_05"
      className="accordion-collapse collapse"
      aria-expanded="false"
      aria-labelledby="accordionHeader06_01_05"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              data-src="code/component_06_01_05.html"
              className="language-html"
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    input
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">name</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_size
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">id</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_lg
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    label
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip-outline
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">for</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_lg
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                chip size : lg
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    label
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
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip md
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    input
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">name</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_size
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">id</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_md
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    label
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip-outline
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">for</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_md
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                chip size : md
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    label
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
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip sm
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    input
                  </span>{" "}
                  <span className="token attr-name">type</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    radio
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">name</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_size
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">id</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_sm
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    label
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    form-chip-outline
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">for</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    rdo_chip_sm
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                chip size :sm
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    label
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

export default CodeFive;
