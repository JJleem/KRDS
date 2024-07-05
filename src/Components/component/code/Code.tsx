import React, { useEffect, useState } from "react";

const Code = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<div id="header-top">
	<div class="toggle-wrap">
		<div class="toggle-head">
			<div class="inner">
				<span class="nuri-txt">이 누리집은 대한민국 공식 전자정부 누리집입니다.</span>
				<button type="button" class="btn btn-txt ico-arr-down toggle-btn xsm">공식 누리집 확인방법<span class="sr-only">열기</span></button>
			</div>
		</div>
		<div class="toggle-body">
			<div class="inner">
				<dl class="dl nuri">
					<dt class="dt">공식 누리집 주소 확인하기</dt>
					<dd class="dd">go.kr 주소를 사용하는 누리집은 대한민국 정부기관이 관리하는 누리집입니다.<br class="br">이밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하고 있다면 아래 URL에서 도메인 주소를 확인해 보세요</dd>
					<dd><a href="javascript:window.open('https://uiux.egovframe.go.kr/search.do?query='+window.location.host,'_blank');" class="btn btn-txt ico-go xsm">운영중인 공식 누리집보기</a></dd>
				</dl>
			</div>
		</div>
	</div>
</div>

    `);
    setCopyState("copied");
  };
  return (
    <div
      id="accordionCollapse02_01_01"
      className="accordion-collapse collapse"
      aria-labelledby="accordionHeader02_01_01"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              className="language-html"
              // ref={codeRef}
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">id</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    header-top
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    toggle-wrap
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    toggle-head
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    inner
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    nuri-txt
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                이 누리집은 대한민국 공식 전자정부 누리집입니다.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
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
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt ico-arr-down toggle-btn xsm
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                공식 누리집 확인방법
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    span
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    sr-only
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                열기
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    span
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
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
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    toggle-body
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    div
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    inner
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    dl
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>dl nuri
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    dt
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>dt
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                공식 누리집 주소 확인하기
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    dt
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    dd
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>dd
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                go.kr 주소를 사용하는 누리집은 대한민국 정부기관이 관리하는
                누리집입니다.
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    br
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>br
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                이밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하고 있다면 아래
                URL에서 도메인 주소를 확인해 보세요
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    dd
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    dd
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span className="token attr-name">href</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    javascript:window.open('https://uiux.egovframe.go.kr/search.do?query='+window.location.host,'_blank');
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">className</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn btn-txt ico-go xsm
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                운영중인 공식 누리집보기
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    dd
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    dl
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

export default Code;
