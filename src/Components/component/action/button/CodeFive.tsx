import React from "react";
import { useState } from "react";
const CodeFive = () => {
  const [copyState, setCopyState] = useState("copy");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`
<button type="button" class="btn sm btn-txt">텍스트 버튼</button>
<button type="button" class="btn sm btn-txt underline">밑줄 버튼</button>
<a href="#" class="btn sm btn-txt link">텍스트 사이의 링크 (높이값 초기화)</a>
<button type="button" class="btn sm btn-txt ico-share">공유하기</button>
<button type="button" class="btn sm btn-txt ico-like">찜하기</button>
<button type="button" class="btn sm btn-txt ico-arr">주민등록표초본</button>
<button type="button" class="btn sm btn-txt ico-sch">검색</button>
<button type="button" class="btn sm btn-txt ico-go">바로가기</button>
<button type="button" class="btn sm btn-txt ico-more">자세히 보기</button>
<button type="button" class="btn sm btn-txt ico-down">파일다운로드</button>
<button type="button" class="btn sm btn-txt ico-filter">필터</button>
    `);
    setCopyState("copied");
  };
  return (
    <div
      id="accordionCollapse05_02_05"
      className="accordion-collapse collapse"
      aria-expanded="false"
      aria-labelledby="accordionHeader05_02_05"
    >
      <div className="accordion-body">
        <div className="g-code-box">
          <div className="code-toolbar">
            <pre
              data-src="code/component_05_02_05.html"
              className="language-html"
              data-src-status="loaded"
              tabIndex={0}
            >
              <code className="language-html">
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
                    btn sm btn-txt
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                텍스트 버튼
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
                    btn sm btn-txt underline
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                밑줄 버튼
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
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
                    <span className="token punctuation">"</span>#
                    <span className="token punctuation">"</span>
                  </span>{" "}
                  <span className="token attr-name">class</span>
                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">"</span>
                    btn sm btn-txt link
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                텍스트 사이의 링크 (높이값 초기화)
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>a
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
                    btn sm btn-txt ico-share
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                공유하기
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
                    btn sm btn-txt ico-like
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                찜하기
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
                    btn sm btn-txt ico-arr
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                주민등록표초본
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
                    btn sm btn-txt ico-sch
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                검색
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
                    btn sm btn-txt ico-go
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                바로가기
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
                    btn sm btn-txt ico-more
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                자세히 보기
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
                    btn sm btn-txt ico-down
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                파일다운로드
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
                    btn sm btn-txt ico-filter
                    <span className="token punctuation">"</span>
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
                필터
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    button
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
